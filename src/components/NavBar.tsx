import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icons8-logo-96.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearched: (searchText: string) => void;
}

const NavBar = ({ onSearched }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearched={onSearched} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
