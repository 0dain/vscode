'use strict'
//Object-oriendted programming
//class: template
//object: instance of a class
//JS classes
  //introduced in ES6
  //syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person{
  //constructor(생성자)
  constructor(name, age){
    //fields
    this.name=name;
    this.age=age;
  }

  //메소드(methods)
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

//객체 생성
const ellie=new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


//2. Getter&Setter
class User{
  constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
  get age(){
    return this._age;
  }

  set age(value){
    // if(value<0){
    //   throw Error('age can not be negative');
    // }
    this._age=value<0? 0:value;
  }
}

const user1=new User('Steve','Job',-1);
console.log(user1.age);


//3. Fields 접근 제한자(public, private(#))
class Experiment{
  publicField=2;
  #privateField=0;
}
const experiment=new Experiment();
console.log(experiment.publicField);//2
console.log(experiment.privateField);//undefined


//4. Static properties and methods
class Article{
  static publisher='Dream Coding';
  constructor(articleNumber){
    this.articleNumber=articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1=new Article(1);
const article2=new Article(2);
console.log(article1.publisher);//undefined
console.log(Article.publisher);//Dream Coding => static은 객체마다 할당되어있지 않고 클래스 자체에 저장이 되어 있음
//static함수를 호출할 땐 클래스 이름을 이용해야 함
Article.printPublisher();//Dream Coding
  //객체에 상관없이(들어오는 데이터에 상관없이) 공통적으로 클래스에서 쓸 수 있는 거라면 static과 static메서드를 이용해서 작성하는 것이 더 효율적


//5. 상속 & 다형성
//a way for one class to extend another class
class Shape{
  constructor(width, heigth, color){
    this.width=width;
    this.heigth=heigth;
    this.color=color;
  }

  draw(){
    console.log(`drawing ${this.color} color!`);
  }

  getArea(){
    return this.width*this.heigth;
  }
}

//상속 키워드: extends
class Rectangle extends Shape{}
class Triangle extends Shape{
  //다형성 - 오버라이딩

  draw(){
    super.draw();
    console.log('🔺');
  }

  getArea(){
    return (this.width*this.heigth)/2;
  }

  toString(){
    return `triangle의 color는: ${this.color}`
  }
}

const rectangle=new Rectangle(20,20,'blue');
rectangle.draw();//drawing blue color!
console.log(rectangle.getArea());//400
const triangle=new Triangle(20,20,'red');
triangle.draw();//drawing red color! / 오버라이딩만 한 후 => 🔺 / 오버라이딩 + super.draw() => drawing red color! 🔺
console.log(triangle.getArea());//200


//6. Class checking: instanceOf
//왼쪽에 있는 객체가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 확인(해당 클래스로 만들어진 객체가 맞는지 확인하는 것)
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true
//Object에 정의된 toString()도 오버라이딩해서 쓸 수 있음
console.log(triangle.toString());//오버라이딩 전 => [object Object] 오버라이딩 후 => triangle의 color는: red

//추천 사이트: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference