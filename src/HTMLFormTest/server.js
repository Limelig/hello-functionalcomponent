const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	if (request.url === '/from') {
		fs.readFile('from.html', (error, data) => {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	}

	if (request.url === '/to') {
		request.on('data', (data) => {
			response.writeHead(200, {'Content-Type': 'text-html'});
			response.end('<h1>' + data + '</h1>');
		});
	}
}).listen(3000, function () {
	console.log('Server Running...');
});
