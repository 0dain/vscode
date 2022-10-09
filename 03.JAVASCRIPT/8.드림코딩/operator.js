//1. String 더하기
console.log('my'+'cat'); //mycat
console.log('1'+2);//12
console.log(`string literals: 1 + 2 = ${1+2}`);//string literals: 1 + 2 = 3

//string literals의 좋은 점
    //줄바꿈과 기호를 그대로 출력해줌 
console.log(`string literals: 

''''
1 + 2 = ${1+2}`);//string literals: 
                 //
                 //''''
                 //1 + 2 = 3

//작은 따옴표로 문자열을 만들게 되면 내가 string안에 작은 따옴표를 출력해야 할 때 어려움이 발생!
    //표시하고 싶은 작은 따옴표 앞에 \ 를 넣어줘야 함
    //개행을 하고자 할 땐 \n, 띄어쓰기(넓은)는 \t
console.log('ellie\'s book');//ellie's book
// console.log('ellie's book'); -> 이건 인식하지 못 함


//2. 숫자 연산자
console.log(1+1);//add 2
console.log(1-1);//substract 0
console.log(1/1);//divide 1
console.log(1*1);//multiply 1
console.log(5%2);//remainder 1
console.log(2**3);//exponentiation 8

//3. 증감연산자
let counter=2;
const preIncrement=++counter;//counter=counter+1; => preIncrement=counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)//preIncrement: 3, counter: 3
const postIncrement=counter++;//postIncrement = counter; => counter=counter+1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)//postIncrement: 3, counter: 4

const preDecrement=--counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)//preDecrement: 3, counter: 3
const postDecrement=counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)//postDecrement: 3, counter: 2

//4. 복합 연산자
let x=3;
let y=6;
x+=y;//x=x+y;
x-=y;
x*=y;
x/=y;

//5. 비교 연산자
console.log(10<6);//false
console.log(10<=6);//false
console.log(10>6);//true
console.log(10>=6);//true

//6. 조건 연산자: ||(or), &&(and), !(not)
const value1=false;
const value2=4<2;

// ||(or), 처음 조건이 true면 거기서 멈춤!(true조건을 만나면 뒤에 있는 조건들을 확인하지 않는다는 뜻)
    //만약 value1이 true면 뒤에 check()함수까지 가지 않음!
    //코드를 작성할 땐 연산처리가 무거운(함수)것은 뒤로 배치하는 것이 좋음
console.log(`or: ${value1||value2||check()}`)

//&&(and), 처음 조건이 false면 거기서 멈춤!
    //null체크를 할 때에 자주 쓰임
console.log(`or: ${value1&&value2&&check()}`)

//가끔 긴 if문을 압축할 때 사용
//nullableObject && nullableObject.something
    //nullableObject가 null이 아닐 때만 nullableObject의 something이라는 값을 받아온다
        // if(nullableObject!=null){
        //     nullableObject.something;
        // }

function check() {
    for(let i=0;i<10;i++){
        //wasting time
        console.log('😱');
    }
    return true;
}

//!(not)
console.log(!value1);//true

//7. Equality(==, ===)
const stringFive='5';
const numberFive=5;

//==, 타입이 일치하지 않아도 됨(타입을 변경해서 검사함)
console.log(stringFive==numberFive);//true
console.log(stringFive!=numberFive);//false

//===, 타입까지 일치해야 함
console.log(stringFive===numberFive);//false
console.log(stringFive!==numberFive);//true

//object equality by reference
const ellie1={name:'ellie'};
const ellie2={name:'ellie'};
const ellie3=ellie1;
console.log(ellie1==ellie2);//false, 1과 2에는 각각 다른 레퍼런스가 저장되어 있기 때문
console.log(ellie1===ellie2);//false, 똑같은 타입이든 아니든 레퍼런스 값이 다르기 때문
console.log(ellie1===ellie3);//true, 1과 3은 똑같은 레퍼런스를 가지고 있음

//equality - 실습
console.log(0==false);//true => 0, null, undefined, NaN, 빈문자열은 false로 간주될 수 있음
console.log(0===false);//false => 0은 boolean타입이 아니기 때문에 false
console.log(''==false);//true => 0, null, undefined, NaN, 빈문자열은 false로 간주될 수 있음
console.log(''===false);//false => 빈문자열은 boolean타입이 아니기 때문에 false
console.log(null==undefined);//true
console.log(null===undefined);//false

//8. 조건문: if
//if, else if, else
const name='ellie';
if(name==='ellie'){
    console.log('Welcome, Ellie!');
}else if(name==='coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkunon');
}

//9. 삼항 연산자(Ternary operator): ?
//조건? value1:value2;
console.log(name==='ellie'? 'yes':'no');

//10. Switch문
//다중 if문 체크에 사용
//나열된 값 체크에 사용
//TS에서 다중 유형 체크할 때 사용
const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. 반복문(Loops)
    //while문
    //조건이 true일 때만 블럭 안의 내용이 실행됨
let i=3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

    //do while문
    //블럭 안의 내용을 먼저 실행한 후에 조건을 검사하게 됨
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//블럭 안에 내용을 실행하고 나서 조건을 검사하고 싶다면 do while를 쓰고 조건이 맞을 때만 실행하고 싶다면 while문을 쓰면 됨

    //for문
        //for(begin; condition; step)
for(i=3;i>0;i--){
    console.log(`for: ${i}`);
}

for(let i=3;i>0;i=i-2){
    //지역변수 i 선언
    console.log(`inline variable for: ${i}`);
}

    //이중for문
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(`i: ${i} j: ${j}`);
    }
}

//break(반복문 끝내기), continue(지금 조건만 무시하고 다시 다음 조건으로 넘어감)

//Q1. 0부터 10까지 짝수인 숫자만 출력(continue 활용)
for(let i=0;i<=10;i++){
    if(i%2!==0){
        continue;
    }
    console.log(`Q1의 i: ${i}`);
}


//Q2. 0부터 10까지 출력하되 숫자 8을 만나면 멈추기(break 활용)
for(let i=0;i<=10;i++){
    if(i===8){
        break;
    }
    console.log(`Q2의 i: ${i}`);
}
