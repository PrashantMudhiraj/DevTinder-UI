import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleClick = (nextIndex) => {
    setExpandedItem((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return null;
      } else {
        return nextIndex;
      }
    });
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b cursor-pointer items-center"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5 ">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
