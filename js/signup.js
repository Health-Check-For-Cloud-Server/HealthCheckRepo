$(function() {
	//验证邮箱
	$("#email").focus(function(){
		this.style.borderColor = "#18ba00";
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	$("#email").blur(function(){
		this.style.borderColor = "";
		var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
		if(this.value==""){
			var sibling = this.previousElementSibling || this.previousSibling;
			sibling.innerHTML="注册邮箱";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(!re.test(this.value)){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'inline-block';
			next.style.color = '#ff0022';
			this.style.borderColor = '#ff0022';
			this.style.backgroundColor = '#ff0022';
			
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
		sibling.innerHTML="";
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	$("#password").blur(function(){
		this.style.borderColor = "";
		var re = /\w{6,12}/;
		if(this.value==""){
			var sibling = this.previousElementSibling || this.previousSibling;
			sibling.innerHTML="密码";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(!re.test(this.value)){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'inline-block';
			next.style.color = '#ff0022';
			this.style.borderColor = '#ff0022';
			this.style.backgroundColor = '#ff0022';
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
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
		var next = this.nextElementSibling || this.nextSibling;
		next.style.display = 'none';
	});
	
	$("#confirmpass").blur(function(){
		this.style.borderColor = "";
		var sibling = this.previousElementSibling || this.previousSibling;
		var cpv = this.parentNode.previousElementSibling.lastElementChild.previousElementSibling || this.parentNode.previousSibling.lastChild.previousSibling;
		alert(cpv.value);
		if(this.value==""){
			sibling.innerHTML="确认密码";
			this.style.borderColor = '';
			this.style.backgroundColor = '';
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'none';
		}else if(cpv.value != this.value){
			var next = this.nextElementSibling || this.nextSibling;
			next.style.display = 'inline-block';
			next.style.color = '#ff0022';
			this.style.borderColor = '#ff0022';
			this.style.backgroundColor = '#ff0022';
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
		var sibling = this.previousElementSibling || this.previousSibling;
		sibling.innerHTML="";
	});
	$("#nickname").blur(function(){
		this.style.borderColor = "";
		var sibling = this.previousElementSibling || this.previousSibling;
		if(this.value==""){
			this.style.borderColor = '#ff0022';
			this.style.backgroundColor = '#ff0022';
			sibling.innerHTML="用户名不能为空";
		}else{
			this.style.borderColor = '';
			this.style.backgroundColor = '';
		}
	});

});

