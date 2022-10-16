//object shorthand assignment

let name="noona"
let age=17

let person={
    // name: name,
    // age: age
    //키와 변수 이름이 같다면?!
    name,
    age
    //이렇게 줄여서 쓸 수 있음
}

console.log(person)

//Destructuring
let person1={
    name1:"noona",
    age1:20
}

// let name1=person1.name1
// let age1=person1['age1']

//위에 코드를 줄이는 방법
let {name1, age1}=person1
//객체 안에서 가져오고 싶은 키 값 적으면 키 값의 이름을 가진 변수가 하나 만들어지고 그 변수 안에는
//해당하는 키 값의 값이 들어가게 됨 

console.log(name1, age1)

//배열에서도 적용 가능
let arr=[1,2,3,4]

//임의의 이름을 a,b로 주기
let [a,b]=arr

console.log(a,b)// 1 2 출력
// a와 b라는 변수가 선언이 되어 순서대로 첫번째에 있는 값이 a에 들어가고 두번째에 있는 값이 b에 들어가서 출력됨

//만약에 나머지 값도 가져오고 싶다면?!
let[c, d, ...rest]=arr
// ...rest : rest 파라미터 문법, 1과 2를 제외한 나머지 값을 rest라는 변수 안에 넣는다는 것

console.log(rest)//3,4 출력


//spread
let person2={
    name2:"noona", age2:12
}

//person2를 그대로 복사를 하고 싶다면?! : ... 을 사용하면 됨
//let person3={...person2,
    //복사 뿐만 아니라 내용을 추가할 수도 있음! => address 추가 함
         // let person3={...person2, address:"gwangju"}
    //값을 바꾸는 것도 가능
    let person3={...person2, name2:"junho"}

console.log(person3)//{name2: 'noona', age2: 12} , 추가 후 {name2: 'noona', age2: 12, address: 'gwangju'}
                    //값 바꾼 후 {name2: 'junho', age2: 12}
let person4=person2
console.log(person4)//{name2: 'noona', age2: 12}

//let person3={...person2}와 let person4=person2의 차이는 뭐지?!
//복사 방법이 다름
//뒤에 방법으로 하면 객체의 주소값만 복사하게 됨(즉, 객체는 하나이고 그 객체를 참조하는 변수가 두 개)
//첫번째 방법은 실제로 객체를 하나 더 생성하게 됨(즉, 객체가 두 개가 됨)
console.log(person2===person3)//false -> 서로 다른 객체이기 때문에
console.log(person2===person4)//true -> 하나의 객체를 가르키고 있기 때문


//배열에도 사용할 수 있음
let array=[1,2]
let arrayB=[...array,3]
console.log(arrayB)//(3) [1, 2, 3]

let plus=[...array, ...arrayB]
console.log(plus)//(5) [1, 2, 1, 2, 3] => array와 arrayB의 내용이 복사가 됨


//삼항 연산자
let people={name3:"noona",age3:17}

if(people){
    console.log(people.name3)
}else{
    console.log("there is no people")
}

console.log(people? people.name3:"there is no people")