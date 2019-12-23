
				function commonPage(nowPage, totalPage) {
					var a = "";
					if(totalPage > 5) {
						a +="<a href='javascript:void(0)' id='shang' title='Previous number' class='Previous page'>上一页</a><a href='javascript:void(0)' id='one' class='number current' title='1' >1</a><a href='javascript:void(0)' id='two' class='number' title='2'>2</a><a href='javascript:void(0)' id='three' class='number' title='3'>3</a><a href='javascript:void(0)' id='four' class='number' title='4'>4</a><a href='javascript:void(0)' id='five' class='number' title='5'>5</a><a href='javascript:void(0)' id='xia' title='Next number' class='Next Page'>下一页</a>";
						$("#pagination_pagright").html(a);
						if(nowPage == 1) {
							$("#one").html(nowPage).attr({
								"class": "number current",
								"onclick": "doSomething(" + nowPage + ")"
							});
							$("#two").html((nowPage + 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 1) + ")"
							});
							$("#three").html((nowPage + 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 2) + ")"
							});
							$("#four").html((nowPage + 3)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 3) + ")"
							});
							$("#five").html((nowPage + 4)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 4) + ")"
							});
							$("#xia").attr("onclick", "doSomething(" + (nowPage + 1) + ")");
						} else if(nowPage == totalPage) {
							$("#shang").attr("onclick", "doSomething(" + (nowPage - 1) + ")");
							$("#one").html((nowPage - 4)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 4) + ")"
							});
							$("#two").html((nowPage - 3)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 3) + ")"
							});
							$("#three").html((nowPage - 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 2) + ")"
							});
							$("#four").html((nowPage - 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 1) + ")"
							});
							$("#five").html(nowPage).attr({
								"class": "number current",
								"onclick": "doSomething(" + nowPage + ")"
							});
						} else if(nowPage + 1 == totalPage) {
							$("#shang").attr("onclick", "doSomething(" + (nowPage - 1) + ")");
							$("#one").html((nowPage - 3)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 3) + ")"
							});
							$("#two").html((nowPage - 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 2) + ")"
							});
							$("#three").html((nowPage - 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 1) + ")"
							});
							$("#four").html(nowPage).attr({
								"class": "number current",
								"onclick": "doSomething(" + nowPage + ")"
							})
							$("#five").html((nowPage + 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 1) + ")"
							});
							$("#xia").attr("onclick", "doSomething(" + (nowPage + 1) + ")");
						} else if(nowPage == 2) {
							$("#shang").attr("onclick", "doSomething(" + (nowPage - 1) + ")");
							$("#one").html((nowPage - 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 1) + ")"
							});
							$("#two").html(nowPage).attr({
								"class": "number current",
								"onclick": "doSomething(" + nowPage + ")"
							});
							$("#three").html((nowPage + 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 1) + ")"
							});
							$("#four").html((nowPage + 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 2) + ")"
							})
							$("#five").html((nowPage + 3)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 3) + ")"
							});
							$("#xia").attr("onclick", "doSomething("+(nowPage+1)+")");
						} else {
							$("#shang").attr("onclick", "doSomething(" + (nowPage - 1) + ")");
							$("#one").html((nowPage - 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 2) + ")"
							});
							$("#two").html((nowPage - 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage - 1) + ")"
							});
							$("#three").html(nowPage).attr({
								"class": "number current",
								"onclick": "doSomething(" + nowPage + ")"
							});
							$("#four").html((nowPage + 1)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 1) + ")"
							})
							$("#five").html((nowPage + 2)).attr({
								"class": "number",
								"onclick": "doSomething(" + (nowPage + 2) + ")"
							});
							$("#xia").attr("onclick", "doSomething(" + (nowPage + 1) + ")");
						}

					} else {
						if(nowPage - 1 > 0) {
							a += "<a href='javascript:void(0)' onclick='doSomething(" + (nowPage - 1) + ")'  title='Previous page' class='Previous number'>上一页</a>";
						} else {
							a += "<a href='javascript:void(0)' title='Previous page' class='Previous number'>上一页</a>";
						}
						if(totalPage >= 1) {
							if(nowPage == 1) {
								a += "<a href='javascript:void(0)' onclick='doSomething(1)' class='number current' title='1'>1</a>";
							} else {
								a += "<a href='javascript:void(0)' onclick='doSomething(1)' class='number' title='1'>1</a>";
							}
						}
						if(totalPage >= 2) {
							if(nowPage == 2) {
								a += "<a href='javascript:void(0)' onclick='doSomething(2)' class='number current' title='2'>2</a>";
							} else {
								a += "<a href='javascript:void(0)' onclick='doSomething(2)' class='number' title='2'>2</a>";
							}
						}
						if(totalPage >= 3) {
							if(nowPage == 3) {
								a += "<a href='javascript:void(0)' onclick='doSomething(3)' class='number current' title='3'>3</a>";
							} else {
								a += "<a href='javascript:void(0)' onclick='doSomething(3)' class='number' title='3'>3</a>";
							}
						}
						if(totalPage >= 4) {
							if(nowPage == 4) {
								a += "<a href='javascript:void(0)' onclick='doSomething(4)' class='number current' title='4'>4</a>";
							} else {
								a += "<a href='javascript:void(0)' onclick='doSomething(4)' class='number' title='4'>4</a>";
							}
						}
						if(totalPage >= 5) {
							if(nowPage == 5) {
								a += "<a href='javascript:void(0)' onclick='doSomething(5)' class='number current' title='5'>5</a>";
							} else {
								a += "<a href='javascript:void(0)' onclick='doSomething(5)' class='number' title='5'>5</a>";
							}
						}
						if(nowPage + 1 <= totalPage) {
							a += "<a href='javascript:void(0)' onclick='doSomething(" + (nowPage + 1) + ")' title='Next Page' class='Next number'>下一页</a>";
						} else {
							a += "<a href='javascript:void(0)'  title='Next Page' class='next number'>下一页</a>";
						}
						$("#pagination_pagright").html(a);
					}
				}