function add(a,b) {
  return a + b;
}

function say(name) {
  return "Hi " + name + "!"; 
}

console.log(module.exports);
// {}
module.exports.add = add;
module.exports.say = say;

console.log(module.exports);
// { add: [Function: add], say: [Function: say] }

console.log("--------------------------");