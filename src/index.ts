const rect = require('./rectangle');

function solveRectangle(l: number, b: number) {
  console.log(`Solving or rectangle with = ${l}, b = ${b}`);

  if (l <= 0 || b <= 0) {
    console.log(`Rectangle dimensions should be greater than zero: l = ${l}, b = ${b}`);
  } else {
    console.log(`The area of the rectangle is ${rect.area(l, b)}`);
    console.log(`The perimeter of the rectangle is ${rect.perimeter(l, b)}`);
  }

  console.log(`\n`);
}

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);
