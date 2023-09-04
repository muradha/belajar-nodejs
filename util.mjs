import util from "node:util";

console.log(util.format("Hello %s", "rizki"));

const person = {firstName: "rizki", lastName: "adha"};

console.log(util.format("Person: %j", person))