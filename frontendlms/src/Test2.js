import React from "react";
import { Form, Input, Select } from "./Test";

// import "./styles.css";

export default function Test2() {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1>Smart Form Component</h1>
      <Form onSubmit={onSubmit}>
        <Input name="firstName" placeholder="Name"/>
        <Input name="lastName" />
        <Select name="sex" options={["female", "male"]} />

        <button>Submit</button>
      </Form>
    </>
  );
}

