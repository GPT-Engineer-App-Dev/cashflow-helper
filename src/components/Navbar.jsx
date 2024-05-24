import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <NavLink to="/">Financial Times</NavLink>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/world">World</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/markets">Markets</NavLink>
            <NavLink to="/opinion">Opinion</NavLink>
            <NavLink to="/tech">Tech</NavLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;