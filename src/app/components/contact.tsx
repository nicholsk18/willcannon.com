"use client"
import React, { useState } from "react"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function setName(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, name: event.target.value })
  }
  function setEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, email: event.target.value })
  }
  function setSubject(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, subject: event.target.value })
  }
  function setMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setForm({ ...form, message: event.target.value })
  }

  function submitForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div 
        className="bg-no-repeat bg-cover w-full h-full top-0 bg-bottom"
        style={{ backgroundImage: 'url(/static/contact-banner.png)' }}
      >
        <div className="container m-auto py-28">
          <div className=" flex justify-center items-center h-full max-w-[650px] bg-dark-transparent-75 flex-col py-1 px-10 mx-auto">
            <h2 className="text-[128px] font-bold text-center w-full">
              Say Hi
            </h2>

            <form
              action=""
              className="flex flex-col w-full gap-3 pb-5"
              onSubmit={submitForm}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Name"
                className="w-full bg-transparent border-2 border-white px-5 placeholder:text-white focus:outline-none error"
                onChange={e => setName(e)}
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email"
                className="w-full bg-transparent border-2 border-white px-5 placeholder:text-white focus:outline-none"
                onChange={e => setEmail(e)}
                required
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                placeholder="Subject"
                className="w-full bg-transparent border-2 border-white px-5 placeholder:text-white focus:outline-none"
                onChange={e => setSubject(e)}
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full bg-transparent border-2 border-white px-5 placeholder:text-white focus:outline-none h-56"
                onChange={e => setMessage(e)}
                defaultValue={form.message}
                required
              ></textarea>
              <input
                type="submit"
                name="submit"
                value="Send"
                className="bg-white text-dark-333 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
