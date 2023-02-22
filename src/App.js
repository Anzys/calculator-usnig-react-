import "./App.css";
import Btn from "./components/Btn";
import { useState } from "react";
function App() {
  const operator = ["+", "-", "*", "/", "%"];
  const [btn, setBtn] = useState("");

  const realTimeDisplay = (val) => {
    if (val === "AC") {
      setBtn("");

      return;
    }
    if (val === "C") {
      if (btn.length) {
        setBtn(btn.slice(0, -1));
      }
      return;
    }
    if (val === "=") {
      const lastChar = btn[btn.length - 1];
      if (operator.includes(lastChar)) {
        setBtn(btn.slice(0, -1));
      }
      total();
      return;
    }
    // if (operator.includes(val)) {
    //   if (!btn) {
    //     return;
    //   }
    //   lastOperator = val;
    //   const lastChar = btn[btn.length - 1];
    //   if (operator.includes(lastChar)) {
    //     btn = btn.slice(0, -1);
    //   }

    // if (val === ".") {
    //   if (lastOperator) {
    //     const operatorIndex = btn.lastIndexOf(lastOperator);
    //     const lastNumberSet = btn.slice(operatorIndex + 1);
    //     if (lastNumberSet.includes(".")) {
    //       return;
    //     }
    //   }
    //   if (!lastOperator && btn.includes(".")) {
    //     return;
    //   }
    // }
    setBtn(btn + val);
  };
  const total = () => {
    const extra = randomNumber();

    // if (extra) {
    //   displayElm.style.background = "red";
    //   displayElm.style.color = "white";
    //   displayElm.classList.add("prank");
    //   audio.play();

    const ttl = eval(btn) + extra;
    setBtn(ttl.toString());
  };

  const randomNumber = () => {
    const num = Math.round(Math.random() * 10);
    return num <= 3 ? num : 0;
  };
  const btns = [
    { label: btn || "0.00", cl: "display" },
    { label: "AC", cl: "btn btn-ac" },
    { label: "C", cl: "btn btn-c" },
    { label: "%", cl: "btn btn-perc" },
    { label: "/", cl: "btn btn-divide" },
    { label: "7", cl: "btn btn-7" },
    { label: "8", cl: "btn btn-8" },
    { label: "9", cl: "btn btn-9" },
    { label: "*", cl: "btn btn-x" },
    { label: "4", cl: "btn btn-4" },
    { label: "5", cl: "btn btn-5" },
    { label: "6", cl: "btn btn-6" },
    { label: "-", cl: "btn btn-minus" },
    { label: "1", cl: "btn btn-1" },
    { label: "2", cl: "btn btn-2" },
    { label: "3", cl: "btn btn-3" },
    { label: "+", cl: "btn btn-plus" },
    { label: "0", cl: "btn btn-0" },
    { label: ".", cl: "btn btn-dot" },
    { label: "=", cl: "btn btn-equals" },
  ];
  return (
    <div className="wrapper">
      <div className="calculator">
        {btns.map((item, i) => {
          return <Btn {...item} getDis={realTimeDisplay} />;
        })}
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;
