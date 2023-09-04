import http from "node:http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    if (request.method == 'POST') {
        request.addListener("data", function (data) {
            response.setHeader('Content-Type', 'application/json');
            response.write(data);
            response.end();
        })
    } else {
        if (request.url == '/rizki') {
            response.write("Hello Rizki");
        } else {
            response.write("Hello HTTP Server");        
        }
        response.end();
    }
   
})

server.listen(3000);