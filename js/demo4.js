var http=require("http");//引入require模块，并使用require模块来实例化http
var url=require("url");
var fs=require("fs");
var formidable = require("formidable");
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
		var form = new formidable.IncomingForm();
		form.uploadDir = "../tmp";  //将临时文件夹设置到本项目中的tmp文件夹
		form.parse(req, function(err, fields, files) {
			console.log(fields.account+","+fields.password);
			console.log(files);
			console.log(files.avatar.path);
			fs.rename(files.avatar.path,"../test.jpg");　　
		});
	} else {
		fs.readFile(__dirname + pathname, function(err, data) {
			//console.log(err);
			//console.log(data);
			resp.write(data);
			resp.end();
		});
	}
}
