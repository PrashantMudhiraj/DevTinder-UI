import { useState, useEffect } from "react";
import Dropdown from "../components/DropDown";

function DropdownPage(params) {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
    // console.log(option);
  };

  const options = [
    {
      id: 0,
      label: "Red",
      color: "red",
    },
    {
      id: 1,
      label: "Green",
      color: "green",
    },
    {
      id: 2,
      label: "Blue",
      color: "blue",
    },
  ];
  return (
    <div>
      <Dropdown options={options} onChange={handleSelect} value={selection} />
      {/* <Dropdown options={options} onChange={handleSelect} value={selection} /> */}
    </div>
  );
}

export default DropdownPage;
