import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  // useSubmit hook returns an object with the following properties: isLoading, response, submit.
  const {isLoading, response, submit} = useSubmit();
  // useAlertContext hook returns an object with a function called onOpen that when called, opens the alert with the specified type and message.
  const { onOpen } = useAlertContext();
 //The initialValues object should have the following fields:firstName,email,type,comment
  //The onSubmit function should call the submit function with the correct arguments


  const formik = useFormik({
    initialValues: {
      firstName: "",  
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("/api/contact", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().oneOf(['hireMe', 'openSource', 'other'], 'Invalid type').required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });
  //useFormik hook returns an object with a function called getFieldProps that when called, returns an object with the necessary props to make the input controlled.
  // Use getFieldProps to get the necessary props for the input fields
  // The input fields should have the following props: id, name, type, height, and width
  // The select field should have the following props: id, name
  // The button should have the following props: type, colorScheme, and width
  // The form should have the following props: onSubmit
  // The form should have the following fields: firstName, email, type, and comment
  // The form should have the following validation: firstName, email, and comment are required
  // The form should have the following validation: email should be a valid email address
  //  The form should have the following validation: type should have a default value of "hireMe"
  // The form should have the following validation: onSubmit should call the submit function with the correct arguments
  // The form should have the following validation: onSubmit should call the onOpen function with the correct arguments

  useEffect(() => {
    if (response) {
      // Call onOpen with the correct arguments
      onOpen(response.type, response.message);
    }
  }
  , [response, onOpen]);
  return (
    // Inside your component's return statement

// Render form if not loading and no response message yet
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                <FormErrorMessage> 
                {formik.errors.firstName}
                </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                )}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
