var toastr = require('toastr');

module.exports = {

	options: {
		"closeButton": true,
		"debug": false,
		"newestOnTop": true,
		"progressBar": false,
		"positionClass": "toast-top-right",
		"preventDuplicates": true,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut",
		"tapToDismiss": true
	},

	notify: function(type, title, message) {
		toastr.options = this.getOptions();
		toastr[type](title, message);
	},

	success: function(title, message) {
		this.notify('success', title, message);
	},

	info: function(title, message) {
		this.notify('info', title, message);
	},

	warning: function(title, message) {
		this.notify('warning', title, message);
	},

	error: function(title, message) {
		this.notify('error', title, message);
	},

	setOptions: function(options) {
		this.options = $.extend(this.options, options);
	},

	getOptions: function() {
		return this.options;
	}

}