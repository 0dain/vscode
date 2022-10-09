//JSON
//JS Object Notation

//1. Object to JSON
//stringify(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);//["apple","banana"]

const rabbit={
  name:'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // Symbol: Symbol('id'),
  jump: ()=>{
    console.log(`${name} can jump!`);
  }
}

json=JSON.stringify(rabbit);
console.log(json);//{"name":"tori","color":"white","size":null,"birthDate":"2022-10-09T15:30:26.170Z"}
//symbol, 함수는 json에 포함되지 않음
  //함수는 객체에 있는 데이터가 아니기 때문에 제외
  //JS에만 있는 특별한 데이터도 json에 포함되지 않음

//json으로 변환되는 것을 조금 더 통제하고 싶다면?!
  //방법 1
json=JSON.stringify(rabbit, ['name', 'color', 'size']);//배열의 property이름만 적으면 됨, 내가 원하는 property만 골라서 정의하면 해당 하는 property만 json으로 변환됨
                                                  //property: 객체의 상태를 나타내는 값(data)
console.log(json);

  //방법 2
json=JSON.stringify(rabbit, (key, value)=>{
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key==='name'? 'ellie':value;
});
console.log(json);


//2. JSON to Object
//parse(json)
console.clear();
json=JSON.stringify(rabbit);//객체를 JSON으로 변환
const obj=JSON.parse(json);//JSON으로 변환한 json을 객체로 변환
console.log(obj);//변환된 객체 출력
rabbit.jump();
// obj.jump();//error! => 객체에서 JSON으로 변환될 때 함수는 포함되지 않았음, 함수가 포함되지 않은 JSON을 객체로 변환한 후 그 객체에게 함수를 사용하라고 하니까
                      //jump라는 함수 없는데?! 라고 하면서 오류가 난 것!
console.log(rabbit.birthDate.getDate());//10
console.log(obj.birthDate);//2022-10-09T15:47:41.778Z => JSON으로 변환할 때 날짜 데이터가 string으로 만들어졌고, 다시 json을 객체로 변환했을 때에도 birthDate는 string타입으로 객체로 넘어갔음
// console.log(obj.birthDate.getDate());//error! => birthDate는 string임

//그래서 다시 날짜 데이터로 변환하고 싶을 때는 json에서 객체로 변환할 때 콜백 함수를 사용하면 됨!
const obj2=JSON.parse(json, (key, value)=>{
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key==='birthDate'? new Date(value):value;
});
console.log(obj2.birthDate.getDate());//10
