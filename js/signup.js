$(function() {
	//验证邮箱
	$("#email").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
	});
	$("#email").blur(function(){
		this.style.borderColor = "";
		var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
		if(this.value==""){
			var sibling = this.previousElementSibling || this.previousSibling;
			sibling.innerHTML="注册邮箱";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}else if(!re.test(this.value)){
			this.style.borderColor = '#ff0000';
			this.style.backgroundColor = '#ff0022';
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '#ffffff';
		}
	});


	//验证密码
	$("#password").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
	});
	$("#password").blur(function(){
		this.style.borderColor = "";
		var re = /\w{6,12}/;
		if(this.value==""){
			var sibling = this.previousElementSibling || this.previousSibling;
			sibling.innerHTML="密码";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}else if(!re.test(this.value)){
			this.style.borderColor = '#ff0000';
			this.style.backgroundColor = '#ff0022';
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

	//验证确认密码
	$("#confirmpass").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
	});
	
	$("#confirmpass").blur(function(){
		this.style.borderColor = "";
		var sibling = this.previousElementSibling || this.previousSibling;
		var cpv = this.parentNode.previousElementSibling.lastElementChild || this.parentNode.previousSibling.lastChild;
		if(this.value==""){
			sibling.innerHTML="确认密码";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}else if(cpv.value != this.value){
			this.style.borderColor = '#ff0000';
			this.style.backgroundColor = '#ff0022';
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

	//验证昵称
	$("#nickname").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
	});
	$("#nickname").blur(function(){
		this.style.borderColor = "";
		var sibling = this.previousElementSibling || this.previousSibling;
		if(this.value==""){
			this.style.borderColor = '#ff0000';
			this.style.backgroundColor = '#ff0022';
			sibling.innerHTML="用户名不能为空";
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

});

