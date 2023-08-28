let input = document.querySelector("#input");
let nums = document.querySelectorAll("#num");
let add = document.querySelector("#add");
let divorce = document.querySelector("#divorce");
let increase = document.querySelector("#increase");
let division = document.querySelector("#division");
let equal = document.querySelector("#equal");
let deleteOne = document.querySelector("#deleteOne");
let deleteAll = document.querySelector("#deleteAll");
let sqrt = document.querySelector("#sqrt");
let square = document.querySelector("#square");

let num1 = "";
let num2 = "";
let isAction = false;
let action;
let result = 0;

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (!isAction) {
      input.value += num.innerHTML;
      num1 = input.value;
    } else {
      input.value += num.innerHTML;
      num2 = input.value;
      isAction = true;
    }
  });
});

deleteOne.addEventListener("click", () => {
  if (!isAction) {
    input.value = input.value.slice(0, -1);
    num1 = input.value;
  } else {
    input.value = input.value.slice(0, -1);
    num2 = input.value;
  }
});

deleteAll.addEventListener("click", () => {
  input.value = "";
  input.getAttributeNode("placeholder").value = "0";

  isAction = false;
});

add.addEventListener("click", () => {
  // num1 = input.value;
  input.value = "";
  input.getAttributeNode("placeholder").value = "";
  isAction = true;
  action = "add";
});

divorce.addEventListener("click", () => {
  input.getAttributeNode("placeholder").value = "";
  // num1 = input.value;
  input.value = "";
  isAction = true;
  action = "divorce";
});

increase.addEventListener("click", () => {
  input.getAttributeNode("placeholder").value = "";
  // num1 = input.value;
  input.value = "";
  isAction = true;
  action = "increase";
});

division.addEventListener("click", () => {
  input.getAttributeNode("placeholder").value = "";
  // num1 = input.value;
  input.value = "";
  isAction = true;
  action = "division";
});

sqrt.addEventListener("click", () => {
  input.getAttributeNode("placeholder").value = "";
  result = Math.sqrt(input.value);
  input.value = result;
});

square.addEventListener("click", () => {
  result = Math.pow(input.value, 2);
  input.value = result;
});
equal.addEventListener("click", () => {
  isAction = false;

  if (action === "increase") {
    result = num1 * num2;
    input.value = result;
  } else if (action === "divorce") {
    result = num1 - num2;
    input.value = result;
  } else if (action === "division") {
    result = num1 / num2;
    input.value = result;
  } else if (action === "add") {
    result = +num1 + +num2;
    input.value = result;
  }

  num1 = result;
});
