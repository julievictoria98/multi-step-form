import React from "react";

function AddButton({ setNumber, inputValue }) {
  return (
    <button
      className="bg-black text-white p-1 rounded"
      onClick={() => {
        setNumber(inputValue) && handleSumbit();
      }}
    >
      Add
    </button>
  );
}

export default AddButton;
