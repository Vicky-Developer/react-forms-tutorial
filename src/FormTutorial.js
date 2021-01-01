import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Progress,
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function FormTutorial({ isVisible, onClose }) {
  const loadData = { email: "abc@gmail.com", password: "asb" };

  const { register, handleSubmit, errors } = useForm({
    defaultValues: loadData,
  });

  const dataSubmit = (data) => {
    console.log("dataSubmit data = ", data);
  };

  return (
    <div>
      <Modal size="lg" centered isOpen={isVisible}>
        <ModalHeader>Add Data</ModalHeader>
        <Form onSubmit={handleSubmit(dataSubmit)}>
          <ModalBody>
            <div id="email-div">
              <label>Email : </label>&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Enter Email-Id"
                name="email"
                ref={register({ required: "Email is required!" })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>
            <div id="password-div">
              <label>Password : </label>&nbsp;&nbsp;
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                ref={register({ required: "Password is required!" })}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default FormTutorial;
