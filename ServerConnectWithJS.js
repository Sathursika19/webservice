const {createServer} = require('node:http');

const localhost = '127.0.0.1';
const port = 3000;

const server = createServer((reg,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain')
	res.end("Hello Node JS");
});

server.listen(port,localhost,() => {
	console.log(`Running on:${localhost}:${port}`)
});




/* Output

C:\Users\2021ict106\Desktop\20.03.2025>node ServerConnectWithJS.js
Running on:127.0.0.1:3000 

*/