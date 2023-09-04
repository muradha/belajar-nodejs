import process from "node:process";

process.addListener("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
})

console.info(process.version);
console.table(process.argv);
// console.table(process.report);
// console.table(process.env);