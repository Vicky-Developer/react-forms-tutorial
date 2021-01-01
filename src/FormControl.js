import React, { useState } from "react";
import { Button } from "reactstrap";
import FormTutorial from "./FormTutorial";

function FormControl() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setVisible(!visible)}>
        {!visible ? "Open" : "Close"} Form
      </Button>
      {visible && (
        <FormTutorial isVisible={visible} onClose={() => setVisible(false)} />
      )}
    </div>
  );
}

export default FormControl;
