import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [currentInput, setCurrentInput] = useState("");

  const handleButtonClick = (value) => {
    if (displayValue === "0" && value !== ".") {
      setDisplayValue(value);
      setCurrentInput(currentInput + value);
    } else if (displayValue.length < 10) {
      setDisplayValue(displayValue + value);
      setCurrentInput(currentInput + value);
    }
  };

  const handleClearButtonClick = () => {
    setDisplayValue("0");
    setCurrentInput("");
  };

  const handleBackspaceClick = () => {
    if (displayValue.length === 1 || displayValue === "Error") {
      setDisplayValue("0");
      setCurrentInput("");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
      setCurrentInput(currentInput.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(currentInput);
      setDisplayValue(result.toString());
    } catch {
      setDisplayValue("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (!isNaN(key) || key === ".") {
        handleButtonClick(key);
      } else if (key === "Backspace") {
        handleBackspaceClick();
      } else if (key === "Enter" || key === "=") {
        handleCalculate();
      } else if (["+", "-", "*", "/", "%"].includes(key)) {
        handleButtonClick(key);
      } else if (key === "Escape") {
        handleClearButtonClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentInput]);

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button className="ac-btn" onClick={handleClearButtonClick}>
          AC
        </button>
        <button className="del-btn" onClick={handleBackspaceClick}>
          DEL
        </button>
        <button className="percent-btn" onClick={() => handleButtonClick("%")}>
          %
        </button>
        <button className="operator-btn" onClick={() => handleButtonClick("/")}>
          /
        </button>

        <button className="num-btn" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="operator-btn" onClick={() => handleButtonClick("*")}>
          *
        </button>

        <button className="num-btn" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="operator-btn" onClick={() => handleButtonClick("-")}>
          -
        </button>

        <button className="num-btn" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="num-btn" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="operator-btn" onClick={() => handleButtonClick("+")}>
          +
        </button>

        <button id="zero" className="num-btn span-two" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="num-btn" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="operator-btn" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
