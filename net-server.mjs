import net from "node:net";


const server = net.createServer((client) => {
    console.log("client connected");

    client.on("data", (data) => {
        console.log(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}`);
    })
});

server.listen(3000, "localhost");