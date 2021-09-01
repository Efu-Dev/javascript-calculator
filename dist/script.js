let addablePoint = true;

function update(symbol) {

  if (['+', '*', '/', '~ '].includes(document.getElementById("display").innerHTML.split("")[document.getElementById("display").innerHTML.length - 1]) && ['+', '*', '/', '~'].includes(symbol)) {
    let newS = document.getElementById("display").innerHTML.split("");
    newS[newS.length - 1] = symbol;
    document.getElementById("display").innerHTML = newS.join("");
    return;
  } else
  if (symbol === "-" && (['+', '*', '/', '-'].includes(document.getElementById("display").innerHTML.split("")[document.getElementById("display").innerHTML.length - 1]) || document.getElementById("display").innerHTML.split("")[document.getElementById("display").innerHTML.length - 1] === "0")) {
    symbol = "~";
  } else
  if (document.getElementById("display").innerHTML.includes("*~+") || document.getElementById("display").innerHTML.includes("/~+")) {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("*~+", "+");
    document.getElementById("display").innerHTML.replace("/~+", "+");
  }
  if (document.getElementById("display").innerHTML == '0')
  document.getElementById("display").innerHTML = "";

  document.getElementById("display").innerHTML += symbol;

  if (['+', '-', '*', '/'].indexOf(symbol) !== -1)
  addablePoint = true;

}

function clearDisplay() {
  document.getElementById("display").innerHTML = "0";
  addablePoint = true;
}

function calculate() {
  let input = document.getElementById("display").innerHTML;

  input = input.replace("+~", "-");

  console.log(input);
  let result;
  if (input.includes("+"))
  result = add(input);else
  if (input.includes("-"))
  result = subtract(input);else
  if (input.includes("*"))
  result = multiply(input);else
  if (input.includes("/"))
  result = divide(input);else
  if (input.includes("~"))
  result = neg(input);else

  result = document.getElementById("display").innerHTML;

  document.getElementById("display").innerHTML = result;
}

function add(a) {
  let result = 0;
  input = a.split("+");
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("-"))
    result += subtract(input[i]);else
    if (input[i].includes("*"))
    result += multiply(input[i]);else
    if (input[i].includes("/"))
    result += divide(input[i]);else
    if (input[i].includes("~"))
    result += neg(input[i]);else

    result += parseFloat(input[i]);
  }

  console.log("ADD R: " + result);

  return result;
}

function subtract(a) {
  let input = a.split("-");
  let result;

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      if (input[i].includes("+"))
      result = add(input[i]);else
      if (input[i].includes("*"))
      result = multiply(input[i]);else
      if (input[i].includes("/"))
      result = divide(input[i]);else
      if (input[i].includes("~"))
      result = neg(input);else

      result = parseFloat(input[i]);
    } else
    {
      if (input[i].includes("+"))
      result -= add(input[i]);else
      if (input[i].includes("*"))
      result -= multiply(input[i]);else
      if (input[i].includes("/"))
      result -= divide(input[i]);else
      if (input[i].includes("~"))
      result = neg(input);else

      result -= parseFloat(input[i], 10);
    }

  }
  return result;
}

function multiply(a) {
  let input = a.split("*");
  let result = 1;

  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (input[i].includes("+"))
    result *= add(input[i]);else
    if (input[i].includes("-"))
    result *= subtract(input[i]);else
    if (input[i].includes("/"))
    result *= divide(input[i]);else
    if (input[i].includes("~"))
    result *= neg(input[i]);else

    result *= parseFloat(input[i]);
  }

  console.log("MUL R: " + result);
  return result;
}

function divide(a) {
  let input = a.split("/");
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      if (input[i].includes("+"))
      result += add(input[i]);else
      if (input[i].includes("-"))
      result += subtract(input[i]);else
      if (input[i].includes("*"))
      result += multiply(input[i]);else
      if (input[i].includes("~"))
      result = neg(input[i]);else

      result += parseFloat(input[i]);
    } else
    {
      if (input[i].includes("+"))
      result /= add(input[i]);else
      if (input[i].includes("-"))
      result /= subtract(input[i]);else
      if (input[i].includes("*"))
      result /= multiply(input[i]);else
      if (input[i].includes("~"))
      result /= neg(input[i]);else

      result /= parseFloat(input[i]);
    }

  }
  return result;
}

function neg(a) {
  console.log("AQUI ESTOY EN NEG");
  console.log(a);
  let input = a.split("");
  input.shift();
  input.unshift("-");
  return parseFloat(input.join(""));
}

function addDecimal() {
  const inp = document.getElementById("display").innerHTML;
  if (inp.charAt(inp.length - 1) !== '.' && addablePoint) {
    document.getElementById("display").innerHTML += ".";
    addablePoint = false;
  }

}