//Objects
//one of the JS data types
//a collection of related data and/or functionality
//Nearly all objects in JS ar instances of Object
//객체={키(key):값(value)};
//키: 우리가 접근할 수 있는 변수
//값: 키가 가지고 있는 값


//1. Literals and properties
const name='ellie';
const age=4;
print(name, age);

function print(name, age){
  console.log(name);
  console.log(age);
  //이렇게 하면 인자(주소, 직업 등)가 늘어날 때마다 추가해야 하는 것들이 많아짐 => 관리하기 힘듦
}

//객체를 활용해서 쉽고 간단하게 데이터 관리하기
const ellie={name: 'ellie', age: 4};

function print2(person){
  console.log(person.name);
  console.log(person.age);
}
print2(ellie);

//객체 만드는 법
const obj1={};//'object literal' syntax
const obj2=new Object();//'object constructor' syntax

//JS는 동적으로 타입이 런타임 때 결정되는 언어
  //그래서 뒤늦게 객체에 넣을 속성을 추가할 수 있음
  //유지보수하기 힘들기 때문에 사용하지 않는 것이 좋음
ellie.hasJob=true;
console.log(ellie.hasJob);//true

  //삭제도 가능함
delete ellie.hasJob;
console.log(ellie.hasJob);//undefined


//2. Computed properties
//object['key']
  //key는 String타입으로 지정해서 가져와야 함
console.log(ellie.name);//ellie

//객체 안에 있는 변수의 이름을 string타입으로 접근할 수 있음
  //실시간으로 원하는 키의 값을 가져오고 싶을 때 사용
console.log(ellie['name']);//ellie

ellie['hasJob']=true;
console.log(ellie.hasJob);

function printValue(obj, key){
  console.log(obj.key);//코딩하는 시점에서는 key가 무엇을 출력할지 전혀 알 수 없음
  console.log(obj[key]);
}

printValue(ellie,'name');//.key=>undefined / [key]=>ellie
printValue(ellie,'age');//.key=>undefined / [key]=>4


//3. Property value shorthand
const person1={name: 'bob', age: 2};
const person2={name: 'steve', age: 3};
const person3={name: 'dave', age: 4};

//함수를 이용해서 객체 만드는 것을 간단하게 해보기!
const person4=makePerson('ellie',30);

console.log(person4);//{name: 'ellie', age: 30}

function makePerson(name, age){
  return{
    //key와 value의 이름이 동일하다면 name, age만 써도 가능!
    name: name,
    age: age
  }
}

const person5= new Person('dani', 5);
console.log(person5);

//4. Constructor Function
//다른 계산을 하지 않고 순수하게 객체 생성만 하는 함수들은 함수 이름이 대문자로 시작함!
//return 값을 주지 않고 this.name=name; 이런 식으로 값을 지정하고 호출 할 때에도 new를 사용함!
function Person(name, age){
  //this={};
  this.name=name;
  this.age=age;
  //return this;
}


//5. in operateor: 해당하는 객체 안에 키가 있는지 없는지 확인 
console.log('name' in ellie);//true
console.log('age' in ellie);//true
console.log('random' in ellie);//false
console.log(ellie.random);//undefined


console.clear();//콘솔창 지우기


//6. for..in vs for..of
//for(key in obj)
for(key in ellie){//ellie가 가지고 있는 key들이 반복문을 돌 때마다 왼쪽에 있는 지역변수 key에 저장이 됨
  console.log(key);
}

//for(value of iterable)
  //배열과 같은 배열 리스트, 순차적으로 반복될 때 사용
const array=[1,2,4,5]

//배열을 출력하는 방법 => 일반 for문
for(let i=0;i<array.length;i++){
  console.log(array[i]);
}

//for..of
for(value of array){//array에 있는 모든 값 들이 반복문을 돌면서 value에 할당되어 출력
  console.log(value);
}


//7. cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user={name: 'ellie', age:'20'}
const user2=user;
user2.name='coder';
console.log(user);//{name: 'coder', age: '20'}

//객체 복제
  //옛날 방식
const user3={};
for(key in user){
  user3[key]=user[key];
}
console.clear();
console.log(user3);//{name: 'coder', age: '20'}

//다른 방식
const user4={};
Object.assign(user4, user);
console.log(user4);

  //또는
const user5=Object.assign({},user);
console.log(user5);

//또 다른 예시
const fruit1={color: 'red'};
const fruit2={color: 'blue', size: 'big'};
const mixed=Object.assign({}, fruit1, fruit2);
console.log(mixed.color);//blue => 동일한 키의 값이 있으면 뒤에 나온 값이 출력됨
console.log(mixed.size);//big