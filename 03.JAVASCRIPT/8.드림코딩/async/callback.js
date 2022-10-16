'use strict'
//1. 동기와 비동기

//JS는 동기적임(Synchronous)
  //호이스팅이된 이후부터 코드가 우리가 작성한 순서에 맞춰 하나하나 동기적으로 실행이 됨
    //호이스팅(hoisting)이란? var, 함수 선언이 자동적으로 제일 위로 올라가는 것
//비동기(Asynchronous)

console.log('1');
//setTimeout(함수(){로직}, 어느정도 시간이 지나면 함수를 실행하고 싶은지 원하는 시간 쓰기(m/s)): 브라우저에서 제공하는 API, 우리가 지정한 시간이 지나면 우리가 전달한 콜백함수를 전달
  //1000 => 1초 / 2000 => 2초
setTimeout(()=>{//비동기적 실행방법 예시
  console.log('2');
}, 1000);
console.log('3');
//콘솔에 1, 3, 2 순으로 찍힘
  //실행됐을 때 위에서부터 순차적으로 실행이 되는데 1을 출력하고 내려오면 setTimeout을 만남
  //프로그램은 브라우저에게 해당 함수를 알리고 함수가 실행되기를 기다리지않고 밑으로 내려가서 3을 출력하게 되고
  //브라우저는 사용자가 설정한 시간이 지나면 다시 프로그램에게 설정한 시간 지났어~ 하고 알려주고 프로그램은 그때서야 함수를 실행함


//Synchronous callback
function printImmediately(print){
  print();
}

printImmediately(()=>console.log('hello~'));//1, 3, hello~, 2 순으로 출력됨
//JS는 함수 선언은 호이스팅이 되기 때문에 22번줄에 선언한 함수가 제일 위로 올라가게 됨
//함수 선언 -> 1출력 -> setTimeout 브라우저에 요청 -> 3출력 -> printImmediately 함수 호출해서 출력 -> 브라우저에 요청한 setTimeout 실행

//Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);//1, 3, hello~, 2, async callback 순으로 출력됨
//모든 함수의 선언은 호이스팅 되기 때문에 22번줄 함수와 31번줄 함수는 제일 위로 올라가게 됨
//함수 선언 -> 1 출력(동기) -> setTimeout(위) 브라우저에 요청(비동기) -> 3 출력(동기) -> printImmediately 함수 호출해서 출력(동기) -> printWithDelay(아래) 브라우저에 요청(비동기)
// -> 사용자가 지정한 시간이 지나면 브라우저에서 콜백함수 요청 2 출력 -> 사용자가 지정한 시간이 지나면 브라우저에서 콜백함수 요청 async callback 출력


//콜백 나쁜 예제
class UserStorage{
  loginUser(id, pw, onSuccess, onError){
    setTimeout(()=>{
      if((id==='ellie'&&pw==='dream')||(id==='coder'&&pw==='academy')){
        onSuccess(id);
      }else{
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user==='ellie'){
        onSuccess({name:'ellie', role:'admin'});
      }else{
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage=new UserStorage();
const id=prompt('id');
const pw=prompt('pw');
userStorage.loginUser(id, pw,(user)=>{
  userStorage.getRoles(user, (userWithRole)=>{
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  }, (error)=>{
    console.log(error);
  })
},(error)=>{
  console.log(error);
});