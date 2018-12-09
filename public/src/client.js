(function(){
	"use strict";
	$(window).on('action:share.addHandlers', function(evt,params) {
		addHandler('[component="share/qq"]', function () {
			return params.openShare(
				'http://connect.qq.com/widget/shareqq/index.html?title=' + document.title + '&url=',
				getPostUrl($(this)), 720, 530);
		});
		addHandler('[component="share/weibo"]', function () {
			return params.openShare(
				'http://v.t.sina.com.cn/share/share.php?title=' + document.title + '&url=',
				getPostUrl($(this)), 550, 550);
		});
		addHandler('[component="share/wechat"]', function () {
			return params.openShare('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=',
				getPostUrl($(this)), 300, 300);
		});
	});

	function addHandler(selector, callback) {
		$('#content').off('click', selector).on('click', selector, callback);
	}

	function getPostUrl(clickedElement) {
		var parts = window.location.pathname.split('/');
		var postIndex = parseInt(clickedElement.parents('[data-index]').attr('data-index'), 10);
		return '/' + parts[1] + '/' + parts[2] + (parts[3] ? '/' + parts[3] : '') + (postIndex ? '/' + (postIndex + 1) : '');
	}
}());