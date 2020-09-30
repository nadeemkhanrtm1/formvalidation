import React, {useState,useRef} from 'react';
import {Form, Container, Button} from "react-bootstrap";

const Formm = () => {
  const [fname,
    setFname] = useState("");

  const [lname,
    setLname] = useState("");

  const [fullname,
    setFullname] = useState();

  const [disabled,
    setDisabled] = useState(true);

  const disableValue = useRef();

  const handleChange1 = (e) => {
    setFname(e.target.value);
  }

  const handleChange2 = (e) => {
    setLname(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(fname + " " + lname);
  }

  const handleCheckboxclick = (e) => {
   if(disableValue.current.disabled=== true){
     setDisabled(false)
   }else{
     setDisabled(true)
   }
  }

  return (
    <React.Fragment>
      <Container>
        <h1>Hello {fullname}</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={handleChange1}
              value={fname}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={handleChange2}
              value={lname}/>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" onClick={handleCheckboxclick}/>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary"
            disabled={disabled}
            ref={disableValue}>
            Submit
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  )
}

export default Formm;
