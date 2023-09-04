const buffer = Buffer.from("Rizki adha", "utf-8");

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const buffer2 = Buffer.from("Uml6a2kgYWRoYQ==", "base64");

console.log(buffer2.toString("utf-8"));