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
//* Version 1

dupliMails = users.reduce((user, {email}) => user.set(email, user.has(email)), new Map),
duplications = users.filter(({email}) => dupliMails.get(email));

console.log("Duplicated eMails:", duplications);



//* Version 2

const dupEmails = users.map((el, i) => {
  return users.find((element, index) => {
    if (i !== index && element.email === el.email) {
      return el;
    }
  });
})
.filter((x) => x);
console.log("Duplicated emails:", dupEmails);



//* Version 3

const dupliMails = [];
users.forEach((el, i) => {
  users.forEach((element, index) => {
    if (i === index) return null;
    if (element.email === el.email) {
      if (!dupliMails.includes(el)) dupliMails.push(el);
    }
  });
});
console.log("Duplicated e-mails", dupliMails);



//!  Youriy Dzedzina

function duplicateEmailUsers(array) {
  const arrayEmail = array
    .map((element) => element.email)
    .filter((element, i, emailsName) => emailsName.indexOf(element) !== i);
  const duplicates = array.filter((obj) => arrayEmail.includes(obj.email));
  console.log(duplicates);
}

duplicateEmailUsers(users);
