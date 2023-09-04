function samplePromise() {
    return Promise.resolve("rizki");
}

async function run() {
    const name = await samplePromise();
    console.info(name);   
}

run();