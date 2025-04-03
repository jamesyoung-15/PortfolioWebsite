import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projectImages } from "../assets/projects";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Highlighted");

  const categories = ["Highlighted", "All Projects"];

  // const placeholderImage = "https://placehold.co/600";

  const projects = [
    {
      categories: ["Data Science", "Machine Learning", "Highlighted"],
      title: "Bluebikes Availability Predictor",
      description:
        `An application that forecasts the number of Bluebikes that will be available at 3 stations near my apartment in Boston using machine learning. 
        Model trained with Bluebikes historical trip histories and weather data.
        Frontend built with React, backend with Flask, and deployed with Docker on EC2.
        `,
      tags: ["Python", "Scikit-Learn", "Pandas", "Flask", "AWS"],
      image: projectImages.bluebikespredictor, // Replace with project image
      links: [
        {
          icon: faGithub,
          url: "https://github.com/jamesyoung-15/Bluebikes-Availability-Predictor",
        },
        {
          icon: faExternalLinkAlt,
          url: "https://bluebikespredictor.jyylab.com",
        }
      ],
    },
    {
      categories: ["Highlighted"],
      title: "Serverless Face Blurring",
      description: `An event-driven serverless application for automatically detecting and blurring faces in images with AWS services. 
                    Frontend is built with React, middleware uses Lambda with Rekognition, backend uses DynamoDB and S3 with SQS for queuing jobs. 
                    Integrated CI/CD with Github Actions and deployed with Terraform.`,
      tags: ["AWS", "Terraform", "Python", "React"],
      image: projectImages.faceBlur,
      links: [
        { icon: faExternalLinkAlt, url: "https://faceblur.jyylab.com" },
        {
          icon: faGithub,
          url: "https://github.com/jamesyoung-15/aws-serverless-face-blurring",
        },
      ],
    },
    {
      categories: ["Linux", "Highlighted", "Robotics"],
      title: "Homelab",
      description: `A homelab setup with Proxmox with various VMs, LXCs, and Docker containers for self-hosting services such as NAS, media server, etc. 
                      Uses Opnsense for setting up networking such as firewall, router, VLans, etc. Hand-built servers with consumer PC hardware.`,
      tags: ["Linux", "Docker", "Virtualization", "Networking"],
      image: projectImages.homeLab1,
      links: [
        { icon: faGithub, url: "https://github.com/jamesyoung-15/homelab" },
        { icon: faExternalLinkAlt, url: "https://jyyhomelab.com/" }
      ],
    },
    {
      categories: ["Embedded", "Highlighted", "Robotics"],
      title: "STM32 Mini-Robot Cleaner",
      description:
        "An autonomous mini-robot cleaner built with STM32 microcontroller, C, and Python. Features remote control using UDP with Python GUI and autonomous mode with obstacle avoidance using bubble rebound algorithm. Done as school project.",
      tags: ["C", "STM32", "Python"],
      image: projectImages.robotCleaner,
      links: [
        { icon: faYoutube, url: "https://youtu.be/z4BqyFa29B0" },
        {
          icon: faGithub,
          url: "https://github.com/jamesyoung-15/Mini-Robot-Cleaner",
        },
      ],
    },
    {
      categories: ["Web"],
      title: "Portfolio Website",
      description:
        "A personal portfolio website written with React Typescript, TailwindCSS, ThreeJS. Deployed with Terraform and hosted AWS. Models are created and animated with Blender.",
      tags: ["React", "TailwindCSS", "ThreeJS", "Terraform"],
      image: projectImages.portfolioDemo, // Replace with project image
      links: [
        { icon: faExternalLinkAlt, url: "https://jyyoung.com" },
        {
          icon: faGithub,
          url: "https://github.com/jamesyoung-15/PortfolioWebsite",
        },
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory),
        );

  return (
    <section className="py-16 text-white" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 first:rounded-l last:rounded-r ${
                activeCategory === category
                  ? "bg-violet-500 text-white"
                  : "bg-violet-200 text-black hover:bg-violet-600 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              // href={project.links[0].url}
              // target="_blank"
              className="block transform transition-transform hover:scale-101 hover:shadow-lg max-[800px]:mx-5"
            >
              <div className="flex flex-col md:flex-row bg-[#1d1b22] shadow-md rounded-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:w-80 md:h-80 object-cover"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {project.title}
                  </h3>
                  <div className="mt-2 min-h-30 flex flex-col align-center justify-center">
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-wrap mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#0e0d11] text-blue-400 text-sm font-medium py-1 px-2 rounded mr-2 mb-2 hover:scale-101"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-4">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FontAwesomeIcon
                          icon={link.icon}
                          className="bg-[#0e0d11] rounded px-2 py-1"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
