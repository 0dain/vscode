'use strict'

//Promise는 JS안에 내장되어있는 Object
//비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있음
//State: pending(수행 중일 때) -> fulfilled(성공적으로 끝냈을 때) or rejected(성공적으로 끝내지 못했을 때)
//Producer(원하는 기능을 수행해서 해당하는 데이터를 만들어냄) vs Consumer(우리가 원하는 데이터를 소비함)


//1. Producer
//Promise(): executor라는 콜백함수를 전달 받음 이 콜백함수 안에는 또 다른 두 가지의 콜백함수를 전달 받음
//resolve => 기능을 정상적으로 수행해서 마지막에 데이터를 전달, reject => 기능을 수행하다가 중간에 문제가 생기면 호출 
const promise = new Promise((resolve, reject) => {
  //무거운 작업들을 처리: 네트워크 통신, 파일 읽어오기 등
  console.log('doing something...');
  //📌Promise를 만드는 순간 우리가 만든 함수(executor)가 바로 실행됨
  //이 안에 네트워크 통신을 하는 로직을 작성했을 경우 Promise가 만들어지는 그 순간 네트워크 통신을 수행하게 됨
  //만약, 사용자가 요청했을 때(버튼을 눌렀을 경우 등)만 네트워크 통신을 하고 싶다면 Promise안에 작성하면 안 됨(사용자가 요청하지 않았는데 불필요한 네트워크 통신을 하게 됨)
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});


//2. Consumers: then, catch, finally
//값이 정상적으로 잘 수행이 된다면 => then((받아올 값)=>{원하는 기능을 수행하는 콜백함수 전달})
//then안에 들어있는 value는 promise가 정상적으로 수행이 되었을 때 가져오는 resolve('ellie')를 담게 됨
//그렇지 않다면 => catch((받아올 값)=>{원하는 기능을 수행하는 콜백함수 전달})
//catch안에 있는 error는 promise가 정상적으로 수행되지 않았을 때 reject(new Error('no network'))를 담게 됨
//finally(): 성공 실패 여부와 상관없이 무조건 호출
//promise에서 then을 호출하게 되면 다시 promise가 호출이 되고 리턴된 promise를 catch에 등록하는 것
promise.then((value) => {
  console.log(value);//ellie
}).catch((error) => {
  console.log(error);//Error: no network
}).finally(() => {
  console.log('finally');
});


//3. Promise chaining(연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => { resolve(1) }, 1000)
});

//then은 값을 전달할 수도 있고 또 다른 비동기인 Promise도 전달할 수 있음
fetchNumber.then(num => num * 2).then(num => num * 3).then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(num - 1) }, 1000)
  });
}).then(num => console.log(num));


//4. 오류 다루기!(Error Handling)
const getHen=()=>new Promise((resolve, reject)=>{
  setTimeout(()=>resolve('🦆'), 1000);
});

const getEgg=hen=>new Promise((resolve, reject)=>{
  // setTimeout(()=>resolve(`${hen} => 🥚`), 1000);
  setTimeout(()=>reject(new Error(`error! ${hen} => 🥚`)), 1000);
});

const cook=egg=>new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(`${egg} => 🍳`));
});

// getHen().then(hen=>getEgg(hen)).then(egg=>cook(egg)).then(meal=>console.log(meal));//🦆 => 🥚 => 🍳
//코드를 조금 더 간결하게?!
  //콜백함수를 전달할 때 받아오는 값을 다른 함수로 바로 하나를 호출하는 경우(한 가지만 받아서 그대로 전달하는 경우)
getHen()
  .then(getEgg)
  .catch(error=>{
    return '🥔';
  })//오류가 생긴 곳 바로 다음에 catch문을 써서 오류를 처리해주면 됨
  .then(cook)
  .then(console.log)
  .catch(console.log)
//이렇게 쓰는 게 더 가독성이 좋음


