const http = require("http");

http.createServer(function (req, res) {
	res.write("On the way to being a fullstck engineer!");
	res.end();
}).listen(3000);

console.log("Server started on port 3000");
