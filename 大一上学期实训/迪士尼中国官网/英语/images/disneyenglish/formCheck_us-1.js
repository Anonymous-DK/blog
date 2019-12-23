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
			
			if($("#user_name").val() == "" || $("#user_name").val() == "*Child’s Name"){
				alert("Please fill in children's name");
				
				return false ;
			}
			if($("#user_mobile").val() == "" ||$("#user_mobile").val() == "*Mobile Number" ){
				alert("Please fill in Mobile Number");
				
				return false ;
			}
			/*if($("#user_email").val() == ""||$("#user_email").val() == "*Email Address"){
				alert("Please fill in the correct Email address");
				
				return false ;
			}*/
			if(!isMobile($("#user_mobile").val())){
				alert("Please fill in the mobile number");
					
					return false ;
				}
			
			/*if(!isEmail($("#user_email").val())){
				alert("Please fill in the correct Email address");
					
					return false ;
				}
			*/	
			if($("#user_age").val() == ""){
				alert("Please select children's age");
					
					return ;
				}
			
			if($("#mainCity").val() == "88000000"){
				if($("#city1").val() == ""){
					alert("Please select the province");
						
						return false;
					}
				
				if($("#city2").val() == ""){
					alert("Please select the city");
						
						return false;
					}
			}
			if($("#mainCity").val() == ""){
				alert("Please select the city");
					
					return false ;
				}
			
			
			
			if( $("#user_agree").hasClass("hover02") ){
				alert("Please accept the legal terms");
				
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
			if($(this).val() == "*Mobile Number"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*Mobile Number");
				return;
			}
		});
		
		$("#user_email").click(function(){
			if($(this).val() == "*Email Address"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*Email Address");
				return;
			}
		});
		
		$("#user_name").click(function(){
			
			if($(this).val() == "*Child’s Name"){
				$(this).val("");
				return;
			}
		}).blur(function() {
			if($(this).val() == ""){
				$(this).val("*Child’s Name");
				return;
			}
		});
	}
	
	return {
		init : init,
		check : check
	}
})();
