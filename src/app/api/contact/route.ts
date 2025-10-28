import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, 5000)
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 })
    return true
  }

  if (limit.count >= 3) {
    return false
  }

  limit.count++
  return true
}

function containsSuspiciousContent(text: string): boolean {
  const suspiciousPatterns = [
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /<iframe[^>]*>[\s\S]*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<embed[^>]*>/gi,
    /<object[^>]*>/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(text))
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    let { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (typeof name !== 'string' || typeof email !== 'string' || 
        typeof subject !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input types' },
        { status: 400 }
      )
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    name = sanitizeInput(name)
    subject = sanitizeInput(subject)
    message = sanitizeInput(message)
    email = email.trim().toLowerCase()

    if (containsSuspiciousContent(name) || 
        containsSuspiciousContent(subject) || 
        containsSuspiciousContent(message)) {
      console.warn('Suspicious content detected from IP:', ip)
      return NextResponse.json(
        { error: 'Invalid content detected' },
        { status: 400 }
      )
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration is incomplete')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_EMAIL_TO) {
      console.error('CONTACT_EMAIL_TO is not configured')
      return NextResponse.json(
        { error: 'Email recipient is not configured' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    function escapeHtml(text: string): string {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }
      return text.replace(/[&<>"']/g, m => map[m])
    }

    const safeEmail = escapeHtml(email)
    const safeName = escapeHtml(name)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
              <p><strong style="color: #2c3e50;">From:</strong> ${safeName}</p>
              <p><strong style="color: #2c3e50;">Email:</strong> ${safeEmail}</p>
              <p><strong style="color: #2c3e50;">Subject:</strong> ${safeSubject}</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p><strong style="color: #2c3e50;">Message:</strong></p>
              <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px;">
                ${safeMessage}
              </div>
            </div>
            <p style="color: #7f8c8d; font-size: 12px; margin-top: 20px;">
              This email was sent from the contact form on willcannon.com
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
NEW CONTACT FORM SUBMISSION
=============================

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on willcannon.com
      `,
    })

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}

