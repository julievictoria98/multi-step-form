import AddButton from "./AddButton";
import React, { useState } from "react";

function SelectNumber({ setNumber, number }) {
  //   const handleInputChange = (event) => {
  //     setNumber(event.target.value);
  //   };

  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <label>Vælg antal:</label>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="border border-gray-600"
          type="number" // to restrict input to numeric values
          placeholder="Enter number"
          //   onChange={handleInputChange}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <AddButton setNumber={setNumber} inputValue={inputValue} />
      </form>
    </div>
  );
}

export default SelectNumber;
