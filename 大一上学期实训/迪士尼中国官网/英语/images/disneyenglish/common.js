function openwin(url,name,width,height){
  var top = (window.screen.availHeight-30-height)/2;
  var left = (window.screen.availWidth-10-width)/2;
  window.open(url,name,'height='+height+',width='+width+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}

function shareToWeibo( title ){
	var title = title ? title : "Disney English", pic = '', l = encodeURIComponent(location.href);
	title = encodeURIComponent(title);
	pic = encodeURIComponent(pic);
	openwin('http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+l+'&pic='+pic,'weibo',900,600);
}

//menu
$(document).ready(function(){
 	
	$(".logo").css("cursor","pointer");
	$(".logo").click(function(){
		window.location.href = "index.htm"/*tpa=http://www.disneyenglish.com/*/;
	});
	
	
 $('li.p_li').each(function(i){
	 $(this).find('table').css({"display":"none"});
	  $(this).mouseover(function(){
	  	for(var m=0; m <= i; m++ ){
			if(m==0){
				dis = 0
			}else{
				dis = dis + parseInt($("#p_li"+(m-1)).outerWidth(true))-2;
			}
		}
		//$("#debug").html($("#p_li3").css("width"));
		$(this).find('table').css({"top":"138px","left":dis+"px","display":"block"});
  		//$(this).find('table').slideDown(0);//you can give it a speed
  	}),$(this).mouseout(function(){
		//$(this).find('table').slideUp(0);
		$(this).find('table').css({"display":"none"});
	});
  });
  
  
  $(".btn_ques").hover(
	   function (){
		   $(this).next().show();
	   },
	   function (){
		   $(this).next().hide();
	   }
   )
   
   
   $("a[class*='_share']").click(function(){
	   if($(this).parent().find("h1").text() != ''){
			shareToWeibo($(this).parent().find("h1").text());
			
	    }else if($(this).parent().find("h2").text() != ''){
			shareToWeibo($(this).parent().find("h2").text());
			
		}else if($(this).parent().find("p").text() != ''){
			shareToWeibo($(this).parent().find("p").text());	
			
		}
		
	});
	
	//	  
	//$(".program_share").click(function(){
//		alert(shareToWeibo);
//	});
	
	
 //menu 
 
  $("#city1").parent().css({"display":"none"});
				$("#city2").parent().css({"display":"none"});
				
				$("#mainCity").change(function() {
					if(this.selectedIndex == ($("#mainCity option").length-1)){
						$("#city1").parent().css({"display":"block"});
						$("#city2").parent().css({"display":"block"});
					}else{
						$("#city1").parent().css({"display":"none"});
						$("#city2").parent().css({"display":"none"});
					}
				});
				
				
				$(".hover01").click(function(){  //a[class^=hover]
	   $(this).toggleClass("hover02");
   });

				 
});






