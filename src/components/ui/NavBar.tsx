import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icons8-logo-96.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
