// problem statement one

function filterEvenNumber (num : Array<number>) : Array<number>{

  // logic for the taking even number only
    return num.filter(num => num % 2 === 0);
}

const output_1 = filterEvenNumber([1, 2, 3, 4, 5, 6]);




// problem statement two

function reverseString (input : string) : string {

    // logic for reversing the string
  return input.split('').reverse().join('');
}

const message : string = "typescript";

const output_2 : string = reverseString(message);





// problem statement three

type StringOrNumber = "string" | "number";

function checkType (input : string | number) : StringOrNumber {

  // Defining the logic
    if(typeof input === "string"){
      return "string";
    } else{
      return "number";
    }
}

// Sample Input 1:
const sampleInput1 = checkType("Hello");

// Sample Input 2:
const sampleInput2 = checkType(42);





// problem statement four


function getProperty <X, Y extends keyof X> (obj: X, key : Y){
  return obj[key];
}

const user = {id : 1, name : "John Doe", age: 21};

const output_4 = getProperty(user, "name");





// problem statement five

interface Book {
    title : string,
    author : string,
    publishedYear : number,
}

function toggleReadStatus <X extends object>(input : Book) : object{

    // logic for new object
    return {...input, ["isRead"]: true}
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const output_5 = toggleReadStatus(myBook);





// problem statement six

class Person {

    name : string;
    age : number;

    constructor(name : string, age : number){
      this.name = name;
      this.age = age;
    }
}

class Student extends Person{
    grade : string;

    constructor(name : string, age : number, grade : string){
      super(name, age);
      this.grade = grade;
    }

    getDetails(): string{
        return `Name : ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
const output_6 = student.getDetails();





// problem statement seven

function getIntersection (firstArray : number[], secondArray : number[]) : number[]{
  const commonValue : number[] = [];

  for(const i of firstArray){
    for(const j of secondArray){
      if ( i === j ){
        commonValue.push(i);
        continue;
      }
    }
  }
  return commonValue;
}

const output_7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
