const About = () => {
  return (
    <div className="p-2 m-10" id="about-page">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-red-500 mt-20">About</h2>
        <p className="text-gray-600 mt-2 text-base">
          Aspiring Full Stack Developer & DevOps Enthusiast
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 mt-8">
        {/* Who am I Section */}
        <div className="w-full md:w-1/3 border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors duration-300">
          <h2 className="text-3xl font-semibold text-gray-500">Who am I ?</h2>
          <div className="w-12 h-1 bg-red-500 my-2"></div>
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">
              A DevOps Enthusiast Based on Earth, Aiming for the Cloud
            </p>
            <p className="text-gray-600 mt-2">
              An aspiring DevOps Engineer building real-world projects while
              gaining hands-on experience with automation, CI/CD pipelines,
              containerization,
            </p>
            <button className="mt-4 px-6 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              Download My CV
            </button>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="w-full md:w-1/3 border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors duration-300">
          <h2 className="text-3xl font-semibold text-gray-500 ">
            Personal Info
          </h2>
          <div className="w-12 h-1 bg-red-500 my-2"></div>
          <div className="space-y-3 mt-4">
            <p>
              <span className="font-semibold">Birthdate :</span> 18/12/2005
            </p>
            <p>
              <span className="font-semibold">Email :</span>{" "}
              moeenali0124@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone :</span> +91 983 788 9206
            </p>

            <p>
              <span className="font-semibold">Address :</span> Bilaspur Distt
              Rampur Uttar Pradesh .
            </p>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="flex space-x-4 mt-4 text-red-500 text-3xl">
            <a href="https://www.linkedin.com/in/moeen-ali01/" target="_blank">
              <i className="fab fa-linkedin text-blue-800 hover:scale-110  transition-transform cursor-pointer"></i>
            </a>
            {/* <i className="fab fa-google-plus hover:scale-110 transition-transform cursor-pointer"></i> */}
            <a href="https://github.com/moeenali123" target="_blank">
              <i className="fab fa-github text-gray-800 hover:scale-110 transition-transform cursor-pointer"></i>
            </a>
            <a href="https://www.instagram.com/oyemoeen_/" target="_blank">
              <i className="fab fa-instagram hover:scale-110, transition-transform cursor-pointer"></i>
            </a>
          </div>
        </div>

        {/* My Expertise Section */}
        <div className="w-full md:w-1/3 border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors duration-300">
          <h2 className="text-3xl font-semibold text-gray-500">My Expertise</h2>
          <div className="w-12 h-1 bg-red-500 my-2"></div>

          <div className="flex items-start space-x-4 mt-4 hover:translate-x-2 transition-transform cursor-pointer">
            <span className="text-red-500 text-xl">☑</span>
            <div>
              <h3 className="font-semibold text-gray-800">Web Development</h3>
              <p className="text-gray-600">
                Building responsive and dynamic websites using HTML, CSS,
                JavaScript, and MERN Stack
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 mt-4 hover:translate-x-2 transition-transform cursor-pointer">
            <span className="text-red-500 text-xl">🎨</span>
            <div>
              <h3 className="font-semibold text-gray-800">DevOps</h3>
              <p className="text-gray-600">
                Exploring tools like Git, Docker, Kubernetes, Jenkins, and cloud
                platforms (AWS, GCP).
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 mt-4 hover:translate-x-2 transition-transform cursor-pointer">
            <span className="text-red-500 text-xl">📈</span>
            <div>
              <h3 className="font-semibold text-gray-800">
                Prompt Engineering
              </h3>
              <p className="text-gray-600">
                Creating and refining AI prompts for tools like ChatGPT to solve
                real-world problems effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
