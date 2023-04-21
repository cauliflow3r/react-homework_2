import React, { useState } from "react";

const Paragraph = (props) => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    props.changeParagraph(inputText);
  };

  return (
    <div>
      <h2>{props.readParagraph()}</h2>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Show</button>
    </div>
  );
};

export default Paragraph;
