import useSort from "../hooks/useSort";
import Table from "./Table";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100 rounded"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  const getIcons = (label, sortBy, sortOrder) => {
    if (label != sortBy) {
      return (
        <div>
          <FaCaretUp />
          <FaCaretDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <FaCaretUp />
          <FaCaretDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <FaCaretUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <FaCaretDown />
        </div>
      );
    }
  };

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
