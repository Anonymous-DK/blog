var _checkform = (function(){
	var _event ;
	function isPhone (s){
		var $val=s;
		var code;
		for (var i = 0; $val && i < $val.length; i++) {
			 //charAt()获取指定位置字符串,charCodeAt()返回该字符串的编码
				//0的ASCII是48,9的ASCII是57
			 var code = $val.charAt(i).charCodeAt(0);
			 if ((code < 48 || code > 57)&& code != 45) {
				 if(_event){
					 _event.preventDefault();
				 }
			}else {
				return true
			 }
		 }
	}
	
	function isMobile(s){
		var str=s;
		var reg=/(^1[3|4|5|6|7|8|9][0-9]{9}$)/; ;
		return reg.test(str);
	}
	
	function isEmail(s){
		var str=s;
		var reg=/^([a-zA-Z0-9_\.-]+)@(([a-zA-Z0-9_-]+)\.)+[a-zA-Z]{2,3}$/;
		//alert("email "+reg.test(str));
		return reg.test(str);
	}
	
	
	function check(e){
			var user_agree = $("#user_agree").is(':checked');
			var user_opts = $("#user_opts").is(':checked');
			
			if($("#user_age").val() == ""){
				alert("请选择孩子年龄");
					
					return ;
				}
			
			if($("#mainCity").val() == "88000000"){
				if($("#city1").val() == ""){
					alert("请选择所在省份");
						
						return false;
					}
				
				if($("#city2").val() == ""){
					alert("请选择所在城市");
						
						return false;
					}
			}
			if($("#mainCity").val() == ""){
				alert("请选择所在城市");
					
					return false ;
				}
			
			if($("#user_name").val() == "" || $("#user_name").val() == "*孩子姓名"){
				alert("请填写孩子姓名");
				
				return false ;
			}
			if($("#user_mobile").val() == "" ||$("#user_mobile").val() == "*手机号码" ){
				alert("请填写手机号码");
				
				return false ;
			}
			/*if($("#user_email").val() == ""||$("#user_email").val() == "*邮箱地址"){
				alert("请填写格式正确的邮箱地址");
				
				return false ;
			}*/
			if(!isMobile($("#user_mobile").val())){
				alert("请填写正确的手机号码");
					
					return false ;
				}
			/*
			if(!isEmail($("#user_email").val())){
				alert("请填写格式正确的邮箱地址");
					
					return false ;
				}
			*/	
			/*
			if( $("#user_agree").hasClass("hover02") ){
				alert("请接受法律条款");
				
				return false;
			}*/
			if(user_agree == false){
				alert("请接受法律条款");
				
				return false;
			}
		
		//可以提交表单
		submitFunc();
		return true;
	}
	
	
	function notSubmitFunc(){
		//$(".btn_submit").css({"background-position":"top center","cursor":"default"})
	}
	
	function submitFunc(){
		$(".btn_submit").css({"background-position":"30% center","cursor":"pointer"});
		
	}
	
	function submitSuccess(){
		$("#registerSuccess").show()
		$("#register").hide();
	}
	
	
	function init(){
		$("#user_mobile").click(function(){
			if($(this).val() == "*手机号码"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*手机号码");
				return;
			}
		});
		
		$("#user_email").click(function(){
			if($(this).val() == "*邮箱地址"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*邮箱地址");
				return;
			}
		});
		
		$("#user_name").click(function(){
			
			if($(this).val() == "*孩子姓名"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*孩子姓名");
				return;
			}
		});
	}
	
	return {
		init : init,
		check : check
	}
})();
