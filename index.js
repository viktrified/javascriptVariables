// let name = "Viktrified";
// let age = "21";
// let userName = name.substr(0, 4) + age;

// console.log(userName);

let name = "Viktrified";
let age = 21;
let gender = "male";
let nationality = "Nigeria";

let sentence = `My name is ${name}, I'm ${age} years old and I'm a ${gender} from ${nationality}.`;

// console.log(sentence);

let ageToString = age.toString();

// console.log(typeof(ageToString));
// console.log(typeof (age));

const student = {
  name: "Viktrified",
  age: 40,
  gender: "female",
  nationality: "Nigeria",
};

// console.log(student.age, student.gender);

let allStudents = ["Victory", "Richard", "Peter", "Deborah"];

// console.log(allStudents[0]);

let arr = [
  {
    name: "Viktrified",
    age: 40,
    gender: "female",
    nationality: "Nigeria",
    outfit: {
      skirt: "black",
      shirt: "white",
      shoes: {
        balanciaga: 0,
        nike: 2,
        airforce1: [
          1,
          2,
          3,
          {
            name: "Wahala",
            class: "web2",
            gender: "non-binary",
          },
        ],
      },
    },
  },
  {
    name: "Mark",
    age: 47,
    gender: "male",
    nationality: "Ghana",
  },
];

const web2Students = [
  {
    name: "Williams",
    age: 47,
    gender: "male",
    nationality: "Ghana",
    score: 7,
  },
  {
    name: "Deborah",
    age: 47,
    gender: "male",
    nationality: "Ghana",
    score: 10,
  },
  {
    name: "Nambam",
    age: 47,
    gender: "male",
    nationality: "Ghana",
    score: 5,
  },
  {
    name: "Mark",
    age: 47,
    gender: "male",
    nationality: "Ghana",
    score: 0,
  },
  {
    name: "Zakka",
    age: 47,
    gender: "male",
    nationality: "Ghana",
    score: 0,
  },
];

let williams = web2Students[0].score + 20;
let deborah = web2Students[1].score + 20;
let nambam = web2Students[2].score + 20;
let mark = web2Students[3].score + 20;
let zakka = web2Students[4].score + 20;

const totalScore = williams + deborah + nambam + mark + zakka;

console.log(`${arr[0].name} ${arr[1].name}`);
console.log(`${arr[0].outfit.skirt}`);
console.log(`${arr[0].outfit.shoes.airforce1[3].gender}`);

console.log(totalScore);

let a = "unicode".charCodeAt(1);
// Print the integer value of 'A' (65)
console.log(a);
