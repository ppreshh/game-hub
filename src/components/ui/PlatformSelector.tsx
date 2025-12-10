import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon, Menu } from "@chakra-ui/react";
import { CgChevronDown } from "react-icons/cg";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root
      onSelect={(details) => {
        console.log("selected: ", details.value);
      }}
    >
      <Menu.Trigger asChild>
        <Button>
          Platforms
          <Icon as={CgChevronDown} ms={1} />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={platform.slug}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
