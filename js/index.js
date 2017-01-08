// JavaScript Document
/*首部‘发送至’动态处理*/
$(function(){
	$('.header_left_s').mouseover(function(){
		$('.header_send_img').css({background:'url(img/show.png) no-repeat center'});
		$('.header_send_to').show();

		});
	$('.header_left_s').mouseout(function(){
		$('.header_send_img').css({background:'url(img/hide.png) no-repeat center'});
		$('.header_send_to').hide();

		});
    $('.header_send_to').hover((function(){
				$('.header_send_img').css({background:'url(img/show.png) no-repeat center'});
		$('.header_send_to').show();
		}),function(){
			$('.header_send_img').css({background:'url(img/hide.png) no-repeat center'});
			$('.header_send_to').hide();
		});
	   

	$('.header_right li').each(function(index,value){
		$(this).mouseover(function(){
			$('.header_right li a').eq(index).css({color:'#ED145B'});
			});
		});
	$('.header_right li').each(function(index,value){
 		$(this).mouseout(function(){
			$('.header_right li a').eq(index).css({color:'#666'});
			$('.header_right li a.phone_j').css({color:'#ED145B'});
	   		});
		});
/*鼠标移动到购物车*/   
	$('#cart_pay').hover(function(){
		$(this).parent().css({backgroundColor:'#ffffff'});
		},function(){
		$(this).parent().css({backgroundColor:'#F8F8F8'});	
		});
/*搜索框下面的列表*/
	$('.search_list').hover(function(){
	
		},function(){
			
		});	   
/*主导航条*/
	$('.header_main ul li').each(function(index,value){
		$(this).mouseover(function(){
			$('.header_main ul li a').eq(index).css({color:'#ED145B'});
			});	  
	});
	$('.header_down ul li').each(function(index,value){
		$(this).mouseout(function(){
			$('.header_main ul li a').eq(index).css({color:'#ffffff'});
			});  
	});
/*滑动*/
/*
	$('.header_down .empty li').hover(function(){
	var target = $(this).first().offset().left;
	
		if(target=='135'){
		$('.header_down_line').animate({
			left:'135px',
			});
		}
		if(target=='235'){
		$('.header_down_line').animate({
			left:'235px',
			speed:'fast',
			});
		}
			if(target=='335'){
		$('.header_down_line').animate({
			left:'335px',
			});
		}
		if(target=='435'){
		$('.header_down_line').animate({
			left:'435px',
			
			});
		}
		if(target=='535'){
		$('.header_down_line').animate({
			left:'535px',
			
			});
		}
		if(target=='635'){
		$('.header_down_line').animate({
			left:'635px',
			});
		}
		},function(){
		$('.header_down_line').animate({
			left:'135px',
		});
});

*/


/*登录*/
	$('#login_a').hover(function(){
		$(this).css({color:'#ED145B'});
		},function(){
		$(this).css({color:'#666'});})
		.click(function(){
			$('#login').dialog('open');
	});
		
	
/*中部左边的位置，当鼠标移入li中，显示一个div*/

$('#new_good1').hover(function(){
	$('.new_good1_show').show();
	},function(){
	$('.new_good1_show').hide();
	});
$('.new_good1_show').hover(function(){
	$('.new_good1_show').show();
	},function(){
	$('.new_good1_show').hide();
	});
$('#new_good2').hover(function(){
	$('.new_good2_show').show();
	},function(){
	$('.new_good2_show').hide();
	});	
$('.new_good2_show').hover(function(){
	$('.new_good2_show').show();
	},function(){
	$('.new_good2_show').hide();
	});
$('#new_good3').hover(function(){
	$('.new_good3_show').show();
	},function(){
	$('.new_good3_show').hide();
	});
$('.new_good3_show').hover(function(){
	$('.new_good3_show').show();
	},function(){
	$('.new_good3_show').hide();
	});	
$('#new_good4').hover(function(){
	$('.new_good4_show').show();
	},function(){
	$('.new_good4_show').hide();
	});
$('.new_good4_show').hover(function(){
	$('.new_good4_show').show();
	},function(){
	$('.new_good4_show').hide();
	});
$('#new_good5').hover(function(){
	$('.new_good5_show').show();
	},function(){
	$('.new_good5_show').hide();
	});	
$('.new_good5_show').hover(function(){
	$('.new_good5_show').show();
	},function(){
	$('.new_good5_show').hide();
	});
$('#new_good6').hover(function(){
	$('.new_good6_show').show();
	},function(){
	$('.new_good6_show').hide();
	});
$('.new_good6_show').hover(function(){
	$('.new_good6_show').show();
	},function(){
	$('.new_good6_show').hide();
	});
$('#new_good7').hover(function(){
	$('.new_good7_show').show();
	},function(){
	$('.new_good7_show').hide();
	});	
$('.new_good7_show').hover(function(){
	$('.new_good7_show').show();
	},function(){
	$('.new_good7_show').hide();
	});
/*轮播*/
var curIndex = 0, //当前index
imgLen = $(".imgList li").length; //图片总数
var moreOrLess = 'more';
 // 定时器自动变换2.5秒每次
autoChange = setInterval(function(){ 
	if(moreOrLess == 'more'){
		curIndex ++;
		if(curIndex == 3){
			moreOrLess = 'less';
		}
	}else{
		curIndex --;	
		if(curIndex == 0){
		  moreOrLess = 'more';
		}
	}
  //调用变换处理函数
	changeTo(curIndex); 
	},2500);  
function changeTo(num){ 
	var  goLeft= num * 675;
	$(".imgList").animate({left: "-" + goLeft + "px"},500);
	}



$('.down_center li').each(function(index,value){
	$(this).mouseover(function(){
		if($(value).text()=='推荐品牌'){
			$('.d_only').hide();
			$('.d_america').hide();
			$('.d_japan').hide();
			$('.d_china').hide();
			$('.d_wash').hide();
			$('.d_recommend').show();
			$(this).css({color:'#ED145B'});
			}
		if($(value).text()=='独家品牌'){
			$('.d_recommend').hide();
			$('.d_america').hide();
			$('.d_japan').hide();
			$('.d_china').hide();
			$('.d_wash').hide();
			$('.d_only').show();
			$(this).css({color:'#ED145B'});
			}
		if($(value).text()=='欧美品牌'){
			$('.d_only').hide();
			$('.d_america').show();
			$('.d_japan').hide();
			$('.d_china').hide();
			$('.d_wash').hide();
			$('.d_recommend').hide();
			$(this).css({color:'#ED145B'});
			}
		if($(value).text()=='日韩品牌'){
			$('.d_only').hide();
			$('.d_america').hide();
			$('.d_japan').show();
			$('.d_china').hide();
			$('.d_wash').hide();
			$('.d_recommend').hide();
			$(this).css({color:'#ED145B'});
			}
		if($(value).text()=='国货品牌'){
			$('.d_only').hide();
			$('.d_america').hide();
			$('.d_japan').hide();
			$('.d_china').show();
			$('.d_wash').hide();
			$('.d_recommend').hide();
			$(this).css({color:'#ED145B'});
			}
		if($(value).text()=='洗护品牌'){
			$('.d_only').hide();
			$('.d_america').hide();
			$('.d_japan').hide();
			$('.d_china').hide();
			$('.d_wash').show();
			$('.d_recommend').hide();
			$(this).css({color:'#ED145B'});
			}
	});
    $('.down_center li').each(function(index,value){
		$(this).mouseout(function(){
			$(this).css({color:'black'});
			});
		});
	});
	
/*	$('.down_1').mouseover(function(){
		alert($('.down_1').text())
		if($('.down_1').text()=='推荐品牌'){
			$('.d_recommend').show();
			}
	})
	$('.down_2').mouseover(function(){
		alert($('.down_2').text())
		if($('.down_2').text()=='独家品牌'){
		    $('.d_only').show();
		}
	})
	*/	
	
})