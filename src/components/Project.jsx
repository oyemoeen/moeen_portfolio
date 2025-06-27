import React from 'react';

// Dummy project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration using Stripe.",
    imageUrl: "../assets/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://ecommerce-demo.example.com",
    codeLink: "https://github.com/yourusername/ecommerce-project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    imageUrl: "../assets/images/task.png",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    liveLink: "https://taskapp-demo.example.com",
    codeLink: "https://github.com/yourusername/task-management-app"
  }
  ,
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather application that provides real-time weather data, forecasts, and location-based services.",
    imageUrl: "../assets/images/weather.png",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
    liveLink: "https://weather-demo.example.com",
    codeLink: "https://github.com/yourusername/weather-dashboard"
  }
];

const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 py-2 px-4 sm:px-6 lg:px-8" id="Projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-red-500 mt-20">My Projects</h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            Showcasing my web development portfolio
          </p>
          <div className="w-16 h-0.5 bg-red-400 mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-30 h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex space-x-3 mb-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 transition-colors text-sm font-medium"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-red-50 text-red-700 text-xs px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
