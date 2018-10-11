x = 3;

var foo = {
  x:2,
  
  baz: {
    x:1,
    
    bar:function() {
      return this.x;
    }
    
  }
  
}

var go = foo.baz.bar;
console.log(go()); // go앞에 아무것도 없으므로 글로벌 호출 
console.log(foo.baz.bar());




var a = 6;

function t() {
  var a = 7;
  
  function b() {
    var a = 8;
    alert(a);
  }
  
  b();
  alert(a);
}

t();
alert(a);
// 함수 스코프는 격리되기 때문에 함수의 흐름을 잘봐야함 

lo

function d() {
  var a = 7;
  return function c() {
    alert(a+b);
  }
}
var f = d();
f(5);






for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(++i);
  },0);
  
}
console.log(i);


function aa() {
  return
  {
    test:1
  };
}

alerta(typeof aa());

// 
// 비교연산자 : == , 동일비교 , 같은ㄱ덧을 가리티는가?
// equals 메소드 : 동등비교, 값이 같은가?
// 클래스에서 재정의 했다면 동등비교로 행동하고
// 그렇지 않으면 슈퍼클래스 Object가 정한 로직을 그대로 사용하는 것이므로
// 동일비교로 행동한다.




