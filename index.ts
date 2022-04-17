function sell(number1: number, number2: number): number{

    return number1 + number2;
};

const hello = sell(232,2342);

console.log(hello);

const arr: number[] = [232,32423,234234];
const arr1: string[] = ["2342", '2342', "2342"];

type mytype = number | string | boolean;

const id: mytype = 232;


//interface

// const person : {
//     name: string;
//     age: number;
//     hobby: string;
// } = {
//     name: "nasir",
//     age: 21,
//     hobby: "programming",
// };

interface IPerson  {
   
        name: string;
        age: number;
        hobby?: string;
    
}

const person: IPerson = {
    name: "Nasir",
    age: 23,
    hobby: "pergramming",
}

const person1: IPerson ={
    name: "Reza Vhai",
    age: 120,
    hobby: "Programming"
}
const person3: IPerson ={
    name: "Rayhan",
    age: 234,
}

// Enams - special data type

const PI = 3.1416;

const admin = "#eddddd";
const color2 = "#fsdfsd";

enum Colors {
  color1, 
  color2,
  color3,
}

console.log(Colors.color1);


//generic - function multiple type er hote pare tokhon use kori- age thak function er kono kisu na bolle

function _concat<T  extends string | number>(a: T, b: T): T{
    return a+b ;
}

_concat<number>(1,2);
_concat<string>("nasir", "uddin");