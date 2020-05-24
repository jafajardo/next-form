import React, { useState } from "react";
import PersonalDetails from "./sections/PersonalDetails";

function FormContainer() {
  // Step determines which section in the form to render
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    streetNumber: "",
    streetName: "",
    streetType: "",
    suburb: "",
    state: "",
    postCode: "",
    occupation: "",
    industry: "",
    salary: "",
  });

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [streetNumber, setStreetNumber] = useState("");
  // const [streetName, setStreetName] = useState("");
  // const [streetType, setStreetType] = useState("");
  // const [suburb, setSuburb] = useState("");
  // const [state, setState] = useState("");
  // const [postCode, setPostCode] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [industry, setIndustry] = useState("");
  // const [salary, setSalary] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setValues((prevState) => {
      if (e.target) {
        const { name, value } = e.target;
        return { ...prevState, [name]: value };
      }
    });
  };

  const getSection = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            values={values}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        );
      case 2:
        return <h1>Address Details</h1>;
      case 3:
        return <h1>Occupational Details</h1>;
      case 4:
        return <h1>Summary</h1>;
      case 5:
        return <h1>Finish</h1>;
      default:
        return null;
    }
  };

  return <React.Fragment>{getSection()}</React.Fragment>;
}

export default FormContainer;
