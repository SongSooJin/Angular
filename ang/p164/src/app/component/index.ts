export * from './core-test/core-test.component'; 
export * from './hello/hello.component'; 
export * from './intro/intro.component'; 
// 파일로 분산되어 있는  export 자원둘울 모아서 하나의 파일인 
// index.ts가 재 export 하게 되면, 모듈에서 세 개의 컴포넌트 파일을 
// 임포트하는 대신 하나의 index.ts 파일을 임포트하는 것으로 대체 할 수있다.