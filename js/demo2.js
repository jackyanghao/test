/*
 * 根据用户请求访问独立的静态页面
 */
var http= require("http");
var fs= require("fs");
var url=require("url");
http.createServer(service).listen(9000);
console.log("服务器已启动");
function service(req,resp){
	var urlObject=url.parse(req.url);
	var pathname=urlObject.pathname;
	console.log(pathname);
	if(pathname=="/favicon.ico"){
		return;
	}
	else if(pathname=="/index1.html"||pathname=="/")
	{
		fs.readFile(__dirname + "/index1.html", function(err, data) {
			//console.log(err);
			//console.log(data);
			resp.write(data);
			resp.end();
		});
	}
	else{
		fs.readFile(__dirname + pathname, function(err, data) {
			//console.log(err);
			//console.log(data);
			resp.write(data);
			resp.end();
		});
	}
	//console.log(__dirname);
}
