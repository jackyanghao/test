/*
 * 访问独立的页面
 */
var http=require('http');
var fs=require('fs');
http.createServer(service).listen(9000);
console.log("服务器已启动");
function service(req,resp){
	console.log(__dirname);
	fs.readFile(__dirname+"/index1.html",function(err,data){
		resp.write(data);
		resp.end();
	})
}
