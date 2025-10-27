// "use client"
// import { motion, useMotionValueEvent, useScroll } from "framer-motion"
// import { useEffect, useState } from "react"
//
// export function Career() {
//   const [height, setHeight] = useState(0)
//   const [prevHeight, setPrevHeight] = useState(0)
//   const [sticky, setSticky] = useState(false)
//   const { scrollYProgress } = useScroll({
//     offset: ["start end", "end end"],
//   })
//
//   useMotionValueEvent(scrollYProgress, "change", latest => {
//     // console.log("Page scroll: ", latest)
//     setHeight(latest)
//   })
//
//   useEffect(() => {
//     console.log(height)
//     if (height > prevHeight) {
//       if (height > 0.65) {
//         setSticky(true)
//       }
//     } else if (height < prevHeight) {
//       if (height <= 0.65) {
//         setSticky(false)
//       }
//     }
//     setPrevHeight(height)
//   }, [height, prevHeight])
//
//   return (
//     <motion.div>
//       <section
//         className={`w-full bg-green-700 min-h-screen z-10 ${sticky ? "fixed top-0" : "relative"}`}
//       >
//         career
//         <p>Scroll</p>
//       </section>
//     </motion.div>
//   )
// }
