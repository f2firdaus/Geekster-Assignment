
import React from "react";

const Input = (props) => {
  return (
    <textarea
      rows="10"
      cols="50"
      onChange={(e) => {
        props.setdatafn(e.target.value);
      }}
    ></textarea>
  );
};

export default Input;