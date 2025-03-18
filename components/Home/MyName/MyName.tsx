import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-72 py-24 sm:py-32 md:py-40">

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono text-2xl sm:text-3xl md:text-4xl"
      >
        Namaste!
      </motion.h3>

      <motion.h1
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
    y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
  }}
  className="text-gray-300 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 leading-tight"
>
  I&apos;m <br className="block sm:hidden" />  
  Akshita Chotaliya
</motion.h1>


      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4"
      >
        I turn ideas into reality.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm sm:text-base md:text-lg mt-8 tracking-wide leading-relaxed"
      >
        I&apos;m a <span className="text-AAsecondary">Full Stack Software Engineer</span> with strong{" "}
        <span className="text-AAsecondary">problem-solving skills</span>, specializing in creating exceptional digital
        experiences. I work with a diverse range of technologies, including{" "}
        <span className="text-AAsecondary">web3</span> and traditional web applications. I enjoy solving challenging
        projects that drive <span className="text-AAsecondary">innovation</span> and deliver high-quality results.
      </motion.h3>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-8"
      >
        <a href="mailto:akshitachotaliya3@gmail.com" rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-6 sm:px-8 py-2 sm:py-3 border-AAsecondary text-sm sm:text-base">
            Say Hello!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
