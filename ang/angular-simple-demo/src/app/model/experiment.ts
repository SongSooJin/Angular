// Experiment 자료형을 취급하는 변수가 가리키는 객체는
// 반드시, 다음과 같은 프로퍼티와 그에 해당하는 자료형의 데이터를
// 갖고있어야 한다.
export class Experiment {
  name: string;
  description: string;
  completed: number;
}

// export interface Experiment {
//   name: string;
//   description: string;
//   completed: number;
// }
