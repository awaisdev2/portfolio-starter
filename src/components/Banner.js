import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <motion.section
      className="section"
      id="home"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col gap-y-8 lg:flex-row items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="text-4xl mb-3">
              <h1 className="text-6xl font-bold">
                Muhammad <span>Awais</span>
              </h1>
              <div>
                <span className="mr-2">I'm a</span>
                <TypeAnimation
                  sequence={[
                    "Developer",
                    2000,
                    "Designer",
                    2000,
                    "Youtuber",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="mb-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                atque labore eum non ratione ipsa.
              </p>
              <div className="my-5">
                <Link smooth={true} to="contact" className="btn cursor-pointer px-5 py-4 btn-sm mr-3">Contact me</Link>
              </div>
              <div className="flex justify-center md:justify-center lg:justify-normal my-3">
                <FaGithub className="mx-1 cursor-pointer" />
                <FaYoutube className="mx-1 cursor-pointer" />
                <FaDribbble className="mx-1 cursor-pointer" />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
