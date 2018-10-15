(function(module) {
  'use strict';
  /* globals module, require */

  var constants = Object.freeze({
    'name': 'SNSShare',
    'admin': {
      'route': '/plugins/share-sns-cn',
      'icon': 'handshake-o fa-handshake-o'
    }
  });

  var SNSShare = {
    settings: undefined
  };

  SNSShare.addNetwork = function (networks, cb) {
    networks.push({
      id: "qq",
      name: "QQ",
      class: "fa-qq"
    });
    networks.push({
		  id: "weibo",
		  name: "Weibo",
		  class: "fa-weibo"
	});
    networks.push({
		  id: "wechat",
		  name: "Wechat",
		  class: "fa-wechat"
	});
    if (cb && typeof cb === 'function')
      cb(null, networks);
  };
  module.exports = SNSShare;
}(module));