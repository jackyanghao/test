var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");
http.createServer(service).listen(9000);
function service(req,resp){
	var urlObject=url.parse(req.url);
	var pathname=urlObject.pathname;
	console.log(pathname);
	if(pathname=="/favicon.ico")
	{
		return;
	}
	if(pathname == "/reg") {
		console.log(url.parse(req.url).query);
		var params = querystring.parse(url.parse(req.url).query);
		console.log(params);
		console.log(params.account + "," + params.password);
	} else {
		fs.readFile(__dirname + pathname, function(err, data) {
			//console.log(err);
			//console.log(data);
			resp.write(data);
			resp.end();
		});
	}
}
