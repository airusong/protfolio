import React, { useEffect, useRef,useState  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  // Ref to store the previous scroll position
  const prevScrollY = useRef(0);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    // Scroll to the section
    if (element) {
      element.scrollIntoView({
        //
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    const handleScroll =()=>{
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);
  return (
    // Add a fixed header with a dark background color
    <div
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',// Adjust the translateY value based on your header's height
        backgroundColor: "#18181b" 
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */
            // Add an onClick event to each link to open the respective social media page
            //add space between the icons
            socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                // Add target="_blank" to the anchor tag if the link is an email
                target={social.url === "mailto:" ? "_blank" : undefined}
                // Add rel="noopener noreferrer" to the anchor tag
                rel="noopener noreferrer"
                style={{ marginRight: '20px' }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x"/>
              </a>
            ))
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */
              // Add an onClick event to each link to scroll to the respective section
              <>
                <a href="projects-section" onClick={handleClick("projects")}>Projects</a>
                <a href="contact-section" onClick={handleClick("contact")}>Contact me</a>
              </>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </div>
  );
};
export default Header;
