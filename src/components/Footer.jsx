import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex justify="space-around">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/terms-of-service">Terms of Service</NavLink>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; {new Date().getFullYear()} Financial Times. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;