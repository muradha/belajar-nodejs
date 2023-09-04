function samplePromise() {
    return Promise.resolve("rizki");
}

const name = await samplePromise();
console.info(name);