const numberInput = document.querySelector(".login-form");

const resultOutput = document.querySelector("#result");

numberInput.addEventListener("submit", checkNumber);

function checkNumber(event) {
  event.preventDefault();

  if (!event.currentTarget.number.value) {
    document.querySelector("button").disabled = false;
  } else {
    // multiply
    const numberInput = event.currentTarget.number.value;
    const multCheck = numberInput * 2;

    // add one
    const addOne = numberInput.split("");
    addOne.push(1);
    const addOneCheck = addOne.join("");

    if (multCheck === addOne) {
      resultOutput.textContent = `Numbers are equal: ${numberInput}*2 = ${multCheck} are equal to ${numberInput}+1 = ${addOneCheck}. `;
    } else {
      resultOutput.textContent = `Can't transform numbers😕: ${numberInput}*2 = ${multCheck}, not equal to ${numberInput}+1 = ${addOneCheck}. `;
    }
  }

  event.currentTarget.reset();
}
