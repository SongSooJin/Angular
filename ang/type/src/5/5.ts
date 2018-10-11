interface IGreeter { 
  greet(): string; 
}

class Greeter implements IGreeter {
  names : Array<String> = ["A","B"];
  greeting: any;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string {
    return 'Hello, ' + this.greeting;
  }
  print(names: Array<any>): void {
    
  }
}

var greeter = new Greeter('Everybody');
console.log(greeter);

var result = greeter.greet(); console.log(result); 

