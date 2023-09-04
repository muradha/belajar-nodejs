import timers from "timers/promises";

// await timers.setTimeout(5000);

// console.log(new Date());

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.log(`Start time at ${startTime}`);
}