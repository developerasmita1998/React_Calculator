import React, { useState } from "react";

const Calculator = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  let firstNumber = parseInt(firstInput);
  let secondNumber = parseInt(secondInput);

  const validate = () => {
    if (!firstInput || !secondInput) {
      alert("Both numbers are required");
      return false;
    }
    return true;
  };

  const add = (a, b) => a + b;
  //   function add(a, b){return a + b}

  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  const per = (a, b) => Math.round((b / a) * 100);

  const callAdd = () => {
    const check = validate();
    if (check) alert(add(firstNumber, secondNumber));
  };

  const callSub = () => {
    const check = validate();
    if (check) alert(sub(firstNumber, secondNumber));
  };

  const callMul = () => {
    const check = validate();
    if (check) alert(mul(firstNumber, secondNumber));
  };

  const callDiv = () => {
    const check = validate();
    if (check) alert(div(firstNumber, secondNumber));
  };

  const callPer = () => {
    const check = validate();
    if (check) alert(per(firstNumber, secondNumber));
  };

  return (
    <div>
      <input
        type="number"
        value={firstInput}
        onChange={(f) => setFirstInput(f.target.value)}
      />
      <input
        type="number"
        value={secondInput}
        onChange={(g) => setSecondInput(g.target.value)}
      />
      <button onClick={callAdd}> Addition </button>
      <button onClick={callSub}> Subtract </button>
      <button onClick={callMul}> Multiply </button>
      <button onClick={callDiv}> Divide </button>
      <button onClick={callPer}> Percent </button>
    </div>
  );
};

export default Calculator;
