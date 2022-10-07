//1. String concatenation
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


//2. Numeric operators
console.log(1+1);//add 2
console.log(1-1);//substract 0
console.log(1/1);//divide 1
console.log(1*1);//multiply 1
console.log(5%2);//remainder 1
console.log(2**3);//exponentiation 8

//3. Increment and decrement operators
let counter=2;
const preIncrement=++counter;//counter=counter+1; => preIncrement=counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)//preIncrement: 3, counter: 3
const postIncrement=counter++;//postIncrement = counter; => counter=counter+1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)//postIncrement: 3, counter: 4

const preDecrement=--counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)//preDecrement: 3, counter: 3
const postDecrement=counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)//postDecrement: 3, counter: 2

//4. Assignment operators
let x=3;
let y=6;
x+=y;//x=x+y;
x-=y;
x*=y;
x/=y;

//5. C