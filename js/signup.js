$(function() {
	//验证邮箱
	$("#email").focus(function(){
		this.style.borderColor = "#18ba00";
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	$("#email").blur(function(){
		this.style.borderColor = "";
		var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
		if(this.value==""){
			var sibling = this.previousElementSibling || this.previousSibling;
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(!re.test(this.value)){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'block';
			next.style.color = '#ff0022';
			this.style.border = '1px solid #ff0022';
			//this.style.backgroundColor = '#ff0022';
			
		}else{
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
			this.style.borderColor = '';
			this.style.backgroundColor = '#ffffff';
		}
	});


	//验证密码
	$("#password").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	$("#password").blur(function(){
		this.style.borderColor = "";
		var re = /\w{6,12}/;
		if(this.value==""){
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(!re.test(this.value)){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'block';
			next.style.color = '#ff0022';
			this.style.border = '1px solid #ff0022';
			//this.style.backgroundColor = '#ff0022';
		}else{
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

	//验证确认密码
	$("#confirmpass").focus(function(){
		this.style.borderColor = "#18ba00";
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	
	$("#confirmpass").blur(function(){
		this.style.borderColor = "";
		var cpv = this.parentNode.previousElementSibling.lastElementChild.previousElementSibling || this.parentNode.previousSibling.lastChild.previousSibling;
		//alert(cpv.value);
		if(this.value==""){
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(cpv.value != this.value){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'block';
			next.style.color = '#ff0022';
			this.style.border = '1px solid #ff0022';
			//this.style.backgroundColor = '#ff0022';
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}
	});

	//验证昵称
	$("#nickname").focus(function(){
		this.style.borderColor = "#18ba00";
	});
	$("#nickname").blur(function(){
		this.style.borderColor = "";
		var sibling = this.previousElementSibling || this.previousSibling;
		if(this.value==""){
			this.style.border = '1px solid #ff0022';
			//this.style.backgroundColor = '#ff0022';
			sibling.innerHTML="用户名不能为空";
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

	$("#reg_submit").click(function () {
		try_register();
	});

});


function try_register(){
	//check if name is existed
	var name = $("#nickname").val();
	var password = $("#password").val();
	var email = $("#email").val();
	$.ajax({
		url: "/server/user/check_user_name.php",
		data: "name="+name,
		dataType: "text",
		type:"post",
		error: register_fail,
		success: function(info){
			if (info == "0"){
				alert("用户名已存在！");
			}else {
				//if not, add this user to database
				register(name,password,email);
				alert("注册成功！")
				location.href = "/login.html";
			}
		}
	});
}
function register_fail(){
	alert("提交信息失败");
}

function register(name,password,email){
	$.ajax({
		url: "/server/user/register.php",
		data: "name="+name+"&password="+password+"&email="+email,
		dataType: "text",
		type:"post"
		//error: register_fail,
		//success: function(info){
		//	alert(info)
		//	if (info == "1")
		//		alert("注册成功");
		//}
	});
}
