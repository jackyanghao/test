var http=require("http");
var url=require("url");
var fs=require("fs");
var ejs=require("ejs");
var formidable = require("formidable");
var categoryDAO=require("./categorydao");
var querystring=require("querystring");
http.createServer(service).listen(9000);
function service(req,resp){
	categoryDAO.display(function(result){
		var str=fs.readFileSync(__dirname+'/ejsModel.ejs','utf8');//同步版的 fs.readFile() 
		var ret=ejs.render(str,{//第一个参数是模板的变量，第二个参数result成了变量
			categries:result
		});
		console.log(ret);
		resp.write(ret);
		resp.end();
	});
}
