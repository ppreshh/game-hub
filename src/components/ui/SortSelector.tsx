import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { CgChevronDown } from "react-icons/cg";

interface Props {
  onSortOrderSelected: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSortOrderSelected, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-metacritic", label: "Metacritic score" },
    { value: "-rating", label: "Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: {currentSortOrder?.label || "Relevance"}
          <Icon as={CgChevronDown} ms={1} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((sortOrder) => (
              <Menu.Item
                key={sortOrder.value}
                value={sortOrder.value}
                onClick={() => onSortOrderSelected(sortOrder.value)}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
