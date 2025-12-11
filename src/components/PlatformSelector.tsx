import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { CgChevronDown } from "react-icons/cg";

interface Props {
  onPlatformSelected: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelected, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform?.name || "Platforms"}
          <Icon as={CgChevronDown} ms={1} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onPlatformSelected(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
