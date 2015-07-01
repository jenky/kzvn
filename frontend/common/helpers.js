var App = require('app');

module.exports = {

	pageTitle: function(title, defaultTitle, delimiter) {
		
		if (!defaultTitle) defaultTitle = App.getOption('title');
		if (!delimiter) delimiter = '|';

		if (title === defaultTitle) {
			document.title = title;
		} else {
			document.title = title + ' ' + delimiter + ' ' + defaultTitle;
		}
	},

	stringLimit: function(string, length, ellipsis) {
		var ellipsis = ellipsis ? ellipsis : '...';

		return string.length > length ? string.substring(0, length - 3) + ellipsis : string.substring(0, length);
	},

	getTitleForUrl: function(title) {
		return title.replace('-', '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '').toLowerCase();
	},

	setActiveNav: function(item) {

		$(".navbar-nav li.active").removeClass('active').removeClass('nav-active');

		$(".navbar-nav a[href^='" + item + "']").parent().addClass('active').addClass('nav-active');
	},

	kzImage: function(params) {
		return App.getOption('img_cdn') + '?' + $.param(params);
	},

	popupCenter: function(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

		width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 2) - (h / 2)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}
	}

};