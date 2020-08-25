var popup = '<div class="overfloat" id="gui_kai" style="display: block; z-index: 2147483647;">'+
    '<div class="guize_html" id="guize_html" style="z-index: 2147483647;">'+
    '<span class="guize_html_nei">'+
	    '<h3 style="font-size:20px; font-weight:bold; color:#FF0000;margin-top:25%">友情提示!</h3>'+
		'<p style="font-size:24px;color:black;text-align: left;text-indent: 1;line-height: 30px;">请使用谷歌浏览器访问此站，避免国内浏览器屏蔽访问！</p>' +

    '</span>'+
	'<div id="g_close" class="btn">'+
	'    关闭'+
	'    </div>'+
	'    </div>'+
	'    </div>'

$('body').append(popup);
$(function() {
    $("#gui_kai").show();
});

$('#g_close').click(function(){
    $("#gui_kai").hide();
});

