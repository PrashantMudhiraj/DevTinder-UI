import React from "react";
import Button from "../components/Button";
import {
  GoBell,
  GoAlert,
  GoDatabase,
  GoAlertFill,
  GoArrowBoth,
} from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {
    // console.log("Clicked!!");
  };
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5">
          <GoBell />
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseEnter={handleClick}>
          <GoDatabase />
          Place Order
        </Button>
      </div>
      <div>
        <Button success>
          <GoAlert />
          Reserve
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoAlertFill />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button danger>
          <GoArrowBoth />
          Add
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
