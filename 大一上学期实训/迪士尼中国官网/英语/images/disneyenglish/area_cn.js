// JavaScript Document

var city_data="";
city_data = "31000000|上海,31010000|上海,31010100|黄浦区,31010300|静安区,31010400|卢湾区,31010500|徐汇区,31010600|长宁区,31010700|虹口区,31010800|杨浦区,31010900|普陀区,31011000|闸北区,31011200|浦东新区,31011300|宝山区,31011400|嘉定区,31011500|松江区,31011600|青浦区,31011700|闵行区,31011800|金山区,31011900|南汇区,31012000|奉贤区,31012100|崇明县,31012200|其他,31020100|其他,31010101|人民广场,31010102|南京东路,31010103|豫园,31010104|老西门,31010105|董家渡,31010106|黄浦滨江,31010301|静安寺,31010302|南京西路,31010303|江宁路,31010304|曹家渡,31010401|新天地,31010402|淮海中路,31010403|打浦桥,31010404|五里桥,31010501|徐家汇,31010502|衡山路,31010503|建国西路,31010504|龙华,31010601|中山公园,31010602|天山,31010603|虹桥,31010604|古北,31010605|西郊,31010701|北外滩,31010702|鲁迅公园,31010703|四川北路,31010704|江湾镇,31010801|五角场,31010802|黄兴公园,31010803|东外滩,31010901|曹杨,31010902|长寿,31010903|武宁,31011001|大宁,31011002|不夜城,31011003|彭浦,31011004|西藏北路,31011201|世纪公园,31011202|金桥,31011203|三林,31011204|张江,31011205|陆家嘴,31011301|大华,31011302|上大,31011303|顾村,31011401|丰庄,31011402|南翔,31011403|安亭,31011501|九亭,31011502|佘山,31011601|朱家角,31011602|徐泾,31011701|莘庄,31011702|七宝,31011703|航华,31011801|金山,31011802|朱泾,11000000|北京,11010000|北京,11010100|东城区,11010200|西城区,11010300|崇文区,11010400|宣武区,11010500|朝阳区,11010600|海淀区,11010700|丰台区,11010800|石景山区,11010900|门头沟区,11011000|房山区,11011100|通州区,11011200|昌平区,11011300|大兴区,11011400|怀柔区,11011500|顺义区,11011600|密云县,11011700|平谷区,11011800|延庆县,11011900|其他,11020100|其他,11010601|上地,11010602|中关村,11010603|学院路,11010604|万柳,11010605|公主坟,11010606|五棵松,11010501|亚奥,11010502|望京,11010503|燕莎,11010504|朝外,11010505|国贸,11010506|潘家园,11010201|西直门,11010202|金融街,11010203|西单,11010101|安定门,11010102|东直门,11010103|王府井,11010701|方庄,11010702|木樨园,11010703|玉泉营,11010704|丽泽桥,11010301|新世界,11010302|红桥,11010303|天坛,11010304|东花,11010801|苹果园,11010401|马连道,11010402|菜市口,11010403|大栅栏,11011201|回龙观,11011202|天通苑,12000000|天津,12010000|天津,12010100|和平区,12010200|河西区,12010300|河东区,12010400|红桥区,12010500|南开区,12010600|河北区,12010500|其他,12020100|其他,50000000|重庆,32000000|江苏,33000000|浙江,50010000|重庆,50010100|其他,50020100|其他,34000000|安徽,34010000|合肥,34020000|蚌埠,34030000|滁州,34040000|阜阳,34050000|淮北,34060000|淮南,34070000|黄山,34080000|马鞍山,34090000|铜陵,34100000|芜湖,34110000|其他,35000000|福建,35010000|厦门,35020000|福州,35030000|龙岩,35040000|南平,35050000|莆田,35060000|泉州,35070000|三明,35080000|漳州,35090000|其他,46000000|甘肃,44000000|广东,44010000|广州,44020000|深圳,44030000|潮州,44040000|东莞,44050000|佛山,44060000|清远,44070000|汕头,44080000|汕尾,44090000|湛江,44100000|中山,44110000|珠海,44120000|其他,44010100|东山区,44010200|越秀区,44010300|海珠区,44010400|天河区,44010500|白云区,44010600|芳村区,44010700|黄埔区,44010800|番愚区,44010900|花都区,45000000|广西,45010000|南宁,45020000|北海,45030000|桂林,45040000|贵港,45050000|贺州,45060000|柳州,45070000|钦州,46010000|兰州,46020000|白银,46030000|定西,46040000|平凉,46050000|庆阳,46060000|金昌,46070000|陇南,46080000|天水,46090000|其他,47000000|贵州,47010000|贵阳,47020000|安顺,47030000|六盘水,47040000|遵义,47050000|其他,48050000|海南,23000000|黑龙江,23010000|哈尔滨,23020000|伊春,23030000|佳木斯,23040000|大庆,23050000|鸡西,23060000|鹤岗,23070000|黑河,23080000|齐齐哈尔,23090000|其他,24000000|河北,24010000|石家庄,24020000|保定,24030000|沧州,24040000|邯郸,24050000|唐山,24060000|秦皇岛,24070000|邢台,24080000|张家口,24090000|其他,25000000|河南,25010000|郑州,25020000|南阳,25030000|周口,25040000|商丘,25050000|安阳,25060000|平顶山,25070000|开封,25080000|洛阳, 25090000|焦作,25100000|许昌,25110000|其他,26000000|湖北,26010000|武汉,26020000|鄂州,26030000|黄冈,26040000|黄石,26010000|荆州,26020000|荆门,26030000|潜江,26040000|襄樊,26050000|宜昌,26060000|其他,27000000|湖南,27010000|长沙,27020000|岳阳,27030000|常德,27040000|张家界,27050000|怀化,27060000|株洲,27070000|益阳,27080000|衡阳,27090000|邵阳,27100000|其他,22010000|长春,22020000|白城,22030000|白山,22040000|吉林,22050000|辽源,22060000|四平,22070000|松原,22080000|通化,22090000|其他,32010000|南京,32060000|苏州,32020000|常州,32030000|淮安,32040000|连云港,32050000|南通,32070000|无锡,32080000|徐州,32090000|扬州,32100000|镇江,32110000|其他,29000000|江西,22000000|吉林,29010000|南昌,29020000|赣州,29030000|景德镇,29040000|九江,29050000|萍乡,29060000|上饶,29070000|鹰潭,29080000|其他,21000000|辽宁,21010000|鞍山,21020000|丹东,21030000|大连,21040000|抚顺,21050000|阜新,21060000|锦州,21070000|辽阳,21080000|其他,13000000|内蒙古,13010000|呼和浩特,13020000|包头,13030000|赤峰,13040000|鄂尔多斯,13050000|呼伦贝尔,13060000|乌海,13070000|其他,14000000|宁夏,14010000|银川,14020000|中卫,14030000|吴忠,14040000|固原,14050000|石嘴山,14060000|其他,15000000|青海,15010000|西宁,15020000|海东地区,15030000|其他,51000000|四川,51010000|成都,51010001|金牛区,51010002|青羊区,51010003|成华区,51010004|武侯区,51010005|温江区,51010006|龙泉驿区,51020000|德阳,51030000|攀枝花,51040000|乐山,51050000|泸州,51060000|眉山,51070000|绵阳,51080000|宜宾,51090000|其他,51010100|其他,51020100|其他,51030100|其他,51040100|其他,51050100|其他,51060100|其他,51070100|其他,51080100|其他,51090100|其他,61000000|陕西,61010000|西安,61020000|安康,61030000|宝鸡,61040000|汉中,61050000|铜川,61060000|咸阳,61070000|延安,61080000|其他,37000000|山东,37010000|济南,37020000|临沂,37030000|济宁,37040000|青岛,37050000|潍坊,37060000|威海,37070000|烟台,37080000|淄博,37090000|其他,38000000|山西,38010000|太原,38020000|长治,38030000|大同,38040000|临汾,38050000|忻州,38060000|阳泉,38070000|其他,71000000|台湾,71010000|台北,71020000|高雄,71030000|台中,71040000|其他,72000000|新疆,72010000|乌鲁木齐,72020000|克拉玛依,72030000|其他,73000000|西藏,73010000|拉萨,73020000|其他,39000000|云南,39010000|昆明,39020000|丽江,39030000|保山,39040000|昭通,39050000|普洱,39060000|玉溪,39070000|其他,33010000|杭州,33040000|宁波,33020000|嘉兴,33030000|金华,33050000|绍兴,33060000|温州,33070000|舟山,33080000|其他,33010100|其他,33020100|其他,33030100|其他,33040100|其他,33050100|其他,33060100|其他,33070100|其他,33080100|其他,81000000|香港,82000000|澳门,81010000|香港,81020000|其他,81010100|其他,81020100|其他,88000000|其他,88010000|其他,88010100|其他,31010101|其他,31010301|其他,31010401|其他,31010501|其他,31010601|其他,31010701|其他,31010801|其他,31010901|其他,31011001|其他,31011201|其他,31011301|其他,31011401|其他,31011501|其他,31011601|其他,31011701|其他,31011801|其他,31011901|其他,31012001|其他,31012101|其他,31012201|其他,31020101|其他,11010101|其他,11010201|其他,11010301|其他,11010401|其他,11010501|其他,11010601|其他,11010701|其他,11010801|其他,11010901|其他,11011001|其他,11011101|其他,11011201|其他,11011301|其他,11011401|其他,11011501|其他,11011601|其他,11011701|其他,11011801|其他,11011901|其他,11020101|其他,34010100|其他,34020100|其他,34030100|其他,34040100|其他,34050100|其他,34060100|其他,34070100|其他,34080100|其他,34090100|其他,34100100|其他,34110100|其他,34120100|其他,50020101|其他,81010101|其他,81020101|其他,23010101|其他,23020101|其他,22010101|其他,22020101|其他,32010101|其他,32020101|其他,21010101|其他,21020101|其他,51010101|其他,51020101|其他,37010101|其他,37020101|其他,61010101|其他,61020101|其他,12010101|其他,12010201|其他,12010301|其他,12010401|其他,12010501|其他,12010601|其他,12010501|其他,12020101|其他,71010101|其他,71020101|其他,33010101|其他,33020101|其他,88010101|其他,22010100|其他,22020100|其他,22030100|其他,22040100|其他,22050100|其他,22060100|其他,22070100|其他,22080100|其他,22090100|其他,39010100|其他,39020100|其他,39030100|其他,39040100|其他,39050100|其他,39060100|其他,39070100|其他,35010100|其他,35020100|其他,35030100|其他,35040100|其他,35050100|其他,35060100|其他,35070100|其他,35080100|其他,35090100|其他,44010100|其他,44020100|其他,44030100|其他,44040100|其他,44050100|其他,44060100|其他,44070100|其他,44080100|其他,44090100|其他,44100100|其他,44110100|其他,44120100|其他,45010100|其他,45020100|其他,45030100|其他,45040100|其他,45050100|其他,45060100|其他,45070100|其他,46010100|其他,46020100|其他,46030100|其他,46040100|其他,46050100|其他,46060100|其他,46070100|其他,46080100|其他,46090100|其他,47010100|其他,47020100|其他,47030100|其他,47040100|其他,47050100|其他,23010100|其他,23020100|其他,23030100|其他,23040100|其他,23050100|其他,23060100|其他,23070100|其他,23080100|其他,23090100|其他,24010100|其他,24020100|其他,24030100|其他,24040100|其他,24050100|其他,24060100|其他,24070100|其他,24080100|其他,24090100|其他,25010100|其他,25020100|其他,25030100|其他,25040100|其他,25050100|其他,25060100|其他,25070100|其他,25080100|其他,25090100|其他,25100100|其他,25110100|其他,26010100|其他,26020100|其他,26030100|其他,26040100|其他,26050100|其他,26060100|其他,27010100|其他,27020100|其他,27030100|其他,27040100|其他,27050100|其他,27060100|其他,27070100|其他,27080100|其他,27090100|其他,27100100|其他,32010100|其他,32020100|其他,32030100|其他,32040100|其他,32050100|其他,32060200|平江区,32060300|沧浪区,32060400|金阊区,32060500|苏州工业园区,32060600|苏州高新区,32060700|吴中区,32060800|相城区,32060100|其他,32070100|其他,32080100|其他,32090100|其他,32100100|其他,32110100|其他,29010100|其他,29020100|其他,29030100|其他,29040100|其他,29050100|其他,29060100|其他,29070100|其他,29080100|其他,21010100|其他,21020100|其他,21030100|其他,21040100|其他,21050100|其他,21060100|其他,21070100|其他,21080100|其他,13010100|其他,13020100|其他,13030100|其他,13040100|其他,13050100|其他,13060100|其他,13070100|其他,14010100|其他,14020100|其他,14030100|其他,14040100|其他,14050100|其他,14060100|其他,15010100|其他,15020100|其他,15030100|其他,61010100|其他,61020100|其他,61030100|其他,61040100|其他,61050100|其他,61060100|其他,61070100|其他,61080100|其他,37010100|其他,37020100|其他,37030100|其他,37040100|其他,37050100|其他,37060100|其他,37070100|其他,37080100|其他,37090100|其他,38010100|其他,38020100|其他,38030100|其他,38040100|其他,38050100|其他,38060100|其他,38070100|其他,71010100|其他,71020100|其他,71030100|其他,71040100|其他,72010100|其他,72020100|其他,72030100|其他,73010100|其他,73020100|其他,44010101|其他,44010201|其他,44010301|其他,44010401|其他,44010501|其他,44010601|其他,44010701|其他,44010801|其他,44010901|其他,44011001|其他,32060202|其他,32060303|其他,32060404|其他,32060505|其他,32060606|其他,32060707|其他,32060808|其他,82010000|澳门,82010100|其他,82010101|其他";
//填充省级行政单位
function full_city()
{
        city_arr=city_data.split(",");
		//alert(city_arr);
        var cs_i=1;
		var now_city;
        for (i=1;i<=city_arr.length;i++)
        {
                //document.write(city_arr[i-1].substring(2,6)+"<br>");
                if(city_arr[i-1].substring(2,8)=="000000")
                {
					document.getElementById('city1').options[cs_i]=new Option(city_arr[i-1].substring(9,city_arr[i-1].length),city_arr[i-1].substring(0,8));
					document.getElementById('user_province_hide').value =city_arr[i-1].substring(9,city_arr[i-1].length);
					
					cs_i++;
                }
//				if(document.getElementById('c_province').value == city_arr[i-1]) 

        }
		
		if( document.getElementById('c_province').value!="" && document.getElementById('city1').value==""){
			
			for(i=0;i<document.getElementById('city1').length;i++)
			{
				now_city = document.getElementById('city1').options[i].text;
				if(now_city==document.getElementById('c_province').value)
				{
					document.getElementById('city1').options[i].selected=true;
				}
				   
			}

			
			city_1( document.getElementById('city1').value );
		}
			//alert(document.getElementById('city1').text);
//getCityValue();
}
//省级行政单位改变时填充地级行政单位
function city_1(city1_str)
{

		
		fcs_i=1;
        var str_city1=city1_str/1000000;
		
        for (i=1;i<=city_arr.length;i++)
        {
				
                if(city_arr[i-1].substring(0,2)==str_city1&&city_arr[i-1].substring(2,8)!="000000"&&city_arr[i-1].substring(4,8)=="0000")
                {
					
                        document.getElementById('city2').options[fcs_i]=new Option(city_arr[i-1].substring(9,city_arr[i-1].length),city_arr[i-1].substring(0,8));                       
						//document.getElementById('user_city_hide').value =city_arr[i-1].substring(9,city_arr[i-1].length);
                        fcs_i++;


                }
        }



        document.getElementById('city2').length=fcs_i;
		if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="北京")
		{
				document.getElementById('city2').options[1].selected=true;
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="上海")
		{
			document.getElementById('city2').options[1].selected=true;
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="天津")
		{
			document.getElementById('city2').options[1].selected=true;
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="重庆")
		{
			document.getElementById('city2').options[1].selected=true;
		}else{

			if( document.getElementById('c_city').value!="" && document.getElementById('city2').value==""){
				
				for(i=0;i<document.getElementById('city2').length;i++)
				{
					
					if(document.getElementById('city2').options[i].text==document.getElementById('c_city').value)
					{
						document.getElementById('city2').options[i].selected=true;
					}
					   
				}
			}
		}

		city_2(document.getElementById('city2').value);
}
//地级行政单位改变时填充县级行政单位
function city_2(city2_str)
{        fcs_i=1;
        var str_city2=city2_str/10000;
        //alert(str_city1);
        for (i=1;i<=city_arr.length;i++)
        {
                if(city_arr[i-1].substring(0,4)==str_city2&&city_arr[i-1].substring(4,8)!="0000"&&city_arr[i-1].substring(6,8)=="00")
                {
                        document.getElementById('city3').options[fcs_i]=new Option(city_arr[i-1].substring(9,city_arr[i-1].length),city_arr[i-1].substring(0,8));
						document.getElementById('user_district_hide').value =city_arr[i-1].substring(9,city_arr[i-1].length);
                        fcs_i++;
                }
        }
        document.getElementById('city3').length=fcs_i;
		
		if(document.getElementById('city3').options.length==2)
		{
			document.getElementById('city3').options[0] = null; 
			document.getElementById('city3').options[0].text=" - - ";
			document.getElementById('city3').length=fcs_i-1;
		}
		else
		{
			document.getElementById('city3').options[0].text="请选择";
			}
		if(document.getElementById('city2').selectedIndex==0)
		{
			document.getElementById('city3').options.length=0; 
			document.getElementById('city3').options[0]=new Option("请选择","");
			document.getElementById('city3').options.length=1; 
		}
}
//地级行政单位改变时填充县级行政单位
function city_3(city3_str)
{        fcs_i=1;
        var str_city3=city3_str/100;
        //alert(str_city1);
        for (i=1;i<=city_arr.length;i++)
        {
                if(city_arr[i-1].substring(0,6)==str_city3&&city_arr[i-1].substring(6,8)!="00")
                {
                        //document.getElementById('city4').options[fcs_i]=new Option(city_arr[i-1].substring(9,city_arr[i-1].length),city_arr[i-1].substring(0,8));
						//document.getElementById('user_xiang_hide').value =city_arr[i-1].substring(9,city_arr[i-1].length);
						
                        fcs_i++;
                }
				
        }
       /* document.getElementById('city4').length=fcs_i;
		
		if(document.getElementById('city4').options.length==2)
			{
				document.getElementById('city4').options[0] = null; 
				document.getElementById('city4').options[0].text=" - - ";
				document.getElementById('city4').length=1;
			}
			else
			{
				document.getElementById('city4').options[0].text="请选择";
				}*/
			if(document.getElementById('city3').selectedIndex==0)
		{
			/*document.getElementById('city4').options.length=0; 
			document.getElementById('city4').options[0]=new Option("请选择","");
			document.getElementById('city4').options.length=1; */
		
		}
		if(document.getElementById('city3').options[document.getElementById('city3').selectedIndex].text=="其他" || document.getElementById('city3').options[document.getElementById('city3').selectedIndex].text==" - - ")
		{
			/*document.getElementById('city4').options.length=0; 
			document.getElementById('city4').options[0]=new Option(" - - ","");
			document.getElementById('city4').options.length=1; */
			}
}
//填充实际需要使用的INPUT的值
function getCityValue()
{
        document.getElementById('city_value').value="";
               
        if(document.getElementById('city1').value!="")
        {document.getElementById('city_value').value=document.getElementById('city1').value;}
       
        if(document.getElementById('city2').value!="")
        {document.getElementById('city_value').value=document.getElementById('city2').value;}
        if(document.getElementById('city3').value!="")
        {document.getElementById('city_value').value=document.getElementById('city3').value;}  
		/*if(document.getElementById('city4').value!="")
        {document.getElementById('city_value').value=document.getElementById('city4').value;} */
}
//根据城市数据的默认值选种选择项
function selectedValue()
{
        //显示第一个地 District
        for(i=1;i<=document.getElementById('city1').length;i++)
        {
			//alert(document.getElementById('city1').options[i-1]);
                if(document.getElementById('city1').options[i-1].value.substring(0,2)==document.getElementById('city_value').value.substring(0,2))
                {
                        document.getElementById('city1').selectedIndex=i-1;
                }
               
        }
        city_1(document.getElementById('city1').value);
        //显示第二个地 District
        for(i=1;i<=document.getElementById('city2').length;i++)
        {
                if(document.getElementById('city2').options[i-1].value.substring(0,4)==document.getElementById('city_value').value.substring(0,4))
                {
                        document.getElementById('city2').selectedIndex=i-1;
                }
        }
        city_2(document.getElementById('city2').value);
        //显示第三个地 District
        for(i=1;i<=document.getElementById('city3').length;i++)
        {
                if(document.getElementById('city3').options[i-1].value.substring(0,6)==document.getElementById('city_value').value.substring(0,6))
                {
                        document.getElementById('city3').selectedIndex=i-1;
                }
        }
		city_3(document.getElementById('city3').value);
       //显示第四个地 District
        /*for(i=1;i<=document.getElementById('city4').length;i++)
        {
                if(document.getElementById('city4').options[i-1].value==document.getElementById('city_value').value)
                {		//alert(document.getElementById('city4').options[i-1].value);
                        document.getElementById('city4').selectedIndex=i-1;
                }
        }*/
}
full_city();//selectedValue();