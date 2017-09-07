var mysql =require("mysql");
/*
 * 创建数据库链接对象
 */
var connection=mysql.createConnection({
	host:'localhost',//主机地址
	user:'root',//用户名
	password:"",//密码
	database:'news'
});
connection.connect();//链接数据库
var categroyDAO={
	add:function(title,content,posttime,cateid){
		var sql="insert into news(title,content,posttime,cateid) values(?,?,?,?)";
		var addSqlParams=[title,content,posttime,cateid];
		connection.query(sql,addSqlParams,function(err,result){
			console.log(err);
			console.log(result);
		});
	},
	del:function(id){
		var delsql="DELETE FROM news where id=9";
		connection.query(delsql,function(err,result){
			console.log(err);
			console.log(result);
		});
	},
	display:function(c){
		connection.query("select * from categoey",function(err,result){
			console.log(err);
			console.log(result);
			c(result);
		});
	}
};
module.exports=categroyDAO;
/*connection.end();*/
