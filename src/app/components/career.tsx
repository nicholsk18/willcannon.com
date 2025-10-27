"use client"
import { motion, useAnimate, useInView } from "framer-motion"
import { useRef, useState } from "react"
import line from "@/../public/static/line.svg"
import Image from "next/image"

import leftArrow from "@/../public/static/icons/left-arrow.svg"
import rightArrow from "@/../public/static/icons/right-arrow.svg"

import IMG_7074 from "@/../public/static/career/IMG_7074.jpeg"
import IMG_7075 from "@/../public/static/career/IMG_7075.jpeg"
import IMG_7076 from "@/../public/static/career/IMG_7076.jpeg"
import IMG_7080 from "@/../public/static/career/IMG_7080.jpeg"
import { move } from "@/util/helpers"

export function Career() {
  const refText = useRef(null)
  const isInViewText = useInView(refText, { once: true })

  const refImg = useRef(null)
  const isInViewImage = useInView(refImg, { once: true })

  const [scope, animation] = useAnimate()
  const IMAGES = [IMG_7074, IMG_7075, IMG_7076, IMG_7080]
  const [images, setImages] = useState(IMAGES)
  const [text, setText] = useState([
    "Some supper cool example of how will won this tournament and became the best golfer in town 1",
    "Some information that describes what happend in this image. will rotate the image with scroll and text change for next item 2",
    "Some information that describes what happend in this image. will rotate the image with scroll and text change for next item 3",
    "Some information that describes what happend in this image. will rotate the image with scroll and text change for next item 4",
  ])
  const imageCount = images.length - 1

  // const [currentImage, setCurrentImage] = useState(0)
  // const [nextImage, setNextImage] = useState(0)
  const moveLeft = () => {
    const newOrder = move(images, imageCount, 0)
    setImages(newOrder)
    setText(move(text, text.length - 1, 0))
    newOrder.forEach((image, index) => {
      const currentIndex = IMAGES.map(stateImg => stateImg.src).indexOf(
        image.src
      )
      animation([
        [
          `.image-${currentIndex}`,
          { rotate: index, zIndex: imageCount - index },
        ],
      ])
    })
  }
  const moveRight = async () => {
    const newOrder = move(images, 0, imageCount)
    setImages(newOrder)
    setText(move(text, 0, text.length - 1))
    newOrder.forEach((image, index) => {
      const currentIndex = IMAGES.map(stateImg => stateImg.src).indexOf(
        image.src
      )
      animation([
        [
          `.image-${currentIndex}`,
          { rotate: index, zIndex: imageCount - index },
        ],
      ])
    })
  }

  return (
    <section className="w-full min-h-screen z-10 flex">
      <div className="flex flex-row gap-10 w-full">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, x: -250 }}
          animate={
            isInViewText ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 }
          }
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 my-auto overflow-hidden"
        >
          <h2 className="text-[128px] font-bold">Career</h2>
          <Image className="relative -top-8" src={line} alt="line" />

          <div className="relative flex">
            {text.map((item, i) => (
              <motion.p
                key={item + i}
                animate={
                  i === 0
                    ? {
                        opacity: 1,
                        y: 0,
                        display: "block",
                      }
                    : {
                        opacity: 0,
                        y: -50,
                        display: "hidden",
                      }
                }
                transition={{ duration: 0.25, delay: 0 }}
                // className={`text-[64px] leading-[64px] ${i === 0 ? "block" : "hidden"}`}
                className={`text-[64px] leading-[64px] min-w-full`}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={refImg}
          initial={{ opacity: 0, x: 250 }}
          animate={
            isInViewImage ? { opacity: 1, x: 0 } : { opacity: 0, x: 250 }
          }
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 my-auto"
        >
          <div className="flex justify-center relative items-center">
            <div className="relative right-10 cursor-pointer">
              <Image src={leftArrow} alt="Left arrow" onClick={moveLeft} />
            </div>

            <ul ref={scope} className="relative w-[500px] h-[700px]">
              {IMAGES.map((image, i) => (
                <motion.li
                  key={String(image.src) + i}
                  animate={{
                    rotate: i,
                    opacity: 1,
                    zIndex: imageCount - i,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute drop-shadow origin-bottom-left list-none image-${i} rotate-${i}`}
                >
                  <Image className="" src={image} alt="Will Golfing" />
                </motion.li>
              ))}
            </ul>

            <div className="relative left-12 cursor-pointer">
              <Image src={rightArrow} alt="right arrow" onClick={moveRight} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
