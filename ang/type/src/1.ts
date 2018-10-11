// type을 명시하고 사용하는 JAvaScript == TypeScript
// var a : number = 10, b = 20;

var burger: string = 'hamburger', // String
  calories: number = 300, // Numeric
  tasty: boolean = true; // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

// function add(a : number, b : number) {
//   return a + b;
// }
// 
// var result = add(2,3);
// console.log(result);




function speak(food : string, energy : number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

speak("burger", 3);

