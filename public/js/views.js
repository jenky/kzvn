webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189);
	__webpack_require__(50);
	__webpack_require__(49);
	module.exports = __webpack_require__(35);


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	
	var App = {};
	
	App.options = {
		title: 'KzVn',
		api_host: 'http://kzvn.local',
		api_version: 'v1',
		img_cdn: 'https://storage-milano.rhcloud.com/kz/image.php'
	};
	
	App.getCurrentRoute = function() {
		return Backbone.history.fragment;
	};
	
	App.getOption = function(key) {
		return App.options[key] || null;
	};
	
	App.getApiUrl = function(path) {
	
		var url = App.getOption('api_host') + '/' + App.getOption('api_version');
		var path = path ? path : '';
	
		if (url.slice(-1) != '/') {
			url = url + '/';
		}
	
		return url + path;
	}
	
	App.getApiEnpoint = function(path, model) {
	
		var url = App.getApiUrl() + path;
	
		if (model.id !== undefined && model.id) {
			url = url + '/';
		}
	
		return url;
	}
	
	module.exports = App;

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	var React = __webpack_require__(11);
	__webpack_require__(24);
	
	var RecordListItem = __webpack_require__(271);
	
	var RecordStream = React.createClass({displayName: "RecordStream",
		
		mixins: [Backbone.React.Component.mixin],
		
		render: function () {
			return (
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-md-12"}, 
						React.createElement("div", {className: "panel panel-white"}, 
							React.createElement("div", {className: "panel-heading clearfix"}, 
								React.createElement("h4", {className: "panel-title"}, "Stream")
							), 
							React.createElement("div", {className: "panel-body"}, 
								React.createElement("div", {className: "table-responsive"}, 
									React.createElement("table", {className: "table"}, 
										React.createElement("thead", null, 
											React.createElement("tr", null, 
												React.createElement("th", null, "Mapname"), 
												React.createElement("th", null, "Player"), 
												React.createElement("th", null, "Time"), 
												React.createElement("th", null, "Date"), 
												React.createElement("th", null, "Weapon")
											)
										), 
										React.createElement("tbody", null, 
											 this.state.collection.map(function(entry) { return (
												React.createElement(RecordListItem, {key: entry.id, data: entry})
											); }, this)										
										)
									)
								)
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = RecordStream;

/***/ },

/***/ 46:
/***/ function(module, exports) {

	/** @jsx React.DOM */(function() {
	  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	  Util = (function() {
	    function Util() {}
	
	    Util.prototype.extend = function(custom, defaults) {
	      var key, value;
	      for (key in defaults) {
	        value = defaults[key];
	        if (custom[key] == null) {
	          custom[key] = value;
	        }
	      }
	      return custom;
	    };
	
	    Util.prototype.isMobile = function(agent) {
	      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
	    };
	
	    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
	      var customEvent;
	      if (bubble == null) {
	        bubble = false;
	      }
	      if (cancel == null) {
	        cancel = false;
	      }
	      if (detail == null) {
	        detail = null;
	      }
	      if (document.createEvent != null) {
	        customEvent = document.createEvent('CustomEvent');
	        customEvent.initCustomEvent(event, bubble, cancel, detail);
	      } else if (document.createEventObject != null) {
	        customEvent = document.createEventObject();
	        customEvent.eventType = event;
	      } else {
	        customEvent.eventName = event;
	      }
	      return customEvent;
	    };
	
	    Util.prototype.emitEvent = function(elem, event) {
	      if (elem.dispatchEvent != null) {
	        return elem.dispatchEvent(event);
	      } else if (event in (elem != null)) {
	        return elem[event]();
	      } else if (("on" + event) in (elem != null)) {
	        return elem["on" + event]();
	      }
	    };
	
	    Util.prototype.addEvent = function(elem, event, fn) {
	      if (elem.addEventListener != null) {
	        return elem.addEventListener(event, fn, false);
	      } else if (elem.attachEvent != null) {
	        return elem.attachEvent("on" + event, fn);
	      } else {
	        return elem[event] = fn;
	      }
	    };
	
	    Util.prototype.removeEvent = function(elem, event, fn) {
	      if (elem.removeEventListener != null) {
	        return elem.removeEventListener(event, fn, false);
	      } else if (elem.detachEvent != null) {
	        return elem.detachEvent("on" + event, fn);
	      } else {
	        return delete elem[event];
	      }
	    };
	
	    Util.prototype.innerHeight = function() {
	      if ('innerHeight' in window) {
	        return window.innerHeight;
	      } else {
	        return document.documentElement.clientHeight;
	      }
	    };
	
	    return Util;
	
	  })();
	
	  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
	    function WeakMap() {
	      this.keys = [];
	      this.values = [];
	    }
	
	    WeakMap.prototype.get = function(key) {
	      var i, item, j, len, ref;
	      ref = this.keys;
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        item = ref[i];
	        if (item === key) {
	          return this.values[i];
	        }
	      }
	    };
	
	    WeakMap.prototype.set = function(key, value) {
	      var i, item, j, len, ref;
	      ref = this.keys;
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        item = ref[i];
	        if (item === key) {
	          this.values[i] = value;
	          return;
	        }
	      }
	      this.keys.push(key);
	      return this.values.push(value);
	    };
	
	    return WeakMap;
	
	  })());
	
	  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
	    function MutationObserver() {
	      if (typeof console !== "undefined" && console !== null) {
	        console.warn('MutationObserver is not supported by your browser.');
	      }
	      if (typeof console !== "undefined" && console !== null) {
	        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
	      }
	    }
	
	    MutationObserver.notSupported = true;
	
	    MutationObserver.prototype.observe = function() {};
	
	    return MutationObserver;
	
	  })());
	
	  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
	    this.getPropertyValue = function(prop) {
	      var ref;
	      if (prop === 'float') {
	        prop = 'styleFloat';
	      }
	      if (getComputedStyleRX.test(prop)) {
	        prop.replace(getComputedStyleRX, function(_, _char) {
	          return _char.toUpperCase();
	        });
	      }
	      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
	    };
	    return this;
	  };
	
	  getComputedStyleRX = /(\-([a-z]){1})/g;
	
	  this.WOW = (function() {
	    WOW.prototype.defaults = {
	      boxClass: 'wow',
	      animateClass: 'animated',
	      offset: 0,
	      mobile: true,
	      live: true,
	      callback: null
	    };
	
	    function WOW(options) {
	      if (options == null) {
	        options = {};
	      }
	      this.scrollCallback = bind(this.scrollCallback, this);
	      this.scrollHandler = bind(this.scrollHandler, this);
	      this.resetAnimation = bind(this.resetAnimation, this);
	      this.start = bind(this.start, this);
	      this.scrolled = true;
	      this.config = this.util().extend(options, this.defaults);
	      this.animationNameCache = new WeakMap();
	      this.wowEvent = this.util().createEvent(this.config.boxClass);
	    }
	
	    WOW.prototype.init = function() {
	      var ref;
	      this.element = window.document.documentElement;
	      if ((ref = document.readyState) === "interactive" || ref === "complete") {
	        this.start();
	      } else {
	        this.util().addEvent(document, 'DOMContentLoaded', this.start);
	      }
	      return this.finished = [];
	    };
	
	    WOW.prototype.start = function() {
	      var box, j, len, ref;
	      this.stopped = false;
	      this.boxes = (function() {
	        var j, len, ref, results;
	        ref = this.element.querySelectorAll("." + this.config.boxClass);
	        results = [];
	        for (j = 0, len = ref.length; j < len; j++) {
	          box = ref[j];
	          results.push(box);
	        }
	        return results;
	      }).call(this);
	      this.all = (function() {
	        var j, len, ref, results;
	        ref = this.boxes;
	        results = [];
	        for (j = 0, len = ref.length; j < len; j++) {
	          box = ref[j];
	          results.push(box);
	        }
	        return results;
	      }).call(this);
	      if (this.boxes.length) {
	        if (this.disabled()) {
	          this.resetStyle();
	        } else {
	          ref = this.boxes;
	          for (j = 0, len = ref.length; j < len; j++) {
	            box = ref[j];
	            this.applyStyle(box, true);
	          }
	        }
	      }
	      if (!this.disabled()) {
	        this.util().addEvent(window, 'scroll', this.scrollHandler);
	        this.util().addEvent(window, 'resize', this.scrollHandler);
	        this.interval = setInterval(this.scrollCallback, 50);
	      }
	      if (this.config.live) {
	        return new MutationObserver((function(_this) {
	          return function(records) {
	            var k, len1, node, record, results;
	            results = [];
	            for (k = 0, len1 = records.length; k < len1; k++) {
	              record = records[k];
	              results.push((function() {
	                var l, len2, ref1, results1;
	                ref1 = record.addedNodes || [];
	                results1 = [];
	                for (l = 0, len2 = ref1.length; l < len2; l++) {
	                  node = ref1[l];
	                  results1.push(this.doSync(node));
	                }
	                return results1;
	              }).call(_this));
	            }
	            return results;
	          };
	        })(this)).observe(document.body, {
	          childList: true,
	          subtree: true
	        });
	      }
	    };
	
	    WOW.prototype.stop = function() {
	      this.stopped = true;
	      this.util().removeEvent(window, 'scroll', this.scrollHandler);
	      this.util().removeEvent(window, 'resize', this.scrollHandler);
	      if (this.interval != null) {
	        return clearInterval(this.interval);
	      }
	    };
	
	    WOW.prototype.sync = function(element) {
	      if (MutationObserver.notSupported) {
	        return this.doSync(this.element);
	      }
	    };
	
	    WOW.prototype.doSync = function(element) {
	      var box, j, len, ref, results;
	      if (element == null) {
	        element = this.element;
	      }
	      if (element.nodeType !== 1) {
	        return;
	      }
	      element = element.parentNode || element;
	      ref = element.querySelectorAll("." + this.config.boxClass);
	      results = [];
	      for (j = 0, len = ref.length; j < len; j++) {
	        box = ref[j];
	        if (indexOf.call(this.all, box) < 0) {
	          this.boxes.push(box);
	          this.all.push(box);
	          if (this.stopped || this.disabled()) {
	            this.resetStyle();
	          } else {
	            this.applyStyle(box, true);
	          }
	          results.push(this.scrolled = true);
	        } else {
	          results.push(void 0);
	        }
	      }
	      return results;
	    };
	
	    WOW.prototype.show = function(box) {
	      this.applyStyle(box);
	      box.className = box.className + " " + this.config.animateClass;
	      if (this.config.callback != null) {
	        this.config.callback(box);
	      }
	      this.util().emitEvent(box, this.wowEvent);
	      this.util().addEvent(box, 'animationend', this.resetAnimation);
	      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
	      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
	      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
	      return box;
	    };
	
	    WOW.prototype.applyStyle = function(box, hidden) {
	      var delay, duration, iteration;
	      duration = box.getAttribute('data-wow-duration');
	      delay = box.getAttribute('data-wow-delay');
	      iteration = box.getAttribute('data-wow-iteration');
	      return this.animate((function(_this) {
	        return function() {
	          return _this.customStyle(box, hidden, duration, delay, iteration);
	        };
	      })(this));
	    };
	
	    WOW.prototype.animate = (function() {
	      if ('requestAnimationFrame' in window) {
	        return function(callback) {
	          return window.requestAnimationFrame(callback);
	        };
	      } else {
	        return function(callback) {
	          return callback();
	        };
	      }
	    })();
	
	    WOW.prototype.resetStyle = function() {
	      var box, j, len, ref, results;
	      ref = this.boxes;
	      results = [];
	      for (j = 0, len = ref.length; j < len; j++) {
	        box = ref[j];
	        results.push(box.style.visibility = 'visible');
	      }
	      return results;
	    };
	
	    WOW.prototype.resetAnimation = function(event) {
	      var target;
	      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
	        target = event.target || event.srcElement;
	        return target.className = target.className.replace(this.config.animateClass, '').trim();
	      }
	    };
	
	    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
	      if (hidden) {
	        this.cacheAnimationName(box);
	      }
	      box.style.visibility = hidden ? 'hidden' : 'visible';
	      if (duration) {
	        this.vendorSet(box.style, {
	          animationDuration: duration
	        });
	      }
	      if (delay) {
	        this.vendorSet(box.style, {
	          animationDelay: delay
	        });
	      }
	      if (iteration) {
	        this.vendorSet(box.style, {
	          animationIterationCount: iteration
	        });
	      }
	      this.vendorSet(box.style, {
	        animationName: hidden ? 'none' : this.cachedAnimationName(box)
	      });
	      return box;
	    };
	
	    WOW.prototype.vendors = ["moz", "webkit"];
	
	    WOW.prototype.vendorSet = function(elem, properties) {
	      var name, results, value, vendor;
	      results = [];
	      for (name in properties) {
	        value = properties[name];
	        elem["" + name] = value;
	        results.push((function() {
	          var j, len, ref, results1;
	          ref = this.vendors;
	          results1 = [];
	          for (j = 0, len = ref.length; j < len; j++) {
	            vendor = ref[j];
	            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
	          }
	          return results1;
	        }).call(this));
	      }
	      return results;
	    };
	
	    WOW.prototype.vendorCSS = function(elem, property) {
	      var j, len, ref, result, style, vendor;
	      style = getComputedStyle(elem);
	      result = style.getPropertyCSSValue(property);
	      ref = this.vendors;
	      for (j = 0, len = ref.length; j < len; j++) {
	        vendor = ref[j];
	        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
	      }
	      return result;
	    };
	
	    WOW.prototype.animationName = function(box) {
	      var animationName;
	      try {
	        animationName = this.vendorCSS(box, 'animation-name').cssText;
	      } catch (_error) {
	        animationName = getComputedStyle(box).getPropertyValue('animation-name');
	      }
	      if (animationName === 'none') {
	        return '';
	      } else {
	        return animationName;
	      }
	    };
	
	    WOW.prototype.cacheAnimationName = function(box) {
	      return this.animationNameCache.set(box, this.animationName(box));
	    };
	
	    WOW.prototype.cachedAnimationName = function(box) {
	      return this.animationNameCache.get(box);
	    };
	
	    WOW.prototype.scrollHandler = function() {
	      return this.scrolled = true;
	    };
	
	    WOW.prototype.scrollCallback = function() {
	      var box;
	      if (this.scrolled) {
	        this.scrolled = false;
	        this.boxes = (function() {
	          var j, len, ref, results;
	          ref = this.boxes;
	          results = [];
	          for (j = 0, len = ref.length; j < len; j++) {
	            box = ref[j];
	            if (!(box)) {
	              continue;
	            }
	            if (this.isVisible(box)) {
	              this.show(box);
	              continue;
	            }
	            results.push(box);
	          }
	          return results;
	        }).call(this);
	        if (!(this.boxes.length || this.config.live)) {
	          return this.stop();
	        }
	      }
	    };
	
	    WOW.prototype.offsetTop = function(element) {
	      var top;
	      while (element.offsetTop === void 0) {
	        element = element.parentNode;
	      }
	      top = element.offsetTop;
	      while (element = element.offsetParent) {
	        top += element.offsetTop;
	      }
	      return top;
	    };
	
	    WOW.prototype.isVisible = function(box) {
	      var bottom, offset, top, viewBottom, viewTop;
	      offset = box.getAttribute('data-wow-offset') || this.config.offset;
	      viewTop = window.pageYOffset;
	      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
	      top = this.offsetTop(box);
	      bottom = top + box.clientHeight;
	      return top <= viewBottom && bottom >= viewTop;
	    };
	
	    WOW.prototype.util = function() {
	      return this._util != null ? this._util : this._util = new Util();
	    };
	
	    WOW.prototype.disabled = function() {
	      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
	    };
	
	    return WOW;
	
	  })();
	
	}).call(this);


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var App = __webpack_require__(17);
	var Backbone = __webpack_require__(7);
	
	var Model = __webpack_require__(48);
	
	module.exports = Backbone.Collection.extend({
		model: Model,
		url: App.getApiUrl() + 'records'
	});

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var App = __webpack_require__(17);
	var Backbone = __webpack_require__(7);
	
	module.exports = Backbone.Model.extend({
		
		urlRoot: App.getApiEnpoint('records', this)
		// urlRoot: function() {
		// 	var base = App.getApiUrl() + 'videos';
		// 	return this.id ? base + '/' : base;
		// }
	});

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	var React = __webpack_require__(11);
	
	module.exports = React.createClass({displayName: "module.exports",
			
		render: function () {
			return React.createElement("div", {className: "text-center"}, "Oops! The page you are looking for can not be found");
		}
	});

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	var React = __webpack_require__(11);
	var App = __webpack_require__(17);
	__webpack_require__(24);
	var wow = __webpack_require__(46);
	
	var Home = React.createClass({displayName: "Home",
	
		mixins: [Backbone.React.Component.mixin],
	
		initView: function() {
			new wow.WOW().init();
	
			var Collection = __webpack_require__(47);
			var collection = new Collection();
	
			collection.url = App.getApiUrl('records/stream');
	
			collection.fetch({
				// data: {_sort: '-created_at'/*, _limit: 6, _offset: 0*/},
				success: function(self, response) {
					var View = __webpack_require__(35);
					React.render(React.createElement(View, {collection: self}), document.getElementById('stream'));
				}
			});
		},
	
		componentDidMount: function() {
			this.initView();
		},
	
		componentDidUpdate: function() {
			this.initView();
		},
	
		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("div", {className: "home", id: "home"}, 
						React.createElement("div", {className: "overlay"}), 
						React.createElement("div", {className: "container"}, 
							React.createElement("div", {className: "row"}, 
								React.createElement("div", {className: "home-text col-md-8"}, 
									React.createElement("h1", {className: "wow fadeInDown", "data-wow-delay": "1.5s", "data-wow-duration": "1.5s", "data-wow-offset": 10}, "Responsive Admin Dashboard Template."), 
									React.createElement("p", {className: "lead wow fadeInDown", "data-wow-delay": "2s", "data-wow-duration": "1.5s", "data-wow-offset": 10}, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", React.createElement("br", null), "Aenean commodo ligula eget dolor."), 
									React.createElement("a", {href: "http://themeforest.net/item/modern-responsive-admin-dashboard-template/11004840", target: "_blank", className: "btn btn-default btn-rounded btn-lg wow fadeInUp", "data-wow-delay": "2.5s", "data-wow-duration": "1.5s", "data-wow-offset": 10}, "Download"), 
									React.createElement("a", {href: "../index.html", target: "_blank", className: "btn btn-success btn-rounded btn-lg wow fadeInUp", "data-wow-delay": "2.5s", "data-wow-duration": "1.5s", "data-wow-offset": 10}, "Live Preview")
								), 
								React.createElement("div", {className: "scroller"}, 
									React.createElement("div", {className: "mouse"}, React.createElement("div", {className: "wheel"}))
								)
							)
						)
					), 
					React.createElement("div", {className: "container m-t-lg m-b-lg", id: "stream"})
				)
			);
		}
	});
	
	module.exports = Home;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/** @jsx React.DOM */var App = __webpack_require__(17);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	var React = __webpack_require__(11);
	__webpack_require__(24);
	
	module.exports = React.createClass({displayName: "module.exports",
		
		mixins: [Backbone.React.Component.mixin],
		
		render: function () {
			return React.createElement("div", {className: "text-center"}, "This is about page");
		}
	});

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Backbone = __webpack_require__(7);
	var React = __webpack_require__(11);
	var helper = __webpack_require__(155);
	__webpack_require__(24);
	
	module.exports = React.createClass({displayName: "module.exports",
		
		mixins: [Backbone.React.Component.mixin],
		
		render: function () {
			var data = this.props.data;
			return (
				React.createElement("tr", null, 
					React.createElement("td", null, React.createElement("a", {href: '/r/' + data.mapname}, data.mapname)), 
					React.createElement("td", null, 
						 data.steam_is_valid ? (
							React.createElement("a", {href: '/p/' + data.authid}, data.name)
						) : (
							React.createElement("span", null, data.name)
						) 
					), 
					React.createElement("td", {dangerouslySetInnerHTML: {__html: data.display_time_html}}), 
					React.createElement("td", null, data.date), 
					React.createElement("td", {style: {verticalAlign: 'middle'}}, React.createElement("img", {src: helper.kzImage({weapon: data.weapon}), className: "img-responsive"}))
				)
			);
		}
	});

/***/ }

});
//# sourceMappingURL=views.js.map