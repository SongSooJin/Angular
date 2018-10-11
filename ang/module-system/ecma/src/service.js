"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function add(a, b) {
  return a + b;
}

function say(name) {
  return "Hi " + name + "!";
}

// 노드가 채택한 모듈 시스템 기술 코드
// console.log(exports === module.exports); // true
// module.exports.add = add;
// module.exports.say = say;

// module.exports = {
//   add,
//   say
// };

// ECMA 채택한 모듈 시스템 기술 코드
exports.add = add;
exports.say = say;
//# sourceMappingURL=service.js.map