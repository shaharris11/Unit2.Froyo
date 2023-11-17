const userInputString = prompt(
    "Please enter some  separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  const inputArray = [];
  let currentFlavor = "";
  let char = "";

  for (let i = 0; i <userInputString.length; i++) {
    char = userInputString[i];

    if (char === ",") {
        inputArray.push(currentFlavor);
        currentFlavor = "";
    } else {
        currentFlavor = currentFlavor + char
    }
  }

  inputArray.push(currentFlavor)

  console.log(inputArray);

  const order = {}

  for (let i = 0; i < inputArray.length; i++) {
    currentFlavor = inputArray[i]
    if (order[currentFlavor]){
        order[currentFlavor]++
    } else (
        order[currentFlavor] = 1
    )
}
console.log(order);  

function getOrder(currentFlavor){
    let order = ','
    if (let i = 0; i < userInputString.length; i++) {
        order[currentFlavor]++
    } else {
        order[currentFlavor] = 1
    }
    return getOrder(currentFlavor)
}
 console.log(getOrder(currentFlavor));