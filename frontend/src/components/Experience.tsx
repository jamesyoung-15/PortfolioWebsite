import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Granite Telecommunications",
      location: "Quincy, MA, USA",
      duration: "June 2025 - Aug 2025",
      description: [
        "Ongoing summer internship at Granite Telecommunications, focusing on automating builds and validation to Granite's Linux edge devices for internal developers.",
        "Used Python scripts to automate build and validations, reducing manual testing time.",
      ],
      companyLink: "https://www.granitenet.com/",
      tags: ["Python", "Linux"],
    },
    {
      title: "Software Developer Intern",
      company: "Intelligent Design Technology Limited",
      location: "Hong Kong",
      duration: "Dec 2023 - Feb 2024",
      description: [
        "Created a prototype for real-time fall detection using only a camera on a Rasbperry PI.",
        " Built with Python by utilizing OpenCV for streaming camera input frames, Movenet for pose estimation, and heuristics between poses for classifying fall.",
      ],
      companyLink: "https://intelligentdesign.hk/",
      tags: ["Python", "Tensorflow", "Raspberry PI"],
    },
    {
      title: "IoT Intern",
      company: "Spotless Tech Limited",
      location: "Hong Kong",
      duration: "Dec 2022 - May 2023",
      description: [
        "Implemented C++ libraries for reading water sensors with ESP32 and sending sensor data to AWS with MQTT, reduced power consumption by implementing light-sleep intervals.",
        " Worked on implementing peer-to-peer communication and increased communication range and speed by switching from BLE to ESP-Now.",
      ],
      companyLink: "https://www.ltddir.com/companies/spotless-tech-limited/",
      tags: ["C++", "ESP32", "Embedded"],
    },
  ];

  return (
    <section className="py-16 text-gray-200" id="experience">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Professional Experience
        </h2>
        <div className="relative space-y-10 max-[800px]:mx-5">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="flex max-[800px]:flex-col items-start space-x-8 relative"
            >
              {/* Date Section */}
              <div className="w-32 text-gray-400 text-sm relative mt-6 max-[800px]:mx-auto max-[800px]:mb-5">
                <p>{job.duration}</p>
              </div>

              {/* Job Details */}
              <div className="flex-1 bg-[#1d1b22] shadow-lg rounded-lg p-6 transition-transform transform hover:scale-101 hover:shadow-xl">
                <a href={job.companyLink} target="_blank">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {job.title}
                  </h3>
                  <p className="text-gray-300">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-gray-400 mt-4">{job.description}</p>
                  <div className="flex flex-wrap mt-4">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#0e0d11] text-blue-400 text-sm font-medium py-1 px-2 rounded mr-2 mb-2 hover:scale-101"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
