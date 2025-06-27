import React from "react";
import SkillSection from "../assets/UI/SkillSection"


const skillsData = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript", "C", "HTML/CSS"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: ["Bootstrap", "Tailwind CSS", "Node.js", "Express.js", "EJS"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "🛠️",
    skills: ["React (Basics)"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL"],
  },
  {
    category: "Tools & Platforms",
    icon: "🧰",
    skills: [
      "Git",
      "Postman",
      "VS Code",
      "MS Office (Word, Excel, PowerPoint, Access)",
    ],
  },
  {
    category: "Web Hosting Platforms",
    icon: "🚀",
    skills: ["Vercel", "Netlify", "Heroku"],
  },
  {
    category: "Version Control",
    icon: "🔧",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "CI/CD Tools",
    icon: "📦",
    skills: ["Jenkins", "GitHub Actions", "CircleCI"],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    skills: ["Docker", "Kubernetes"],
  },
  {
    category: "Cloud Providers",
    icon: "☁️",
    skills: [
      "AWS (S3, EC2, Lambda)"
    ],
  },
  {
    category: "Monitoring & Logging",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "Elastic Stack (ELK)", "Sentry"],
  },
  {
    category: "Operating Systems & CLI",
    icon: "🖥️",
    skills: ["Window 10","Linux (CLI)"],
  }
];

const experienceData = {
  // Frontend Technologies
  "React": [
    {
      title: "Senior Frontend Developer",
      duration: "2022 - Present",
      description: "Led development of enterprise-scale React applications, implemented complex state management, and mentored junior developers."
    },
    {
      title: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Built responsive web applications using React, Redux, and Material-UI. Improved application performance by 40%."
    }
  ],
  "JavaScript": [
    {
      title: "Full Stack Developer",
      duration: "2021 - Present",
      description: "Developed modern web applications using JavaScript/ES6+. Implemented complex frontend functionalities and REST APIs."
    },
    {
      title: "JavaScript Developer",
      duration: "2019 - 2021",
      description: "Created interactive web features, optimized application performance, and implemented modern JavaScript practices."
    }
  ],

  // Backend Technologies
  "Python": [
    {
      title: "Backend Developer",
      duration: "2020 - Present",
      description: "Developed microservices using Python and FastAPI. Implemented data processing pipelines and API integrations."
    },
    {
      title: "Data Engineer",
      duration: "2019 - 2020",
      description: "Built ETL pipelines and data analysis tools using Python, Pandas, and NumPy."
    }
  ],
  "Java": [
    {
      title: "Java Developer",
      duration: "2018 - 2020",
      description: "Developed enterprise applications using Spring Boot. Implemented RESTful services and microservices architecture."
    }
  ],

  // Databases
  "MongoDB": [
    {
      title: "Database Administrator",
      duration: "2021 - Present",
      description: "Managed large-scale MongoDB clusters, optimized queries, and implemented data modeling best practices."
    }
  ],
  "PostgreSQL": [
    {
      title: "Database Engineer",
      duration: "2019 - 2021",
      description: "Designed and optimized database schemas, wrote complex SQL queries, and maintained high-performance databases."
    }
  ],

  // DevOps Tools
  "Docker": [
    {
      title: "DevOps Engineer",
      duration: "2020 - Present",
      description: "Containerized applications using Docker, created CI/CD pipelines, and managed container orchestration."
    }
  ],
  "Kubernetes": [
    {
      title: "Cloud Engineer",
      duration: "2021 - Present",
      description: "Managed Kubernetes clusters, implemented auto-scaling, and maintained high-availability deployments."
    }
  ],

  // Cloud Platforms
  "Google Cloud Platform": [
    {
      title: "Cloud Architect",
      duration: "2021 - Present",
      description: "Designed and implemented cloud-native solutions, managed cloud infrastructure, and optimized cloud costs."
    },
    {
      title: "Cloud Developer",
      duration: "2019 - 2021",
      description: "Developed applications using various GCP services including Cloud Functions, App Engine, and Cloud Run."
    }
  ]
};

const Skills = () => {
    return (
        <SkillSection 
          skillsData={skillsData} 
          experienceData={experienceData}
        />
    )
}

export default Skills;