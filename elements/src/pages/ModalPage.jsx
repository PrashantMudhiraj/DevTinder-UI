import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal((currentState) => !currentState);
    // setShowModal(true);
  };


  const actionBar = (
    <div>
      <Button primary onClick={handleClick}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClick} actionBar={actionBar}>
      Please go through terms and conditions !
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        show Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
