// JavaScript Document

var city_data="31000000|Shanghai,11000000|Beijing,12000000|Tianjin,50000000|Chongqing,32000000|Jiangsu,33000000|Zhejiang,34000000|Anhui,35000000|Fujian,46000000|Gansu,44000000|Guangdong,45000000|Guangxi,47000000|Guizhou,48000000|Hainan,23000000|Heilongjiang,24000000|Hebei,25000000|Henan,26000000|Hubei,27000000|Hunan,36000000|Jiangxi,22000000|Jilin,21000000|Liaoning,29000000|Neimenggu,39000000|Ningxia,40000000|Qinghai,51000000|Sichuan,61000000|Shanxi,37000000|Shandong,38000000|Shanxi,71000000|Taiwan,72000000|Xinjiang,73000000|Xizang,74000000|Yunnan,81000000|Hongkong,82000000|Macao,88000000|Others";
//市
city_data+=",31010000|Shanghai,11010000|Beijing,34010000|Hefei,34020000|Bengbu,34030000|Chuzhou,34040000|Fuyang,34050000|Huaibei,34060000|Huangshan,34070000|Huangshan,34080000|Maanshan,34090000|Tongling,34100000|Wuhu,34110000|Others,50010000|Chongqing,44010000|Guangzhou,44020000|Chaozhou,44030000|Dongguan,44040000|Foshan,44050000|Qingyuan,44060000|Shantou,44070000|Shanwei,44080000|Shenzhen,44090000|Zhanjiang,44100000|Zhongshan,44110000|Zhuhai,44120000|Others,81010000|Hongkong,81020000|Others,23010000|Harbin,23030000|Yichun,23040000|Jiamusi,23050000|Daqing,23060000|Jixi,23070000|Hegang,23080000|Heihe,23090000|Qiqihaer,23020000|Others,22010000|Changchun,22030000|Baicheng,22040000|Baishan,22050000|Jilin,22060000|Liaoyuan,22070000|Siping,22080000|Songyuan,22090000|Tonghuan,22020000|Others,32010000|Nanjing,32070000|Suzhou,32030000|Changzhou,32040000|Huaian,32050000|Lianyungang,32060000|Nantong,32080000|Wuxi,32090000|Xuzhou,32100000|Yangzhou,32110000|Zhenjiang,32020000|Others,21010000|Shenyang,21030000|Anshan,21040000|Dandong,21050000|Dalian,21060000|Fushun,21070000|Fuxin,21080000|Jinzhou,21090000|Liaoyang,21020000|Others,51010000|Chengdu,51030000|Deyang,51040000|Panzhihua,51050000|Leshan,51060000|Luzhou,51070000|Meishan,51080000|Mianyang,51090000|Yibin,51020000|Others,37010000|Ji'nan,37030000|Linyi,37040000|Jini,37050000|Qingdao,37060000|Weifang,37070000|Weihai,37080000|Yantai,37090000|Zibo,37020000|Others,61010000|Xi'an,61030000|Ankang,61040000|Baoji,61050000|Hanzhong,61060000|Tongchuan,61070000|Xianyang,61080000|Yanan,61020000|Others,12010000|Tianjin,71010000|Taibei,71030000|Gaoxiong,71040000|Taizhong,71020000|Others,33010000|Hangzhou,33050000|Ningbo,33030000|JiaXing,33040000|Jinhua,33060000|Shaoqing,33070000|Wenzhou,33080000|Zhoushan,33020000|Others,88010000|Others,35010000|Xiamen,35020000|Fuzhou,35030000|Longyan,35040000|Nanping,35050000|Putian,35060000|Quanzhou,35070000|Sanming,35080000|Zhangzhou,35090000|Others,45010000|Nanning,45020000|Beihai,45030000|Guilin,45040000|Guigang,45050000|Hezhou,45060000|Liuzhou,45070000|Qinzhou,45080000|Others,46010000|Lanzhou,46020000|Baiyin,46030000|Dingxi,46040000|Pingliang,46050000|Qingyang,46060000|Jinchang,46070000|Longnan,46080000|Tianshui,46090000|Others,47010000|Guiyang,47020000|Anshun,47030000|Liupanshui,47040000|Zunyi,47050000|Others,48010000|Haikou,,48020000|Sanya,,48030000|Others,24010000|Shijiazhuang,24020000|Baoding,24030000|Cangzhou,24040000|Handan,24050000|Tangshan,24060000|Qinhuangdao,24070000|Xingtai,24080000|Zhangjiakou,24090000|Others,25010000|Zhengzhou,25020000|Nanyang,25030000|Zhoukou,25040000|Shangqiu,25050000|Anyang,25060000|Pindingshan,25070000|Kaifeng,25080000|Luoyang,25090000|Jiaozuo,25100000|Xuchang,25110000|Others,26010000|Wuhan,26020000|Ezhou,26030000|Huanggang,26040000|Huangshi,26050000|Jingzhou,26060000|Jingmen,26070000|Qianjiang,26080000|Xiangfan,26090000|Yichang,26100000|Others,27010000|Changsha,27020000|Yueyang,27030000|Changde,27040000|Zhangjiajie,27050000|Huaihua,27060000|Zhuzhou,27070000|Yiyang,27080000|Hengyang,27090000|Shaoyang,27100000|Others,36010000|Nanchang,36020000|Ganzhou,36030000|Jingdezhen,36040000|Jiujiang,36050000|Pingxiang,36060000|Shangrao,36070000|Yingtan,36080000|Others,29010000|Huhehaote,29020000|Baotou,29030000|Chifeng,29040000|Eerduosi,29050000|Hulunbeier,29060000|Wuhai,29070000|Others,39010000|Yinchuan,39020000|Zhongwei,39030000|Wuzhong,39040000|Guyuan,39050000|Shizuishan,39060000|Others,40010000|Xining,40020000|Haidongdiqu,40030000|Others,38010000|Taiyuan,38020000|Changzhi,38030000|Datong,38040000|Linfen,38050000|Xinzhou,38060000|Yangquan,38070000|Others,72010000|Urumqi,72020000|Kelamayi,72030000|Others,73010000|Lasa,73020000|Others,74010000|Kunming,74020000|Lijiang,74030000|Bbaoshan,74040000|Zhaotong,74050000|Puer,74060000|Yuxi,74070000|Others,82010000|Macao";
//区
city_data+=",31010100|Huangpu District,31010300|Jing'an District,31010400|Luwan District,31010500|Xuhui District,31010600|Changning District,31010700|Hongkou District,31010800|Yangpu District,31010900|Putuo District,31011000|Zhabei District,31011200|Pudong New District,31011300|Baoshan District,31011400|Jiading District,31011500|Songjiang District,31011600|Qingpu District,31011700|Minhang District,31011800|Jinshan District,31011900|Nanhui District,31012000|Fengxian District,31012100|Chongming District,31012200|Others,31020100|Others,11010100|Chongwen District,11010200|Chaoyang District,11010300|Changping District,11010400|Dongcheng District,11010500|Daxing District,11010600|Fengtai District,11010700|Fanshan District,11010800|Haidian District,11010900|Huairou District,11011000|Mentougou District,11011100|Miyun District,11011200|Pinggu District,11011300|Shijinshan District,11011400|Shunyi District,11011500|Tongzhou District,11011600|Xicheng District,11011700|Xuanwu District,11011800|Yanqing District,11011900|Others,11020100|Others,34010100|Others,34110100|Others,50010100|Others,50020100|Others,44010100|Dongshan District,44010200|Yuexiu District,44010300|Haizhu District,44010400|Tianhe District,44010500|Baiyun District,44010600|Fangcun District,44010700|Huangpu District,44010800|Panyu District,44010900|Huadu District,44020100|Others,44120100|Others,81010100|Others,81020100|Others,23010100|Others,23020100|Others,22010100|Others,22020100|Others,32010100|Others,32020100|Others,21010100|Others,21020100|Others,51010100|Others,51020100|Others,37010100|Others,37020100|Others,61010100|Others,61020100|Others,12010100|Heping District,12010200|Hexi District,12010300|Hedong District,12010400|Hongqiao District,12010500|Nankai District,12010600|Hebei District,12010500|Others,12020100|Others,71010100|Others,71020100|Others,33010100|Others,33020100|Others,88010100|Others,34020200|Others,34030300|Others,34040400|Others,34050500|Others,34060600|Others,34070700|Others,34080800|Others,34090900|Others,34101000|Others,35010100|Others,35020200|Others,35030300|Others,35040400|Others,35050500|Others,35060600|Others,35070700|Others,35080800|Others,35090900|Others,44030100|Others,44040200|Others,44050300|Others,44060400|Others,44070500|Others,44080600|Others,44090700|Others,44100800|Others,44110900|Others,45010100|Others,45020200|Others,45030300|Others,45040400|Others,45050500|Others,45060600|Others,45070700|Others,45080800|Others,46010100|Others,46020200|Others,46030300|Others,46040400|Others,46050500|Others,46060600|Others,46070700|Others,46080800|Others,46090900|Others,47010100|Others,47020200|Others,47030300|Others,47040400|Others,47050500|Others,48010100|Others,,48020200|Others,,48030300|Others,23030100|Others,23040200|Others,23050300|Others,23060400|Others,23070500|Others,23080600|Others,23090700|Others,24010100|Others,24020200|Others,24030300|Others,24040400|Others,24050500|Others,24060600|Others,24070700|Others,24080800|Others,24090800|Others,25010100|Others,25020200|Others,25030300|Others,25040400|Others,25050500|Others,25060600|Others,25070700|Others,25080800|Others,25090900|Others,25101000|Others,25111100|Others,26010100|Others,26020200|Others,26030300|Others,26040400|Others,26050500|Others,26060600|Others,26070700|Others,26080800|Others,26090900|Others,26101000|Others,27010100|Others,27020200|Others,27030300|Others,27040400|Others,27050500|Others,27060600|Others,27070700|Others,27080800|Others,27090900|Others,27101000|Others,22030300|Others,22040400|Others,22050500|Others,22060600|Others,22070700|Others,22080800|Others,22090900|Others,32030300|Others,32040400|Others,32050500|Others,32060600|Others,32070100|Pingjiang District,32070200|Changlang District,32070300|Jinchang District,32070400|Suzhougongye District,32070500|Suzhougaoxin District,32070600|Wuzhong District,32070800|Xiangcheng District,32070700|Others,32080800|Others,32090900|Others,32101000|Others,32111100|Others,36010100|Others,36020200|Others,36030300|Others,36040400|Others,36050500|Others,36060600|Others,36070700|Others,36080800|Others,21030300|Others,21040400|Others,21050500|Others,21060600|Others,21070700|Others,21080800|Others,21090900|Others,29010100|Others,29020200|Others,29030300|Others,29040400|Others,29050500|Others,29060600|Others,29070700|Others,39010100|Others,39020200|Others,39030300|Others,39040400|Others,39050500|Others,39060600|Others,40010100|Others,40020200|Others,40030300|Others,51030300|Others,51040400|Others,51050500|Others,51060600|Others,51070700|Others,51080800|Others,51090900|Others,61030300|Others,61040400|Others,61050500|Others,61060600|Others,61070700|Others,61080800|Others,37030300|Others,37040400|Others,37050500|Others,37060600|Others,37070700|Others,37080800|Others,37090900|Others,38010100|Others,38020200|Others,38030300|Others,38040400|Others,38050500|Others,38060600|Others,38070700|Others,71030300|Others,71040400|Others,72010100|Others,72020200|Others,72030300|Others,73010100|Others,73020200|Others,74010100|Others,74020200|Others,74030300|Others,74040400|Others,74050500|Others,74060600|Others,74070700|Others,33030300|Others,33040400|Others,33050500|Others,33060600|Others,33070700|Others,33080800|Others,82010100|Others";
//区域 
city_data+=",31010101|People Square Area,31010102|East Nanjing Road Area,31010103|Yuyuan Area,31010104|Laoximen Area,31010105|Dongjiadu Area,31010106|Huangpubinjiang Area,31010301|Jingan Temple Area,31010302|West Nanjing Road Area,31010303|Jiangning Road Area,31010304|Caojiadu Area,31010401|Xintiandi Area,31010402|Mid Huaihai Road Area,31010403|Dapu Bridge Area,31010404|Wuli Bridge Area,31010501|Xujiahui Area,31010502|Hengshan Road Area,31010503|West Jianguo Road Area,31010504|Longhua Area,31010601|Zhongshan Park Area,31010602|Tianshan Area,31010603|Hongqiao Area,31010604|Gubei Area,31010605|Xijiao Area,31010701|North Waitan Area,31010702|Luxun Park Area,31010703|North Sichuan Road Area,31010704|Jiangwan Area,31010801|Wujiaochang Area,31010802|Huangxin Park Area,31010803|East Waitan Area,31010901|Caoyang Area,31010902|Changshou Area,31010903|Wuning Area,31011001|Daning Area,31011002|Buyecheng Area,31011003|Pengpu Area,31011004|North Xizhang Road Area,31011201|Century Park Area,31011202|Jinqiao Area,31011203|Sanlin Area,31011204|Zhangjiang Area,31011205|Lujiazui Area,31011301|Dahua Area,31011302|Shangda Area,31011303|GuChun Area,31011401|Fengzhuang Area,31011402|Nanxiang Area,31011403|Anting Area,31011501|Jiuting Area,31011502|Sheshan Area,31011601|Zhujiajiao Area,31011602|Xujin Area,31011701|XinZhuang Area,31011702|Qibao Area,31011703|Hanghua Area,31011801|Jinshan Area,31011802|Zhujing Area,11010801|Shangdi Area,11010802|Zhongguancun Area,11010803|Xueyuanlu Area,11010804|Wanliu Area,11010805|Gongzhufen Area,11010806|Wukesong Area,11010201|Yaao Area,11010202|Wangjing Area,11010203|Yansha Area,11010204|Chaowai Area,11010205|CBD Area,11010206|Panjiayuan,11011601|Xizhimen Area,11011602|Jinrongjie Area,11011603|Xidan Area,11010401|Andingmen Area,11010402|Dongzhimen Area,11010403|Wangfujing Area,11010601|Fangzhuang Area,11010602|Muxiyuan Area,11010603|Yuquanying Area,11010604|Lizeqiao Area,11010101|Xinshijie Area,11010102|Hongqiao Area,11010103|Tiantan Area,11010104|Donghuashi Area,11011301|Pingguoyuan Area,11011701|Maliandao Area,11011702|Caishikou Area,11011703|Dazhalan Area,11010301|Huilongguan Area,11010302|Tiantongyuan Area,31010101|Others,31010301|Others,31010401|Others,31010501|Others,31010601|Others,31010701|Others,31010801|Others,31010901|Others,31011001|Others,31011201|Others,31011301|Others,31011401|Others,31011501|Others,31011601|Others,31011701|Others,31011801|Others,31011901|Others,31012001|Others,31012101|Others,31012201|Others,31020101|Others,11010101|Others,11010201|Others,11010301|Others,11010401|Others,11010501|Others,11010601|Others,11010701|Others,11010801|Others,11010901|Others,11011001|Others,11011101|Others,11011201|Others,11011301|Others,11011401|Others,11011501|Others,11011601|Others,11011701|Others,11011801|Others,11011901|Others,11020101|Others,34010101|Others,34021101|Others,50010101|Others,50020101|Others,44010101|Others,44010201|Others,44010301|Others,44010401|Others,44010501|Others,44010601|Others,44010701|Others,44010801|Others,44010901|Others,44020101|Others,44120101|Others,81010101|Others,81020101|Others,23010101|Others,23020101|Others,22010101|Others,22020101|Others,32010101|Others,32020101|Others,21010101|Others,21020101|Others,51010101|Others,51020101|Others,37010101|Others,37020101|Others,61010101|Others,61020101|Others,12010101|Others,12010201|Others,12010301|Others,12010401|Others,12010501|Others,12010601|Others,12010501|Others,12020101|Others,71010101|Others,71020101|Others,33010101|Others,33020101|Others,88010101|Others,34020202|Others,34030303|Others,34040404|Others,34050505|Others,34060606|Others,34070707|Others,34080808|Others,34090909|Others,34101010|Others,35010101|Others,35020202|Others,35030303|Others,35040404|Others,35050505|Others,35060606|Others,35070707|Others,35080808|Others,35090909|Others,44030101|Others,44040202|Others,44050303|Others,44060404|Others,44070505|Others,44080606|Others,44090707|Others,44100808|Others,44110909|Others,45010101|Others,45020202|Others,45030303|Others,45040404|Others,45050505|Others,45060606|Others,45070707|Others,45080808|Others,46010101|Others,46020202|Others,46030303|Others,46040404|Others,46050505|Others,46060606|Others,46070707|Others,46080808|Others,46090909|Others,47010101|Others,47020202|Others,47030303|Others,47040404|Others,47050505|Others,48010101|Others,,48020202|Others,,48030303|Others,23030101|Others,23040202|Others,23050303|Others,23060404|Others,23070505|Others,23080606|Others,23090707|Others,24010101|Others,24020202|Others,24030303|Others,24040404|Others,24050505|Others,24060606|Others,24070707|Others,24080808|Others,24090809|Others,25010101|Others,25020202|Others,25030303|Others,25040404|Others,25050505|Others,25060606|Others,25070707|Others,25080808|Others,25090909|Others,25101010|Others,25111111|Others,26010101|Others,26020202|Others,26030303|Others,26040404|Others,26050505|Others,26060606|Others,26070707|Others,26080808|Others,26090909|Others,26101010|Others,27010101|Others,27020202|Others,27030303|Others,27040404|Others,27050505|Others,27060606|Others,27070707|Others,27080808|Others,27090909|Others,27101010|Others,22030303|Others,22040404|Others,22050505|Others,22060606|Others,22070707|Others,22080808|Others,22090909|Others,32030303|Others,32040404|Others,32050505|Others,32060606|Others,32070707|Others,32080808|Others,32090909|Others,32101010|Others,32111111|Others,36010101|Others,36020202|Others,36030303|Others,36040404|Others,36050505|Others,36060606|Others,36070707|Others,36080808|Others,21030303|Others,21040404|Others,21050505|Others,21060606|Others,21070707|Others,21080808|Others,21090909|Others,29010101|Others,29020202|Others,29030303|Others,29040404|Others,29050505|Others,29060606|Others,29070707|Others,39010101|Others,39020202|Others,39030303|Others,39040404|Others,39050505|Others,39060606|Others,40010101|Others,40020202|Others,40030303|Others,51030303|Others,51040404|Others,51050505|Others,51060606|Others,51070707|Others,51080808|Others,51090909|Others,61030303|Others,61040404|Others,61050505|Others,61060606|Others,61070707|Others,61080808|Others,37030303|Others,37040404|Others,37050505|Others,37060606|Others,37070707|Others,37080808|Others,37090909|Others,38010101|Others,38020202|Others,38030303|Others,38040404|Others,38050505|Others,38060606|Others,38070707|Others,71030303|Others,71040404|Others,72010101|Others,72020202|Others,72030303|Others,73010101|Others,73020202|Others,74010101|Others,74020202|Others,74030303|Others,74040404|Others,74050505|Others,74060606|Others,74070707|Others,33030303|Others,33040404|Others,33050505|Others,33060606|Others,33070707|Others,33080808|Others,32070101|Others,32070202|Others,32070303|Others,32070404|Others,32070505|Others,32070606|Others,32070808|Others,82010101|Others";
//填充省级行政单位
function full_city()
{
        city_arr=city_data.split(",");
		//alert(city_arr);
        var cs_i=1;
        for (i=1;i<=city_arr.length;i++)
        {
                //document.write(city_arr[i-1].substring(2,6)+"<br>");
                if(city_arr[i-1].substring(2,8)=="000000")
                {
                document.getElementById('city1').options[cs_i]=new Option(city_arr[i-1].substring(9,city_arr[i-1].length),city_arr[i-1].substring(0,8));
				document.getElementById('user_province_hide').value =city_arr[i-1].substring(9,city_arr[i-1].length);
                cs_i++;
                }
        }


		if( document.getElementById('c_province').value!="" ){
			document.getElementById('city1').value = document.getElementById('c_province').value;
			city_1( document.getElementById('city1').value );
			city_2( document.getElementById('city2').value );
		}

//getCityValue();
}
//省级行政单位改变时填充地级行政单位
function city_1(city1_str)
{        fcs_i=1;
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
		
		if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="Beijing")
		{
				document.getElementById('city2').options[1].selected=true;
				city_2("11000000");
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="Shanghai")
		{
			document.getElementById('city2').options[1].selected=true;
				city_2("31000000");
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="Tianjin")
		{
			document.getElementById('city2').options[1].selected=true;
				city_2("12000000");
		}
		else if(document.getElementById('city1').options[document.getElementById('city1').selectedIndex].text=="Chongqing")
		{
			document.getElementById('city2').options[1].selected=true;
				city_2("50000000");
		}
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
			document.getElementById('city3').options[0].text="District";
		}
		if(document.getElementById('city2').selectedIndex==0)
		{
			document.getElementById('city3').options.length=0; 
			document.getElementById('city3').options[0]=new Option("District","");
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
        //document.getElementById('city4').length=fcs_i;
		
		/*if(document.getElementById('city4').options.length==2)
			{
				document.getElementById('city4').options[0] = null; 
				document.getElementById('city4').options[0].text=" - - ";
				document.getElementById('city4').length=1;
			}
			else
			{
				document.getElementById('city4').options[0].text="Street";
				}*/
			if(document.getElementById('city3').selectedIndex==0)
		{
			/*document.getElementById('city4').options.length=0; 
			document.getElementById('city4').options[0]=new Option("Street","");
			document.getElementById('city4').options.length=1; */
		
		}
		if(document.getElementById('city3').options[document.getElementById('city3').selectedIndex].text=="Others" || document.getElementById('city3').options[document.getElementById('city3').selectedIndex].text==" - - ")
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