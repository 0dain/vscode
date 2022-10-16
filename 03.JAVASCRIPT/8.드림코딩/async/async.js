//async & await
    //깔끔하게 promise를 사용할 수 있음!
//상황에 맞게 promise, async, await 쓰면 됨


//1. async
async function fetchUser(){
    return 'ellie';
}

// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         //network reqeust 10초
//         resolve('ellie');
//     });
// }

const user=fetchUser();
user.then(console.log);
console.log(user);


//2. await✨
    //async가 붙은 함수 안에서만 사용 가능
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
    //정해진 ms가 지나면 resolve를 호출하는 Promise를 리턴하게 됨
}

async function getApple(){
    await delay(2000);//3000이라는 시간을 ms에 전달했기 때문에 3초가 지나면 resolve를 호출
                     //await을 쓰면 delay가 끝날 때까지 기다려 줌
    // throw 'error'; //error상황 추가
    return '🍏';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

//Promise로 만들어보기
    // function getBanana(){
    //     return delay(3000)
    //     ,then(()=>'🍌');
    // }

//Promise로 사과, 바나나 합치기
    // function pickFruits(){
    //     return getApple()
    //     .then(apple=>{
    //         return getBanana().then(banana=>`${apple} + ${banana}`);
    //     });
    // }

//async로 더 간결하게 코드 만들기
    //추가된 에러를 처리하기 위해 try~catch사용
async function pickFruits(){
    //순차적으로 진행되어서 딜레이 시간이 조금 더 생김
    // const apple=await getApple();
    // const banana=await getBanana();

    //3. await 병렬처리!
        //Promise활용하기! => Promise는 생성되자마자 실행된다는 점을 활용!
        const applePromise=getApple();
        const bananaPromise=getBanana();
        const apple=await applePromise;
        const banana=await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


//4. 유용한 Promise APIs
function pickAllFruits(){
    //all: Promise배열을 전달하게 되면 모든 promise들이 병렬적으로 값을 다 받을 때까지 모아줌
        //배열 형태로 getApple()와 getBanana()가 다 받아지면 다 받아진 배열을 전달받아줌
    return Promise.all([getApple(), getBanana()])
    .then(fruits=>fruits.join(' + '));
}
pickAllFruits().then(console.log);

//어떤 것이든 상관없고 먼저 나오는(딜레이 시간이 빨리 끝나는) 첫번째 과일만 받아오고 싶다?
function pickOnlyOne(){
    //rece: 배열에 전달된 promise 중에서 가장 먼저 값을 리턴하는 것만 전달
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);


//5. 과제