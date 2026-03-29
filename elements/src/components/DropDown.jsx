import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "../components/Panel";

function DropDown({ options, value, onChange }) {
  const [IsOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  // const [color, setColor] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
    // setIsOpen(!IsOpen)
    // setColor(null);
  };

  const handleOptionSelect = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedItems = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-3"
        key={option.id}
        onClick={() => {
          handleOptionSelect(option);
        }}
      >
        {option.color}
      </div>
    );
  });

  // const content = selection ? selection.label : "Select a color";

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select a color"}
        <GoChevronDown />
      </Panel>
      {IsOpen && <Panel className="absoulte top-full">{renderedItems} </Panel>}
    </div>
  );
}

export default DropDown;
