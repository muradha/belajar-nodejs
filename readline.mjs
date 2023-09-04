import readline from "node:readline/promises"
import process from "node:process"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await input.question("Siapakah nama anda? ");

console.info(`Halo ${answer}`);

input.close();