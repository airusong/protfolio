import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  //text color is black and background color is white
    return(
      <VStack
      spacing={4}
      align="stretch"
      backgroundColor="white"
      borderRadius={8}
      boxShadow="md"
      padding={4}
    >
      <Image src={imageSrc} alt={title} />
      <VStack spacing={2} align="stretch">
        <Heading color="black" as="h3" size="md">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end">
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
    )
  return null;
};

export default Card;
