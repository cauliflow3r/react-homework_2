import React, { useState } from "react";
import Counter from "./Components/Counter/Counter";
import Paragraph from "./Components/Paragraph/Paragraph";
import Table from "./Components/Table/Table";
const App = () => {
  const [value, setValue] = useState(0);
  const [paragraph, setParagraph] = useState("");

  // *task 1
  const readValue = () => {
    return value;
  };
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  //*task 2
  const readParagraph = () => {
    return paragraph;
  };
  const changeParagraph = (text) => {
    setParagraph(text);
  };
  // * task3
  const [employees, setEmployees] = useState([
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },

    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ]);

  // Function to handle update of employees array
  const handleUpdateEmployees = (updatedEmployees) => {
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <Counter
        decrement={decrement}
        increment={increment}
        readValue={readValue}
      />
      <Paragraph
        readParagraph={readParagraph}
        changeParagraph={changeParagraph}
      />
      <Table
        employees={employees}
        handleUpdateEmployees={handleUpdateEmployees}
      />
    </div>
  );
};

export default App;
