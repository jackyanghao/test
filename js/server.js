var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});//发送http头部，http状态值：200，内容类型：text/plain
	response.end('Hello World\n');//发送响应数据“Hello world”
	var url=request.url;
	console.log(url);
	if(url.endsWith("/user/add"))
	{
		console.log("这个是add");
	}
	else if(url.endsWith("/user/update")){
		console.log("这个是update");
	}
	//var result=new Array();
	var result="";
	result=getParameter(url,"gender");
	/*for(var i=0;i<result.length;i++)
	{
		console.log(result[i]);
	}*/
	console.log(result);
}).listen(9000);
console.log("你好");

function getParameter(url, name) {
	if(!url.endsWith("/favicon.ico")) {
		var params = url.substring(url.indexOf("?") + 1);
		//console.log(params);
		var p = params.split("&");
		//console.log(p);
		var pvalue =new Array();
		var pname=new Array();
		var res=new Array();
		for(var i = 0; i < p.length; i++) {
			pname[i] = p[i].substring(0, p[i].indexOf("="));
			pvalue[i] = p[i].substring(p[i].indexOf("=") + 1);
			//console.log(pname[i] + "=" + pvalue[i]);
			//res.push(pname[i] + "=" + pvalue[i]);
			if(pname[i]==name)
			{
				res.push(pvalue[i]);
			}
		}
	}
	return res;
}
