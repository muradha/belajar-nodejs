import https from "node:https";

const endpoint = "https://eo31fzn7yloo3b5.m.pipedream.net";
const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, function (response) {
    response.addListener("data", function (data) {
        console.log(`Receive : ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "rizki",
    lastName: "adha"
})

request.write(body);
request.end();