import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

const contactLinks = [
  { icon: faGithub, link: "https://github.com/jamesyoung-15" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/jamesyyoung/" },
  { icon: faEnvelope, link: "mailto:jyyoung@jyymail.com" },
  { icon: faYoutube, link: "https://www.youtube.com/@jyylab" },
  { icon: faBlog, link: "https://blog.jyylab.com" },
];

const Footer = () => {
  return (
    <footer className="w-[100%] text-white border-t-1 border-gray-700 text-sm">
      <div className="flex flex-col justify-center align center my-3">
        <p className="mx-auto">Made with React and Tailwind CSS</p>
        <a
          className="mx-auto my-3 hover:text-purple-300"
          href="https://github.com/jamesyoung-15/PortfolioWebsite"
          target="_blank"
        >
          Source Code
          <FontAwesomeIcon icon={faGithub} className="ml-2" />
        </a>
        <div className="flex flex-row mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              className="mx-2 hover:text-purple-300"
            >
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
