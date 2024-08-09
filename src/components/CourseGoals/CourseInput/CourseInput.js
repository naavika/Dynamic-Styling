import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const value = event.target.value.trim();
    setEnteredValue(event.target.value);
    setIsValid(value.length > 0); 
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(""); 
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label
          htmlFor="goalInput"
          style={{ color: isValid ? "black" : "red" }} 
        >
          Course Goal
        </label>
        <input
          id="goalInput"
          type="text"
          value={enteredValue} 
          onChange={goalInputChangeHandler}
          style={{
            backgroundColor: isValid ? "transparent" : "lightpink", 
            borderColor: isValid ? "black" : "red", 
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
