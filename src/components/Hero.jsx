import "../App.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion"; // You'll need to install framer-motion
import { TypeAnimation } from "react-type-animation"; // You'll need to install react-type-animation
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div
        className="h-0 flex items-center relative overflow-hidden HeroPage"
        id="HeroPage"
      >
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div> */}

        <div className="container mx-auto px-2 mt-5">
          <div className="m-4 flex flex-col-reverse md:flex-row">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 mt-8 md:mt-20 text-center sm:px-6 md:px-8 lg:px-10 xl:px-12"
            >
              {/* Main Content */}
              <div className="space-y-6 text-white">
                <div className="space-y-3">
                  <motion.h1
                    className="text-2xl md:text-3xl font-light text-gray-700"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Hello, I am
                  </motion.h1>
                  <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600">
                    Moeen Ali
                  </h2>
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wider text-gray-600">
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        2000,
                        "DevOps Enthusiast",
                        2000,
                        "Prompt Engineer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Bridging DevOps, Web Development, and AI to deliver
                    scalable, automated, and smart tech solutions.
                  </p>
                </div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-center gap-6 mb-10"
                >
                  <a
                    href="https://www.linkedin.com/in/moeen-ali01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-800 transition-all duration-300 hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/oyemoeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-800 transition-all duration-300 hover:-translate-y-1"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-800 transition-all duration-300 hover:-translate-y-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </a> */}
{/*                   <a
                    href="https://www.instagram.com/oyemoeen_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-pink-600 transition-all duration-300 hover:-translate-y-1"
                  >
                    <i className="fab fa-instagram"></i>
                  </a> */}
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="w-full sm:w-auto group relative px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                    <a
                      href="./Moeen New CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-white  flex items-center justify-center"
                    >
                      Download Resume
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </button>

                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full px-4 py-2 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                      Contact Me
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 flex justify-center md:justify-center mt-20 mb-10"
            >
              <div className="relative">
                <div className="absolute -inset-4  from-pink-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <img
                  src="photo.png"
                  alt="Profile"
                  className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
