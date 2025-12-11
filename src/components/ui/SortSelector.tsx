import { Button, Icon, Menu } from "@chakra-ui/react";
import { CgChevronDown } from "react-icons/cg";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: Relevance
          <Icon as={CgChevronDown} ms={1} />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="test">Test</Menu.Item>
          <Menu.Item value="test2">Test2</Menu.Item>
          <Menu.Item value="test3">Test3</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
