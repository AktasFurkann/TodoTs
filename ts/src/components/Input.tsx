import React, { useState } from "react";

interface PropsTypes {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
}

const Input: React.FC<PropsTypes> = ({ value, setValue, addMessage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={x => {
          setValue(x.target.value);
        }}
      />

      <button onClick={addMessage}>Add Todo</button>
    </div>
  );
};

export default Input;
