import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
