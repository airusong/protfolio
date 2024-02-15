import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am A!";
const bio1 = "A full-stack software developer";
const bio2 = "specialised in React and C++";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  {/* Add a greeting, bio1 and bio2 to the LandingSection component*/}
      <VStack spacing={4}>
        <Avatar size="2xl" name="A" src="https://i.pravatar.cc/150?img=7" />
        <Heading as="h1" size="2xl" color="white">
          {greeting}
        </Heading>
        <Heading as="h2" size="lg" color="white">
          {bio1}
        </Heading>
        <Heading as="h2" size="lg" color="white">
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
);

export default LandingSection;
