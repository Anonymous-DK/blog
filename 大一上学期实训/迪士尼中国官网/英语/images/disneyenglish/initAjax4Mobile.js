var __pt=0;

function InitAjax()
{
　var ajax=false; 
　try { 
　　ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
　} catch (e) { 
　　try { 
　　　ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
　　} catch (E) { 
　　　ajax = false; 
　　} 
　}
　if (!ajax && typeof XMLHttpRequest!='undefined') { 
　　ajax = new XMLHttpRequest(); 
　} 
　return ajax;
}



function getparastr_source(strname,key) {
    var hrefstr,pos,parastr,para,tempstr;
    hrefstr = window.location.href;
    pos = hrefstr.indexOf("?")
    parastr = hrefstr.substring(pos+1);
    para = parastr.split("&");
    tempstr="";
    for(i=0;i<para.length;i++)    {
     tempstr = para[i]; 
     pos = tempstr.indexOf("=");  
     if(tempstr.substring(0,pos) == strname) {  

		if (tempstr.substring(pos+1) != ""){
			 var url = "url_setcookie_ajax.php.htm"/*tpa=http://www.disneyenglish.com/leadform/url_setcookie_ajax.php*/;
			 var postStr  = key + "=" + tempstr.substring(pos+1);
			 var ajax2 = InitAjax();
			 ajax2.open("POST", url, true); 
			 ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
			 ajax2.send(postStr);
			 ajax2.onreadystatechange = function() { } 
			 return tempstr.substring(pos+1);
		}
		else{
		}
	 }
	}
return null;
}


var programstr = getparastr_source('source','source'); 
var svcode_str = getparastr_source('SV_Code','svcode'); 

$(document).ready(function(){
  	function InitAjax()
				{
				　var ajax=false; 
				　try { 
				　　ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
				　} catch (e) { 
				　　try { 
				　　　ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
				　　} catch (E) { 
				　　　ajax = false; 
				　　} 
				　}
				　if (!ajax && typeof XMLHttpRequest!='undefined') { 
				　　ajax = new XMLHttpRequest(); 
				　} 
				　return ajax;
				}
				
				
				function getQueryVariable(variable,key) {
					var query = window.location.search.substring(1);
					var vars = query.split("&");
					for(var i = 0; i < vars.length; i++) {
						var pair = vars[i].split("=");
						if(pair[0] == variable) {
							
							var url = "url_setcookie_ajax.php.htm"/*tpa=http://www.disneyenglish.com/leadform/url_setcookie_ajax.php*/;
							var postStr  = key + "=" + pair[1] ;
							var ajax2 = InitAjax();
							ajax2.open("POST", url, true); 
							ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
							ajax2.send(postStr);
							ajax2.onreadystatechange = function() { 
							}		
							
							
							return pair[1];
						}
					}
					
				}
				
				

				function completeLogin(response_text, city,fntype,form) {
					var error ='';
					//alert("response_text:"+response_text+"   city:"+city+"   fntype:"+fntype+"    form:"+form);
					if (response_text){
						
						if (success=="1") {
							
						}else{
							
						}
					} else {
						
					}
				}
				var isSending = false;
				$("#sign_submit").click(function(){
					//alert("ok1");;
					if( isSending || !_checkform.check() ) return;
					//alert("ok2"+isSending);
					//alert("ok3"+_checkform.check());
					//$("#sign_submit").hide();
					//$("#submiting").show();
					$(this).addClass('form-btn-gray');
					$(this).html('提交中...');
					var data = "";
				
					var user_optin = $("#user_opts").hasClass("hover02")?0:1;
					
					//document.Form1.s.disabled=true;
					var user_name = document.getElementById("user_name").value;
					
					var user_birth_year = "";
					var user_birth_month = "";
					var user_birth_day = "";
					var user_age = 0;
					
					var user_mobile = document.getElementById("user_mobile").value;
					var user_email = document.getElementById("user_email").value;
					var user_msn_qq = "";
					var user_province = '',user_city="";
					
					//var description = document.getElementById("user_birth_year").value;
					var description = "";
					
					if($("#mainCity").val() == "88000000"){
						
						//就选择下面的省市
						
						user_city =  $("#city2").find("option:selected").text();
						user_province = $("#city1").find("option:selected").text();
						
					}else{
						
						//user_province = "";
						user_city =  $("#mainCity").find("option:selected").text();
						if( user_city == "南京" || user_city == "苏州" ){
							user_province = "江苏";
						}
						else if( user_city == "宁波" || user_city == "杭州" ){
							user_province = "浙江";
						}
						else if( user_city == "武汉" ){
							user_province = "湖北";
						}
						else if( user_city == "广州" || user_city == "深圳" ){
							user_province = "广东";
						}
						else if( user_city == "成都" ){
							user_province = "四川";
						}
						else if( user_city == "宁波" ){
							user_province = "浙江";
						}
						else{
							user_province = user_city;
						}
						
					}
					
					
					
					var user_age = $("#user_age").find("option:selected").text();
					
					var user_district = '';
					var user_xiang = '';
					
					var data ="user_age="+user_age+"&user_optin="+user_optin+
					"&user_mobile="+user_mobile+"&user_email="+user_email+"&user_province="+user_province+"&user_city="+user_city+"&user_district="+user_district+"&user_name="+user_name+"&user_xiang="+user_xiang+"&description="+description;
					
					var user_yuanyi ='true';
					data=data+"&user_yuanyi="+user_yuanyi;
					data = data + "&source="+programstr+"&SV_Code="+svcode_str;
					
					$("#sign_submit img").attr("src","dsn-18_click.png"/*tpa=http://www.disneyenglish.com/promotionslider/image/dsn-18_click.png*/);
					jQuery.support.cors = true;
					$.ajax({
						type: "POST",
						url:  "reg_ajax_cn_promotionslider.php.htm"/*tpa=http://www.disneyenglish.com/leadform/reg_ajax_cn_promotionslider.php*/,
						crossDomain: true,
						dataType: "xml", 
						data: data,
						timeout:60000
					}).done(function(data){
						//alert(data);
						isSending = false;
						//alert("success ： " + $(data).find('success').text());
						var success = $(data).find('success').text();
						if(success == 1){
							_gaq.push(['_trackEvent', 'leadform', 'submit', '提交失败']);
							var error = $(data).find('error').text();
							location.href = 'message-error=1.htm'/*tpa=http://www.disneyenglish.com/index/message?error=1*/;
						}else{
							//_taq.push({convert_id:"83364190113", event_type:"form"})
							_gaq.push(['_trackEvent', 'leadform', 'submit', '提交成功']);
							window._agl && window._agl.push(['track', ['success', {t: 3}]]);
							var province = $(data).find('province').text();
							var city = $(data).find('city').text();
							//var sh = $(data).find('sh').text();
                            //alert(province+city);
							(function()
							{   
								function deleteCookie(cookiename)
								{
									var d = new Date();
									d.setDate(d.getDate() - 10000);
									document.cookie = cookiename + "=;expire="+d.toGMTString();
									//alert(cookiename);
								}
								deleteCookie("user_age");
								deleteCookie("mainCity");
								deleteCookie("user_name");
								deleteCookie("user_mobile");
								deleteCookie("user_email");
								//deleteCookie("user_birth_year");
								//deleteCookie("user_birth_month");
								deleteCookie("city1");
								deleteCookie("city2");
								//deleteCookie("city3");
								//deleteCookie("SIGNUP_INFO");
							})();
							
							//location.href = 'message-province=.htm'/*tpa=http://www.disneyenglish.com/index/message?province=*/+user_province+'&city='+user_city;
							if($("#mainCity").val() == "88000000"){
								//就选择下面的省市
								location.href = 'http://www.disneyenglish.com/m/finish.htm?province='+$("#city1").val()+'&city='+$("#city2").val()+'&pt='+__pt;
							}else{
								location.href = 'http://www.disneyenglish.com/m/finish.htm?province='+$("#city1").val()+'&city='+$("#mainCity").val()+'&pt='+__pt;
							}
							

						}
						
						//$(".btn_submit").css({"background-position":"center center","cursor":"pointer"});
						//completeLogin(msg, city, fntype,form);
					});
					isSending = true;
					$(".btn_submit").css({"background-position":"bottom center","cursor":"pointer"});
				});

			//var source = getQueryVariable("source","source");
			//alert(source);
			
			var coo = (function(){
				var o = {};
				var cookie = document.cookie.split("; ");
				for( var i=0;i<cookie.length;i++ ){
					var s = cookie[i].split("=");
					o[ s[0] ] = s[1];
				}
				return o;
			})();
			
			
			if( coo.user_age ){
				$("#user_age").val(coo.user_age);
			}
			if( coo.user_name ){
				$("#user_name").val(coo.user_name);
			}
			if( coo.user_mobile ){
				$("#user_mobile").val(coo.user_mobile);
			}
			if( coo.user_email ){
				$("#user_email").val(coo.user_email);
			}
			
			if( coo.city1 ){
				$("#city1").val( coo.city1 );
				city_1( document.getElementById('city1').value );
			}
			if( coo.city2 ){
				$("#city2").val( coo.city2 );
				city_2( document.getElementById('city2').value );
			}
			if( coo.mainCity ){
				$("#mainCity").val( coo.mainCity );
				
			}
			
			$("#user_age").change(function(){
				document.cookie = "user_age="+$(this).val();
			});
			$("#user_name").change(function(){
				document.cookie = "user_name="+$(this).val();
			});
			$("#user_mobile").change(function(){
				document.cookie = "user_mobile="+$(this).val();
				
			});
			$("#user_email").change(function(){
				 document.cookie = "user_email="+$(this).val();
			 });
			
			
			$("#city1").change(function(){
				document.cookie = "city1="+$(this).val();
			});
			
			$("#city2").change(function(){
				document.cookie = "city2="+$(this).val();
			});
			
			$("#mainCity").change(function(){
				document.cookie = "mainCity="+$(this).val();
			});
			_checkform.init();
			//_checkform.check();
			
});
