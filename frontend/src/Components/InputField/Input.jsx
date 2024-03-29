import React from "react";
import "./Input.css";

function Input(props) {
  const handleInputs = (event) => {
    props.setValue((preValue) => {
      return { ...preValue, [props.name]: event.target.value };
    });
  };
  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={handleInputs}
      />
      <span className="message">{props.errorMessage}</span>
    </div>
  );
}

export default Input;
