const users = [
  {
    firstName: "Sergii",
    lastName: "Khromchenko",
    email: "sergii@gmail.com",
    age: 31,
  },
  {
    firstName: "Alex",
    lastName: "Plishka",
    email: "alex@yahoo.com",
    age: 42,
  },
  {
    firstName: "Sergii",
    lastName: "Kewl",
    email: "sergii@verizon.com",
    age: 17,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    email: "jtravolta@gmail.com",
    //email: "mike@gmail.com",
    age: 55,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 18,
  },
  {
    firstName: "Bekka",
    lastName: "GIlbert",
    email: "",
    age: 18,
  },
];



//!  Andrew

const usingGmail = (arr) => console.log(arr.filter((el) => el.email.includes('@gmail.com')));

usingGmail(users);


//!  Youriy Dzedzina

function gmailUsers(array) {
  console.log(array.filter((element) => element.email.includes("@gmail.com")));
}

gmailUsers(users);
