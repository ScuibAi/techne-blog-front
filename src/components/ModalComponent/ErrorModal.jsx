import React from 'react';

import Modal from './Modal';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      // header="An Error Occurred!"
      header={` ${props.user} `}
      show={!!props.error}
      footer={
        <Button inverse className="bg-danger rounded" onClick={props.onClear}>
          Okay
        </Button>
      }
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
