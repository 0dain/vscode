'use strict'

//Array

//1. 배열 생성, 선언
const arr1=new Array();
const arr2=[1,2];


//2. Index position
//인덱스 활용
const fruits=['🍏','🍇'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);//undefined
//배열의 마지막 값을 찾고 싶을 때
console.log(fruits[fruits.length-1]);//🍇

//배열 출력(반복문)
  //print all fruits
  //for문
for(let i=0;i<fruits.length;i++){
  console.log(`${i}번째 과일: ${fruits[i]}`);
}

  //for of
for(let fruit of fruits){
  console.log(fruit);
}
  
  //forEach
fruits.forEach((fruit, index, array)=>console.log(fruit, index, array));//🍏 0 (2) ['🍏', '🍇'], 🍇 1 (2) ['🍏', '🍇']
fruits.forEach((fruit, index)=>console.log(fruit, index));//🍏 0, 🍇 1


//4. 배열에 추가하기, 삭제하기, 복사하기
  //배열 제일 끝에 추가하기 => push
fruits.push('🍑','🍓');
console.log(fruits);//(4) ['🍏', '🍇', '🍑', '🍓']

  //배열 제일 끝에 값 지우기 => pop
fruits.pop();
console.log(fruits);//(3) ['🍏', '🍇', '🍑']
fruits.pop();
console.log(fruits);//(2) ['🍏', '🍇']

  //배열 앞에 넣기 => unshift
fruits.unshift('🍍','🍒');
console.log(fruits);//(4) ['🍍', '🍒', '🍏', '🍇']

  //배열 앞에서 삭제하기 => shift
fruits.shift();
console.log(fruits);//(3) ['🍒', '🍏', '🍇']
fruits.shift();
console.log(fruits);//(2) ['🍏', '🍇']

//shift, unshift는 pop과 push보다 느림!!
  //pop,push => 기존의 데이터를 건드리지 않고 삽입과 삭제 가능
  //shift, unshift => 기존의 데이터를 옮기면서 삽입과 삭제를 해야 함


  //특정 인덱스의 값 삭제하기 => splice
fruits.push('🥝','🍉','🥥');
console.log(fruits);//(5) ['🍏', '🍇', '🥝', '🍉', '🥥']

//.splice(어디서부터 지울 건지 시작하는 인덱스 번호, 지울 개수(생략가능))
fruits.splice(1);//지울 개수를 지정하지 않으면 내가 적은 인덱스 번호부터 이후 인덱스 번호까지 모두 지워버림
console.log(fruits);

//원하는 개수만 지우고 싶다면
fruits.push('🍇', '🥝', '🍉', '🥥');
console.log(fruits);//(5) ['🍏', '🍇', '🥝', '🍉', '🥥']
fruits.splice(1, 1);//1번 인덱스부터 한 개만 지울 거야!
console.log(fruits);//(4) ['🍏', '🥝', '🍉', '🥥'] => 1번 인덱스에 있던 포도 지워짐

//지운 자리에 값을 추가할 수도 있음
fruits.splice(1, 1,'🍈','🍋');//1번 인덱스부터 한 개만 지우고 나서 그 자리에 '🍈','🍋'를 추가해줘 라는 뜻
fruits.splice(1, 0,'🍈','🍋');//지우지 않고 원하는 자리에 데이터 삽입도 가능
console.log(fruits);//(5) ['🍏', '🍈', '🍋', '🍉', '🥥']

//두 가지의 배열을 합쳐서 만들 수도 있음
const fruits2=['🍅','🍓'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);//(7) ['🍏', '🍈', '🍋', '🍉', '🥥', '🍅', '🍓']


//5.  Searching
  //특정 인덱스 찾기 => indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍋'));//레몬이 몇 번째 인덱스에 있는지 찾아달라는 뜻 => 2출력
console.log(fruits.indexOf('🥥'));//4출력
console.log(fruits.indexOf('🥝'));//없는 값을 출력하면 -1 출력

//includes
console.log(fruits.includes('🥥'));//배열에 코코넛이 있는지 없는지 확인 => true
console.log(fruits.includes('🥝'));//false

//lastIndexOf
console.clear();
fruits.push('🍏');
console.log(fruits);//(6) ['🍏', '🍈', '🍋', '🍉', '🥥', '🍏']
console.log(fruits.indexOf('🍏'));//0만 출력 => indexOf는 제일 첫번째로 해당하는 값을 만나면 그 값이 들어있는 인덱스만 출력하고 끝남
console.log(fruits.lastIndexOf('🍏'));//5만 출력 => lastIndexOf 맨 마지막에 들어 있는 값을 출력함


//실습
console.clear();
//// Q1. make a string out of an array => 배열을 문자열로
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());//내가 푼 거 apple,banana,orange
  const result=fruits.join('|');//답 join(원하는 구분 기호 넣어주기(생략가능))
  console.log(result);//apple|banana|orange
}

// Q2. make an array out of a string => 문자열을 배열로
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  //split: (구분자(String|RegExp) 또는 limit(리턴 받을 배열의 크기 지정 가능, 생략가능))
  const result=fruits.split(',');
  console.log(result);//(4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
  console.log(fruits.split());//구분자를 넣지 않으면 문자열 전체가 하나의 인덱스 안에 들어가게 됨 => ['🍎, 🥝, 🍌, 🍒']
  console.log(fruits.split(',',2));//배열의 크기를 지정하면 지정한 크기 만큼만 배열 생성 => (2) ['🍎', ' 🥝']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] => 정렬(역순)
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());//(5) [5, 4, 3, 2, 1]
  console.log(array);//(5) [5, 4, 3, 2, 1]
  //reverse()는 배열 자체를 변화시킴
}

// Q4. make new array without the first two elements => 0,1을 제외한 나머지 값으로 새로운 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  //3, 4, 5를 출력해야 함
  const result=array.slice(2, 5);//4번 인덱스를 가져오기 위해서 5를 적음
  //slice(시작하는 인덱스, 끝내는 인덱스(2를 쓰면 1까지로 인식함)): 배열의 특정한 부분을 리턴함
  console.log(result);//(3) [3, 4, 5]
  console.log(array);//(5) [1, 2, 3, 4, 5]

  // const result=array.splice(0,2);
  // console.log(array);//(3) [3, 4, 5]
  //splice는 배열 자체를 변화시킴, 여기서는 새로운 배열을 만드는 것이니 splice를 쓰면 안 됨
}


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  //find(콜백함수): boolean값으로 정의된 함수를 전달 받음, 전달 받은 함수의 값이 true일 때 첫번째로 찾아진 요소를 리턴, 찾지 못하면 undefined리턴
    //배열에 있는 모든 요소를 호출함, 호출된 요소들 중에 true를 만나면 멈춰서 true요소를 리턴
  const result=students.find((student)=>{
    // console.log(student, index);
    return student.score===90;
    //return값이 true일 때 그 값을 return해줌
  });
  console.log(result);//Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students => enrolled가 true인 학생들로만 배열 만들기
{
  //filter(): 콜백함수를 전달해서 콜백함수가 true인 값들만 모아서 새로운 배열을 전달해줌
  const result=students.filter((student)=>{
    return student.enrolled;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
  //학생들 점수로만 배열 만들기
{
  const result=students.map((student)=>student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
  //점수가 50점 미만인 학생 찾기
{
  console.clear();
  //some(): 배열의 요소 중에서 콜백함수의 리턴값이 true가 되는 요소가 있는지 없는지 확인
  const result=students.some((student)=>student.score<50);
  console.log(result);//true

  //every(): 모든 요소들이 조건을 충족해야지만 true가 리턴됨
  const result2=students.every((student)=>student.score<50);
  console.log(result2);//false

  //여기서는 some를 쓰는 것이 더 효과적이지만 every를 쓰고 싶다면?!
    //not 연산자 쓰기
  const result3=!students.every((student)=>student.score>=50);
  console.log(result3);//true
}

console.clear();
// Q9. compute students' average score
{
  //reduce(): 콜백함수는 배열에 들어있는 모든 요소들 마다 호출, 콜백함수에서 리턴되는 값은 함께 누적된 결과값을 리턴함
    //배열에 있는 모든 요소들의 값을 누적하는, 뭔가 함께 모아둘 때 씀
      //reduce(prev(이전 값), curr(지금 값)=>{로직}, initialValue(초기값->이전 값에 대한 초기값을 지정해주는 것))
        //우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 씀

      //reduceRight(): 배열의 제일 뒤에서부터 시작
  const result=students.reduce((prev, curr)=>{
    console.log('==========');//반복되어서 출력되기 때문에 구분선을 넣어줌
    console.log(prev);
    console.log(curr);
    return prev+curr.score;
    //curr: 배열 하나하나씩 순차적으로 전달
    //우리가 리턴한 curr이 그 다음에 호출이 될 때 prev로 연결되어 누적되어 저장됨
  }, 0);
  console.log(result);//369
  console.log(result/students.length);//73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
  //학생들의 모든 점수를 string로 변환
{
  const result=students.map(student=>student.score).join();
  console.log(result);//45,80,90,66,88
  //점수가 50점 이상인 학생들만 출력하고 싶다면?!
  const result2=students.map(student=>student.score).filter(score=>score>=50).join();
  console.log(result2);//80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
  //점수를 정렬해서 문자열로 변환
{
  //sort(): 콜백함수에 a(이전 값)와 b(현재 값)가 전달이 되는데 만약, 음수가 리턴이 되면 첫번째가 뒤에 값보다 작다고 간주가 되어서 정렬이 됨
  const result=students.map(student=>student.score).sort((a, b)=>a-b).join();
  console.log(result);

  //역순 정렬은?
  const result2=students.map(student=>student.score).sort((a, b)=>b-a).join();
  console.log(result2);
}