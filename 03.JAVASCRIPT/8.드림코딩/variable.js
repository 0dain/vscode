//use strict
//added in ES5
//바닐라 JS에서만!
'use strict';

//1. Variable
//변수 let(added in ES6)

//Block scope
//{}
//코드를 블럭 안에 작성하게 되면 블럭 밖에서는 블럭 안의 변수를 가져올 수 없음
//블럭 밖에 선언한 변수는 전역 변수라고 함
let globaName='global name';
{
  let name='dain';
  console.log(name);
  name='hello';
  console.log(name);
  console.log(globaName)//콘솔에 출력됨
}
console.log(name);//콘솔에 출력되지 않음
console.log(globaName);//콘솔에 출력됨

//var는 쓰지 않음!
//선언하기 전에 값을 할당하거나 출력할 수 있음
//var hoisting(어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것!)
//block scope가 없음 
//let은 블럭 안에 있으면 블럭 밖에서 사용할 수 없지만 var는 블럭 안에 있어도 블럭 밖에서 사용할 수 있음
{
age=4;
var age;
}
console.log(age);//콘솔에 출력됨

//3. Constant(상수), r(read only)

  //보안상의 이유로 값이 바뀌면 안 될 때
  //여러 개의 스레드가 동시에 변수에 접근해서 값을 변경할 수 있는데 이것을 방지해주고자 할 때
  //앞으로 변경되어야 할 좋은 이유가 없을 때, 내가 나중에 코드를 변경하거나 다른 개발자가 코드를 만질 때 실수를 방지할 수 있음
const daysInWeek=7;
const maxNumber=5;

//Immutable data types: primitive types, frozen objects(i.e. object.freeze())
  //변경할 수 없는 데이터 타입
//Mutable data types: all objects by default are mutable is JS
  //변경이 가능한 데이터 타입

//상수를 언제 쓰는가
   //보안상의 이유로 값이 바뀌면 안 될 때
   //여러 개의 스레드가 동시에 변수에 접근해서 값을 변경할 수 있는데 이것을 방지해주고자 할 때
   //앞으로 변경되어야 할 좋은 이유가 없을 때, 내가 나중에 코드를 변경하거나 다른 개발자가 코드를 만질 때 실수를 방지할 수 있음


//4. Variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object(single item의 여러 개를 묶어서 관리) => box container
//function => first-class function(함수가 변수에 할당이 가능, 함수의 인자로도 전달이 되고, 함수의 리턴 타입으로 함수를 리턴하는 것이 가능)
const count =17;
const size=17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//primitive : 값 자체가 메모리에 저장
//object : 크키가 커서 메모리에 값을 저장할 수 없음, 실제 객체가 있는 레퍼런스 주소를 저장함(실제로 객체가 담겨있는 메모리를 가리킴)

//number - special numberic values: infinity, -infinity, NaN
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity); //infinity 출력
console.log(negativeInfinity);//-infinity 출력
console.log(nAn);//NaN 출력

//bigInt(fairly new, don't use it yet) -> 최근에 추가가 된 거라서 다른 브라우저에서는 적용되지 않을 수 있음!
const bigInt=1234567890123456789012345678901234567890n;//over(-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);//value: 1234567890123456789012345678901234567890, type: bigint
Number.MAX_SAFE_INTEGER;

//string
const char='c';
const brendan='brendan';
const greeting='hello'+brendan; //string끼리 연결 가능
console.log(`value: ${greeting} type: ${typeof greeting}`);//value: hellobrendan type: string
const helloBob=`hi ${brendan}!`;//template literals(string) ->  변수에 원하는 값(hi !)을 붙일 수도 있음!
console.log(`value: ${helloBob} type: ${typeof helloBob}`);//value: hi brendan! type: string
// console.log('value: '+helloBob+'type: '+typeof helloBob'); 보다 간편하게 적을 수 있게 ``를 이용하면 좋음~!

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead=true;
const test=3<1;//false
console.log(`value: ${canRead} type: ${typeof canRead}`);//value: true type: boolean
console.log(`value: ${test} type: ${typeof test}`);//value: false type: boolean

//null
let nothing=null;
console.log(`value: ${nothing} type: ${typeof nothing}`);//value: null type: object

//undefined
  //값이 할당되지 않았을 때
let x;
console.log(`value: ${x} type: ${typeof x}`);//value: undefined type: undefined

//symbol
  //create unique identifiers for objects
  //map이나 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);//false, 동일한 string로 작성을 했어도 다른 심볼로 만들어지기 때문에 주어지는 값에 상관없이 고유한 식별자로서의 역할을 함

//동일한 심볼을 만들고 싶다면?!
//Symbol.for('id'): 주어진 값에 맞는 symbol을 만들어달라는 뜻
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);//true

//심볼을 출력하려면?!
// console.log(`value: ${symbol1} type: ${typeof symbol1}`); => 이렇게만 쓰면 오류남
console.log(`value: ${symbol1.description} type: ${typeof symbol1}`);//value: id type: symbol
//.description: string으로 변환해서 출력해야 함

//object, real-life object, data strucrure
const ellie={name: 'ellie', age: 20};
ellie.age=21;

//5. Dynamic typing: dynamically typed language
  //선언할 때 데이터의 타입을 선언해주지 않고 런타임할 때 할당된 값에 따라서 데이터 타입이 변경될 수 있음
    //다수의 개발자 또는 규모가 있는 프로젝트를 만들 때 단점이 있음!
let text='hello';
console.log(text.charAt[0]);//h
console.log(`value: ${text} type: ${typeof text}`);//value: hello type: string
text=1;
console.log(`value: ${text} type: ${typeof text}`);//value: 1 type: number
text='7'+5;
console.log(`value: ${text} type: ${typeof text}`);//value: 75 type: string, 숫자 5가 string으로 변환됨
//근데 나누기를 쓰면?!
text='8'/'2';
console.log(`value: ${text} type: ${typeof text}`);//value: 4 type: number, number로 타입이 변환됨!
console.log(text.charAt[0]);//에러 발생! 숫자형으로 바꼈기 때문에!
//이와 같은 특징 때문에 TS(타입스크립트)가 나오게 됨