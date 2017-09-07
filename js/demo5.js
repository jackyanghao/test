var http=require("http");
var url=require("url");
var fs=require("fs");
var formidable = require("formidable");
var categoryDAO=require("./categorydao");
var querystring=require("querystring");
http.createServer(service).listen(9000);
function service(req,resp){
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	if(pathname=="/favicon.ico")
	{
		return ;
	}
	else if(pathname=="/addDate")
	{
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files) {
			console.log(fields.title+","+fields.content+","+fields.posttime+","+fields.cateid);
			categoryDAO.add(fields.title,fields.content,fields.posttime,fields.cateid);
		});
	}
	else {
		console.log(__dirname)
		fs.readFile(__dirname + pathname, function(err, data) {
			//console.log(err);
			//console.log(data);
			resp.write(data);
			resp.end();
		});
	}
	/*else{
		//categoryDAO.add();
		//categoryDAO.del();
		categoryDAO.display();
	}*/
}
