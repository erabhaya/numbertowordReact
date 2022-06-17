import React, { useState } from "react";
import "./Number.css";

function NumberCount() {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    var num = e.target.value;

    var grade = [
      "",
      "one ",
      "two ",
      "three ",
      "four ",
      "five ",
      "six ",
      "seven ",
      "eight ",
      "nine ",
      "ten ",
      "eleven ",
      "twelve ",
      "thirteen ",
      "fourteen ",
      "fifteen ",
      "sixteen ",
      "seventeen ",
      "eighteen ",
      "nineteen ",
    ];
    var user = num;
    user = user.toString();
    var temp = user.split(".");
    var number = temp[0].split(",").join("");
    var nLength = number.length;
    var outputTxt = "";
    if (nLength <= 9) {
      var n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      var received_n_array = [];
      for (var i = 0; i < nLength; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - nLength, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i === 0 || i === 2 || i === 4 || i === 7) {
          if (n_array[i] === 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      var value = "";
      for (var i = 0; i < 9; i++) {
        if (i === 0 || i === 2 || i === 4 || i === 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value !== 0) {
          outputTxt += grade[value] + " ";
        }
        if (
          (i === 1 && value !== 0) ||
          (i === 0 && value !== 0 && n_array[i + 1] === 0)
        ) {
          outputTxt += "Crores ";
        }
        if (
          (i === 3 && value !== 0) ||
          (i === 2 && value !== 0 && n_array[i + 1] === 0)
        ) {
          outputTxt += "Lakhs ";
        }
        if (
          (i === 5 && value !== 0) ||
          (i === 4 && value !== 0 && n_array[i + 1] === 0)
        ) {
          outputTxt += "Thousand ";
        }
        if (
          i === 6 &&
          value !== 0 &&
          n_array[i + 1] !== 0 &&
          n_array[i + 2] !== 0
        ) {
          outputTxt += "Hundred and ";
        } else if (i === 6 && value !== 0) {
          outputTxt += "Hundred ";
        }
      }
      outputTxt = outputTxt.split("  ").join(" ");
      console.log(outputTxt);
    }
    setWord(outputTxt);
  };

  return (
    <div className="main">
      <h1>Enter Number For Converting in Words!</h1>
        <input type="number" className="input" onKeyUp={handleChange} />
      <div className="output">{word}</div>
      <div>
        {/* <img src="./board.png" alt="" /> */}
      </div>
    </div>
  );
}

export default NumberCount;
