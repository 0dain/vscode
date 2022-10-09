//1. 함수
//프로그램의 기본적인 빌딩 블럭
//여러번 재사용 가능
//한 가지의 과제나 어떠한 값을 계산하기 위해서 쓰임

//함수 선언
  //function 이름(param1(매개변수1), param2(매개변수2)){로직... return;}
  //하나의 함수는 한 가지의 일만 수행할 수 있도록!
  //함수 이름 지을 때: 무엇을 할 건지, 동사형 명령어로
  //JS에서의 함수는 Object임!
    //함수를 변수에 담을 수도 있고 매개변수로 전달할 수도 있고 리턴값에 함수를 넣을 수도 있음!

function printHello(){
  console.log('Hello');
}

//함수 호출
printHello();

//조금 더 유용하게 함수 사용하기!(매개변수 활용)
function log(message){
  console.log(message);
}

log('Hello!~');
//JS는 타입에 구애 받지 않기 때문에 함수만 봐서는 매개변수 값이 문자열인지 숫자인지 알 수 없음
log(123);
//협업을 할 땐 타입스크립트를 활용함
  //TS를 활용한 함수 예시: function log(매개변수:매개변수 타입(string)): 반환타입(number){수행할 코드 return 0;}


//2.매개변수(Parameter)
//premitive parameters: 값(value) 전달
//object parameters: 레퍼런스(reference) 전달
function changeName(obj){
  obj.name='coder';
}
const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie);


//3. Default parameters(ES6에서 추가)
  //매개변수가 두 개일 때 사용자가 매개변수 값을 하나만 전달하게 되면 undefined가 나옴
  //undefined이 반환될 때 띄워주고 싶은 문구를 설정할 수 있음!
    //예전에 사용했을 땐 조건문을 넣어서 from이 undefined일 때 unknown을 띄워줘라 하고 코드를 썼었는데 ES6에서 조금 더 간편하게 바뀐 것!
function showMessage(message, from='unknown'){
  console.log(`${message} by ${from}`);
}
showMessage('Hi~');


//4. Rest Parameters(ES6에서 추가)
  //... => 배열 형태의 매개변수
function printAll(...args){
  for(let i=0;i<args.length;i++){
    console.log(args[i]);
  }

  //배열을 조금 더 간단하게 출력하는 법
    //args에 있는 값이 arg에 저장이 되면서 하나씩 출력을 하게 됨
  for(const arg of args){
    console.log(arg);
  }

  //이것보다 더 간단한 방법
    //배열에 forEach함수 사용
  args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','ellie');


//5. Local scope
let globalMessage='global';//전역변수
function printMessage(){
  let message='hello';
  console.log(message);//지역변수
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage='hello~~';
  }
  // console.log(childMessage);//error
}
printMessage();


//6. Return(리턴 값)
function sum(a, b){
  return a+b;
}
const result=sum(1,2);//3
console.log(`sum: ${sum(1,2)}`);


//7. Early return, early exit
  
  //bad
function upgradeUser(user){
  if(user.point>10){
    //long upgrade logic
  }
}

  //good
    //조건이 맞지 않을 때 빨리 리턴을 해서 함수를 종료하고 조건이 맞을 때만 필요한 로직을 실행할 수 있도록 하는 것이 좋음!
function upgradeUser(user){
  if(user.point<=10){
    return;
  }
  //long upgrade logic
}


//First-class function
//함수는 다른 변수와 마찬가지로 변수에 할당할 수 있음
//함수의 매개변수로도 전달할 수 있음
//리턴값으로도 함수를 사용할 수 있음

//1. Function expression
//a function declaration can be called earlier than it is defiend(hoisted)(함수가 선언되기 이전에 호출가능)
//a funtion expression is created when the execution reaches it(할당된 다음부터 호출할 수 있음)

//함수를 선언함과 동시에 print라는 변수에 할당함
const print=function(){//함수의 이름이 없는 것: anonymous function(익명함수)
  console.log('print');
}
print();//print 변수를 함수를 호출하듯이 사용하면 변수에 저장된 함수를 사용할 수 있음 => print출력
const printAgain=print;//다른 변수에 다시 할당하는 것도 가능
printAgain();//함수 호출 하듯이 사용 => print출력
const sumAgain=sum;//위에서 만든 sum함수도 다른 변수에 할당하여 사용할 수 있음
console.log(sumAgain(1,3));//함수를 할당한 변수를 함수 호출 하듯이 사용하면 됨 => 4출력


//2. Callback function(콜백함수) using function expression
function randomQuiz(answer, printYes, printNo){
  if(answer==='love you'){
    printYes();
  }else{
    printNo();
  }
}

//익명함수
const printYes=function(){
  console.log('yes~');
}

//네임드 함수
//디버깅을 할 때 디버깅의 stack traces에 함수 이름이 나오게 하기 위해서 사용하는 것
const printNo=function print(){
  console.log('no!');
  //print();
    //함수 안에서 함수 자신 스스로를 부르는 것 => recursions -> 평소엔 쓰지 말고 피보나치 수열 계산이나 반복되는 평균 계산 등 필요한 곳에서 사용해야 함
}
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);


//3. 화살표함수
//always anonymous
const simplePrint=function(){
  console.log('simplePrint!');
}

//로직이 한 줄인 경우 중괄호 없이 사용 가능
const simplePrint2=()=>console.log('simplePrint!');
const add=(a,b)=>a+b;

//로직이 복잡할 땐 중괄호 사용해주기! => return 해줘야 함!
const simpleMultiply=(a,b)=>{
  return a*b;
}

//4. IIFE: Immediately Invoked Function Expression
  //함수를 선언함과 동시에 호출!
(function hello(){
  console.log('IIFE');
})();
// hello();

//실습
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

const calculate=(command, a, b)=>{
  // if(command==='add'){
  //   return a+b;
  // }else if(command==='sub'){
  //   return a-b;
  // }else if(command==='div'){
  //   return a/b;
  // }else if(command==='mul'){
  //   return a*b;
  // }else{
  //   return a%b;
  // }
  //정해진 데이터를 처리하는 경우엔 if문 보다는 switch문을 이용하는 것이 더 좋음

  switch(command){
    case 'add':
      return a+b;
    case 'sub':
      return a-b;
    case 'div':
      return a/b;
    case 'mul':
      return a*b;
    case 'rem':
      return a%b;
  }
}
console.log(calculate('add', 5,2));