//FUNCTION DECLARATION



function declaration(number1, number2) {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const added = squared1 + squared2;
  const squared3 = added * added;
  return squared3;
}

console.log(declaration(5, 5));



//FUNCTION EXPRESSION

const expression = function (number1, number2) {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const added = squared1 + squared2;
  const squared3 = added * added;
  return squared3;
};

console.log(expression(5, 5));


// ARROW FUNCTION

const arrow = (number1, number2) => {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const added = squared1 + squared2;
  const squared3 = added * added;
  return squared3;
};


console.log(arrow(5, 5));