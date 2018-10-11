let obj = {
  a:10,
  b:20,
  add: function (x,y) {
    console.log("sum = ", x + y);
  }
};

let b = 30;

// let a = obj.a;
// let add = obj.add;
// 위의 코드와 동일
let {a, add} = obj;

add(a,b);

