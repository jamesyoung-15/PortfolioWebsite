import React, { useState } from "react";
import myAvatar from "../assets/my-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faBlog,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { schoolLogos, certLogos, skillLogos } from "../assets/logos";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const contactLinks = [
    { icon: faGithub, link: "https://github.com/jamesyoung-15" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/jamesyyoung/" },
    { icon: faEnvelope, link: "mailto:jyyoung@jyymail.com" },
    { icon: faYoutube, link: "https://www.youtube.com/@jyylab" },
    { icon: faBlog, link: "https://blog.jyylab.com" },
  ];

  const skills = [
    { logo: skillLogos.pythonLogo, description: "Python" },
    { logo: skillLogos.jsLogo, description: "Javascript" },
    { logo: skillLogos.reactLogo, description: "React" },
    { logo: skillLogos.htmlLogo, description: "HTML/CSS" },
    { logo: skillLogos.nodeLogo, description: "Node.js" },
    { logo: skillLogos.mysqlLogo, description: "MySQL" },
    { logo: skillLogos.bashLogo, description: "Bash" },
    { logo: skillLogos.gitLogo, description: "Git" },
    { logo: skillLogos.tfLogo, description: "Terraform" },
    { logo: skillLogos.awsLogo, description: "AWS" },
    { logo: skillLogos.linuxLogo, description: "Linux" },
    { logo: skillLogos.dockerLogo, description: "Docker" },
  ];

  const certifications = [
    {
      logo: certLogos.awsSAALogo,
      title: "AWS Certified Solutions Architect",
      description: "AWS SAA-C03",
      href: "https://www.credly.com/badges/3db937a4-b8be-4946-b739-1a41739debaf/public_url",
    },
    {
      logo: certLogos.rhcsaLogo,
      title: "Red Hat Certified System Administrator",
      description: "RHCSA",
      href: "https://www.credly.com/badges/8c67424d-21d9-49f8-8f44-9f1467c67c58/public_url",
    },
    {
      logo: certLogos.tfCertLogo,
      title: "HashiCorp Certified: Terraform Associate",
      description: "Terraform Associate 003",
      href: "https://www.credly.com/badges/c4870f16-cb84-4e8d-afe5-0384d756a66c/public_url",
    },
    {
      logo: certLogos.comptiaALogo,
      title: "CompTia A+",
      description: "Expected Completion: Before April 2025",
      href: "https://www.comptia.org/certifications/a",
    },
  ];

  const education = [
    {
      logo: schoolLogos.hkustLogo,
      school: "HKUST",
      major: "BEng in Electronic Engineering",
      date: "2020-2024",
      href: "https://seng.hkust.edu.hk/",
    },
    {
      logo: schoolLogos.buLogo,
      school: "Boston University",
      major: "MS in Computer Science",
      date: "2024-Present",
      href: "https://www.bu.edu/",
    },
  ];

  return (
    <section
      className="text-white rounded container mx-auto flex flex-col items-center -mt-40 [@media(max-height:900px)]:-mt-2"
      id="about"
    >
      <h2 className="text-4xl font-bold mb-10">About Me</h2>
      <div className="overflow-hidden rounded-full lg:w-85 lg:h-85 h-64 w-64 mb-10 bg-slate-300">
        <img
          src={myAvatar}
          alt="James"
          className="scale-105 object-cover object-center"
        />
      </div>
      <div className="flex flex-col min-h-100 max-[480px]:mx-5 min-h-[600px] max-[800px]:mx-5">
        {/* tabs */}
        <div className="grid grid-cols-4 max-[800px]:grid-cols-2 max-[350px]:grid-cols-1 max-[480px]:mx-auto max-[480px]:w-80  gap-2 mb-8">
          {["summary", "education", "skills", "certifications"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 mx-2 rounded ${activeTab === tab ? "bg-violet-500 text-white" : "bg-violet-200 text-black hover:bg-violet-600 hover:text-white"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* tab content */}

        {activeTab === "summary" && (
          <div className="px-3 py-5 text-[1.2rem] bg-[#1a191f] rounded max-w-[800px] shadow-xs hover:shadow-lg shadow-black max-[340px]:mx-1">
            <div className="flex flex-col mx-2">
              <p className="">
                I'm a passionate problem solver who enjoys tinkering with
                various technologies and programming. My knowledge includes
                software development, cloud technologies, and Linux (NixOS btw).
              </p>
              <p className="my-3 md:my-5">
                Currently, I am studying for Masters in Computer Science at
                Boston University. I completed my Bachelors of Engineering in
                Electronic Engineering at HKUST.
              </p>
              <p className="my-3 md:my-5">
                In my free time, I enjoy building projects, building PCs and
                servers, tinkering with electronics and my homelab, and playing
                video games. You can check out my projects below and my blog for
                my hobby projects and homelab.
              </p>
              <p className="mt-4 md:my-5">
                Feel free to find me or contact me through any of the ways
                below!
              </p>
              <div className="flex align-center justify-center">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    className="mx-2 mt-5 rounded text-blue-400 hover:text-white"
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-[20px]" />
                  </a>
                ))}
              </div>
              <a
                href="https://resume.jyyhomelab.com/"
                target="_blank"
                className="bg-blue-400 hover:bg-violet-600 hover:text-white text-black text-base font-bold py-2 px-4 rounded inline-flex items-center mt-5 mb-5 max-w-[200px] mx-auto"
              >
                <FontAwesomeIcon icon={faFileLines} className="mr-2" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}

        {(activeTab === "skills" ||
          activeTab === "certifications" ||
          activeTab === "education") && (
          <div className="">
            <div className="grid grid-cols-3 max-[480px]:grid-cols-2 md:grid-cols-6 gap-4  text-center">
              {activeTab === "skills" &&
                skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#1d1b22] p-4 rounded-lg shadow-md flex flex-col items-center shadow-xs hover:shadow-lg hover:scale-101 shadow-black"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.description}
                      className="w-16 h-16 mb-2"
                    />
                    <p>{skill.description}</p>
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 text-center">
              {activeTab === "education" &&
                education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-[#1d1b22] p-4 rounded-lg shadow-md flex flex-col items-center shadow-xs hover:shadow-lg shadow-black hover:scale-101"
                  >
                    <a href={edu.href} target="_blank">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="h-48 w-48 m-3"
                      />
                      <h3 className="text-xl font-medium">{edu.school}</h3>
                      <p>{edu.major}</p>
                      <p className="text-xs">{edu.date}</p>
                    </a>
                  </div>
                ))}
              {activeTab === "certifications" &&
                certifications.map((cert, index) => (
                  <a href={cert.href} target="_blank">
                    <div
                      key={index}
                      className="bg-[#1d1b22] p-4 rounded-lg shadow-md flex flex-col items-center shadow-xs text-center hover:shadow-lg shadow-black hover:scale-101"
                    >
                      <img
                        src={cert.logo}
                        alt={cert.title}
                        className="w-32 h-32 mb-2"
                      />
                      <p>{cert.title}</p>
                      {cert.description ? <p>({cert.description})</p> : null}
                    </div>
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
