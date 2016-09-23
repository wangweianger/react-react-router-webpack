/*-------------------------------------------后台配置------------------------------------------------*/ 
module.exports={
	//登陆页面 
	loginUrl:"http://127.0.0.1:4000/html/login.html",  

	//登陆成功后需要跳转到的页面                                                       
	homeUrl: "/index.html",    

	// 用户系统接口地址
	loginApi:"http://127.0.0.1:4000/",

	//根接口
	baseApi:'http://127.0.0.1:5000/oms-background/',

	//ajax 请求超时时间
	ajaxtimeout:8000,

	//发送验证码时间间隔
	msgTime:60,
	                            
 	//隐藏显示时间
 	containerShowTime:10,

 	//pagesize 分页数量
 	pageSize:20,

};
