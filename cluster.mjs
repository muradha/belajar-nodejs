import cluster from "cluster";
import os from "node:os";
import process from "node:process";
import http from "node:http";

if(cluster.isPrimary) {
    // jalankan worker
    console.log(`primary : ${process.pid}`);
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.info(`worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if (cluster.isWorker) {
    console.log(`worker : ${process.pid}`);
    const server = http.createServer((request,  response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    })
    server.listen(3000);
}