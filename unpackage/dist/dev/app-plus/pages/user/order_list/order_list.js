"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************************!*\
  !*** D:/uni/shuiguonew/main.js?{"page":"pages%2Fuser%2Forder_list%2Forder_list"} ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user/order_list/order_list.nvue?mpType=page */ 7);

        
        
        
        _pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/user/order_list/order_list'
        _pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-23720191024001","_inBundle":false,"_integrity":"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz","_shasum":"18272814446a9bc6053bc92666ec7064a1767588","_spec":"@dcloudio/uni-stat@next","_where":"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"a725c04ef762e5df78a9a69d140c2666e0de05fc","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-23720191024001"};

/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** D:/uni/shuiguonew/pages.json?{"type":"style"} ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/tabBar/home/home":{"navigationBarTextStyle":"white","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#000","onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"homeTitleNvue","path":"pages/tabBar/home/subNvue/homeTitleNvue","type":"navigationBar"}],"usingComponents":{}},"pages/tabBar/category/categorys":{"navigationBarTextStyle":"white","enablePullDownRefresh":true,"onReachBottomDistance":50,"navigationBarBackgroundColor":"#000","backgroundColorTop":"#000","navigationStyle":"custom","titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"cateTitleNvue","path":"pages/tabBar/category/subNvue/cateTitleNvue","type":"navigationBar"}],"usingComponents":{"lists":"/components/xm/list","lister":"/components/xm/lister"}},"pages/tabBar/cart/cart":{"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"cartTitleNvue","path":"pages/tabBar/cart/subNvue/cartTitleNvue","type":"navigationBar"}],"usingComponents":{}},"pages/tabBar/user/user":{"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#000","backgroundColorTop":"#000","navigationBarTextStyle":"white","titleNView":false,"subNVues":[{"id":"userTitleNvue","path":"pages/tabBar/user/subNvue/userTitleNvue","type":"navigationBar"}],"usingComponents":{"cnixihuan":"/components/xm/cnixihuan"}},"pages/goods/goods":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#f1f1f1","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{}},"pages/login/login":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}},"pages/login/register":{"navigationBarTitleText":"注册账号","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}},"pages/login/resetpasswd":{"navigationBarTitleText":"重置密码","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}},"pages/order/confirmation":{"navigationBarTitleText":"确认订单","softinputNavBar":"none","usingComponents":{}},"pages/user/setting/setting":{"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的设置","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}},"pages/user/myQR/myQR":{"navigationBarTitleText":"我的二维码","bounce":"none","usingComponents":{}},"pages/msg/msg":{"enablePullDownRefresh":true,"navigationBarTitleText":"消息列表","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","usingComponents":{}},"pages/msg/chat/chat":{"navigationBarBackgroundColor":"#f2f2f2","backgroundColorTop":"#e5e5e5","backgroundColorBottom":"#e5e5e5","softinputNavBar":"none","bounce":"none","usingComponents":{}},"pages/user/coupon/coupon":{"navigationBarTitleText":"优惠券","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}},"pages/user/keep/keep":{"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}},"pages/user/address/address":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"地址管理","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}},"pages/user/address/edit/edit":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"编辑收件人地址","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}},"pages/user/deposit/deposit":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"充值","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}},"pages/pay/payment/payment":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"订单支付","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}},"pages/pay/success/success":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"支付成功","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}},"pages/goods/ratings/ratings":{"navigationBarTitleText":"商品评论","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}}},"globalStyle":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff"}});

/***/ }),
/* 5 */
/*!****************************************************!*\
  !*** D:/uni/shuiguonew/pages.json?{"type":"stat"} ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__020E11E"});

/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** D:/uni/shuiguonew/main.js?{"type":"appStyle"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/*!***************************************************************************!*\
  !*** D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order_list.nvue?vue&type=template&id=613246ae&mpType=page */ 8);
/* harmony import */ var _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order_list.nvue?vue&type=script&lang=js&mpType=page */ 10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13).default)
          }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "29e0e99d"
  
)

injectStyles.call(component)
component.options.__file = "uni/shuiguonew/pages/user/order_list/order_list.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/*!*********************************************************************************************************!*\
  !*** D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=template&id=613246ae&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./order_list.nvue?vue&type=template&id=613246ae&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_template_id_613246ae_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 9 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=template&id=613246ae&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: ["tabs"] }, [
      _c(
        "div",
        { staticClass: ["tab"] },
        _vm._l(_vm.orderType, function(tab, tbIndex) {
          return _c(
            "text",
            {
              key: tbIndex,
              staticClass: ["tab-text"],
              class: [tbIndex == _vm.selectIndex ? "tab-text-on" : ""],
              on: {
                click: function($event) {
                  _vm.showType(tbIndex)
                }
              }
            },
            [_vm._v(_vm._s(tab))]
          )
        }),
        0
      ),
      _c("div", {
        staticClass: ["border"],
        style: { transform: "translateX(" + _vm.translateXW + "px)" }
      })
    ]),
    _c(
      "slider",
      {
        staticClass: ["slider"],
        attrs: { autoPlay: false, infinite: false, index: _vm.selectIndex },
        on: { change: _vm.sliderChange }
      },
      _vm._l(_vm.orderList, function(page, index) {
        return _c(
          "list",
          { key: index, staticClass: ["frame"] },
          [
            page.length == 0
              ? _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
                  _vm._m(0, true)
                ])
              : _vm._e(),
            _vm._l(page, function(row, rowIndex) {
              return page.length > 0
                ? _c(
                    "cell",
                    {
                      key: rowIndex,
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [
                      _c("div", { staticClass: ["row"] }, [
                        _c("text", { staticClass: ["type"] }, [
                          _vm._v(_vm._s(_vm.typeText[row.type]))
                        ]),
                        _c("div", { staticClass: ["order-info"] }, [
                          _c("div", { staticClass: ["order-info-left"] }, [
                            _c("image", {
                              staticClass: ["left-image"],
                              attrs: { src: row.img }
                            })
                          ]),
                          _c("div", { staticClass: ["order-info-right"] }, [
                            _c(
                              "text",
                              { staticClass: ["order-info-right-name"] },
                              [_vm._v(_vm._s(row.name))]
                            ),
                            _c(
                              "text",
                              { staticClass: ["order-info-right-spec"] },
                              [_vm._v(_vm._s(row.spec))]
                            ),
                            _c(
                              "div",
                              {
                                staticClass: ["order-info-right-price-number"]
                              },
                              [
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-unit"] },
                                  [_vm._v("￥")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-price"] },
                                  [_vm._v(_vm._s(row.price))]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: ["order-info-right-multiplier"]
                                  },
                                  [_vm._v("x")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-number"] },
                                  [_vm._v(_vm._s(row.numner))]
                                )
                              ]
                            )
                          ])
                        ]),
                        _c("div", { staticClass: ["detail"] }, [
                          _c("text", { staticClass: ["detail-number"] }, [
                            _vm._v("共" + _vm._s(row.numner) + "件商品")
                          ]),
                          _c("div", { staticClass: ["detail-sum"] }, [
                            _c("text", { staticClass: ["detail-sum-text"] }, [
                              _vm._v("合计￥")
                            ]),
                            _c(
                              "text",
                              { staticClass: ["detail-sum-payment"] },
                              [_vm._v(_vm._s(row.payment))]
                            ),
                            _c(
                              "text",
                              { staticClass: ["detail-sum-nominal"] },
                              [_vm._v("(含运费 ￥" + _vm._s(row.freight) + ")")]
                            )
                          ])
                        ]),
                        _c("div", { staticClass: ["btns"] }, [
                          row.type == "unpaid"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        _vm.cancelOrder(row)
                                      }
                                    }
                                  },
                                  [_vm._v("取消订单")]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "pay"],
                                    on: {
                                      click: function($event) {
                                        _vm.toPayment(row)
                                      }
                                    }
                                  },
                                  [_vm._v("付款")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "back"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        _vm.remindDeliver(row)
                                      }
                                    }
                                  },
                                  [_vm._v("提醒发货")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "unreceived"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        _vm.showLogistics(row)
                                      }
                                    }
                                  },
                                  [_vm._v("查看物流")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "pay"] },
                                  [_vm._v("确认收货")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "pay"] },
                                  [_vm._v("我要退货")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "received"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("评价")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("再次购买")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "completed"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("再次购买")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "refunds"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("查看进度")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "cancelled"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("已取消")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            })
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: ["onorder"] }, [
      _c("image", {
        staticClass: ["onorder-image"],
        attrs: {
          src: "https://ae01.alicdn.com/kf/HTB1FGJ7XED1gK0jSZFG762d3FXam.png"
        }
      }),
      _c("text", { staticClass: ["onorder-text"] }, [_vm._v("没有相关订单")])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 10 */
/*!***************************************************************************************************!*\
  !*** D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--3-0!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./order_list.nvue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      selectIndex: 0,
      translateX: [0, 125, 250, 375, 500, 625, 750],
      translateXW: 0,
      orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
      typeText: {
        unpaid: '等待付款',
        back: '等待商家发货',
        unreceived: '商家已发货',
        received: '等待用户评价',
        completed: '交易已完成',
        refunds: '商品退货处理中',
        cancelled: '订单已取消' },

      orderList: [
      [
      {
        type: 'unpaid',
        ordersn: 0,
        goods_id: 0,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unpaid',
        ordersn: 1,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'back',
        ordersn: 2,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unreceived',
        ordersn: 3,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'received',
        ordersn: 4,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'completed',
        ordersn: 5,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'refunds',
        ordersn: 6,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1_Mefe3aH3KVjSZFjq6AFWpXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'cancelled',
        ordersn: 7,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1Lu1pe8Cw3KVjSZFuq6AAOpXaI.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [
      {
        type: 'unpaid',
        ordersn: 0,
        goods_id: 0,
        img: 'https://ae01.alicdn.com/kf/HTB1iMife3aH3KVjSZFjq6AFWpXaA.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unpaid',
        ordersn: 1,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1D6Sfe4iH3KVjSZPfq6xBiVXaG.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [
        //无
      ],
      [
      {
        type: 'unreceived',
        ordersn: 3,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1IjSfe4iH3KVjSZPfq6xBiVXa4.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [
      {
        type: 'received',
        ordersn: 4,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [
      {
        type: 'refunds',
        ordersn: 6,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }]] };




  },
  created: function created() {
    this.selectIndex = parseInt(uni.getStorageSync('tbIndex')) + 1;
  },
  methods: {
    showType: function showType(tbIndex) {
      this.selectIndex = tbIndex;
      this.translateXW = this.translateX[tbIndex];
      console.log(__f__('this.selectIndex: ' + this.selectIndex, " at pages\\user\\order_list\\order_list.nvue:268"));
    },
    sliderChange: function sliderChange(e) {
      this.selectIndex = e.index;
      this.translateXW = this.translateX[e.index];
      console.log(__f__('e.index: ' + JSON.stringify(e.index), " at pages\\user\\order_list\\order_list.nvue:273"));
    },

    remindDeliver: function remindDeliver(row) {
      uni.showToast({
        title: '已提醒商家发货' });

    },
    cancelOrder: function cancelOrder(row) {var _this = this;
      uni.showModal({
        title: '取消订单',
        content: '确定取消此订单？',
        success: function success(res) {
          if (res.confirm) {
            console.log(__f__('用户点击确定', " at pages\\user\\order_list\\order_list.nvue:287"));
            _this.doCancelOrder(row.ordersn);
          } else if (res.cancel) {
            console.log(__f__('用户点击取消', " at pages\\user\\order_list\\order_list.nvue:290"));
          }
        } });

    },
    doCancelOrder: function doCancelOrder(ordersn) {
      var typeNum = this.orderList.length;
      for (var i = 0; i < typeNum; i++) {
        var list = this.orderList[i];
        var orderNum = list.length;
        if (orderNum > 0 && list[0].type == 'unpaid') {
          for (var j = 0; j < orderNum; j++) {
            if (this.orderList[i][j].ordersn == ordersn) {
              this.orderList[i][j].type = 'cancelled';
              break;
            }
          }
        }
      }
    },
    toPayment: function toPayment(row) {
      //本地模拟订单提交UI效果
      uni.showLoading({
        title: '正在获取订单...' });

      var paymentOrder = [];
      paymentOrder.push(row);
      setTimeout(function () {
        uni.setStorage({
          key: 'paymentOrder',
          data: paymentOrder,
          success: function success() {
            uni.hideLoading();
            uni.navigateTo({
              url: '../../pay/payment/payment?amount=' + row.payment });

          } });

      }, 500);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)["default"]))

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  return msg;
}

/***/ }),
/* 13 */
/*!***********************************************************************************************************!*\
  !*** D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!D:/uni/shuiguonew/pages/user/order_list/order_list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tabs": {
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "height": "80",
    "alignItems": "center",
    "backgroundColor": "#f8f8f8"
  },
  "tab": {
    "width": "750",
    "height": "76",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "tab-text": {
    "width": "125",
    "height": "76",
    "lineHeight": "76",
    "textAlign": "center",
    "fontSize": "26",
    "color": "#444444"
  },
  "tab-text-on": {
    "color": "#f06c7a"
  },
  "border": {
    "width": "75",
    "marginTop": 0,
    "marginRight": "25",
    "marginBottom": 0,
    "marginLeft": "25",
    "height": "4",
    "backgroundColor": "#f06c7a",
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionDelay": 0,
    "transitionTimingFunction": "ease"
  },
  "@TRANSITION": {
    "border": {
      "property": "transform",
      "duration": 300,
      "delay": 0,
      "timingFunction": "ease"
    }
  },
  "slider": {
    "width": "750",
    "top": "80",
    "bottom": 0,
    "backgroundColor": "#f3f3f3",
    "position": "absolute"
  },
  "frame": {
    "width": "750",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "onorder": {
    "width": "750",
    "height": "375",
    "display": "flex",
    "justifyContent": "center",
    "alignContent": "center",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "marginTop": "50"
  },
  "onorder-image": {
    "width": 150,
    "height": 150,
    "borderRadius": 150
  },
  "onorder-text": {
    "width": 750,
    "height": "60",
    "fontSize": "28",
    "color": "#444444",
    "textAlign": "center",
    "lineHeight": "60"
  },
  "row": {
    "width": "710",
    "height": "400",
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "borderRadius": "10",
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "flexDirection": "column"
  },
  "type": {
    "width": "710",
    "fontSize": "26",
    "color": "#ec652f",
    "height": "50",
    "textAlign": "left"
  },
  "order-info": {
    "width": "710",
    "height": "188",
    "flexDirection": "row"
  },
  "left": {
    "flexShrink": 0,
    "width": "188",
    "height": "188"
  },
  "left-image": {
    "width": "188",
    "height": "188",
    "borderRadius": "10"
  },
  "order-info-right": {
    "width": "472",
    "height": "188",
    "marginLeft": "10",
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "order-info-right-name": {
    "width": "472",
    "height": "94",
    "fontSize": "28",
    "overflow": "hidden"
  },
  "order-info-right-spec": {
    "color": "#a7a7a7",
    "fontSize": "22"
  },
  "order-info-right-price-number": {
    "position": "absolute",
    "bottom": 0,
    "width": "472",
    "color": "#333333",
    "justifyContent": "flex-end",
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "order-info-right-unit": {
    "fontSize": "20"
  },
  "order-info-right-multiplier": {
    "fontSize": "20"
  },
  "order-info-right-price": {
    "fontSize": "24"
  },
  "order-info-right-number": {
    "fontSize": "24"
  },
  "detail": {
    "width": "670",
    "height": "60",
    "justifyContent": "flex-end",
    "alignItems": "flex-end",
    "flexDirection": "row"
  },
  "detail-number": {
    "fontSize": "26"
  },
  "detail-sum": {
    "paddingTop": 0,
    "paddingRight": "8",
    "paddingBottom": 0,
    "paddingLeft": "8",
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "detail-sum-text": {
    "fontSize": "26"
  },
  "detail-sum-payment": {
    "fontSize": "30"
  },
  "detail-sum-nominal": {
    "fontSize": "26"
  },
  "btns": {
    "width": "670",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btns-div": {
    "width": "670",
    "height": "50",
    "justifyContent": "flex-end",
    "flexDirection": "row"
  },
  "btns-btn": {
    "minWidth": "120",
    "height": "50",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "borderRadius": "50",
    "lineHeight": "50",
    "textAlign": "center",
    "fontSize": "28",
    "marginLeft": "20",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "default": {
    "borderColor": "#cccccc",
    "color": "#666666"
  },
  "pay": {
    "borderColor": "#ec652f",
    "color": "#ec652f"
  }
}

/***/ }),
/* 15 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi91bmkvc2h1aWd1b25ldy9tYWluLmpzPzdjZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby91bmktc3RhdC9kaXN0L2luZGV4LmpzPzkyMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwid2VicGFjazovLy9EOi91bmkvc2h1aWd1b25ldy9wYWdlcy5qc29uPzcyYzIiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS9zaHVpZ3VvbmV3L3BhZ2VzLmpzb24/NjdkNCIsIndlYnBhY2s6Ly8vRDovdW5pL3NodWlndW9uZXcvcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT84NmZkIiwid2VicGFjazovLy9EOi91bmkvc2h1aWd1b25ldy9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzMyMGUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS9zaHVpZ3VvbmV3L3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWU/OTFiNCIsIndlYnBhY2s6Ly8vRDovdW5pL3NodWlndW9uZXcvcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT8zZTM5IiwidW5pLWFwcDovLy9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS9zaHVpZ3VvbmV3L3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWU/ZTIzMSIsIndlYnBhY2s6Ly8vRDovdW5pL3NodWlndW9uZXcvcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT84NmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwiaW5pdFVuaSIsImlzRm4iLCJoYW5kbGVQcm9taXNlIiwicHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsIlJFR0VYIiwiQVBJX05PUk1BTF9MSVNUIiwic2hvdWxkUHJvbWlzZSIsIm5hbWUiLCJ0ZXN0IiwiaW5kZXhPZiIsInByb21pc2lmeSIsImFwaSIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYXJhbXMiLCJBcnJheSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJvbk1lc3NhZ2VDYWxsYmFja3MiLCJvcmlnaW4iLCJvblN1Yk5WdWVNZXNzYWdlIiwid2Vidmlld0lkIiwid2VleFBsdXMiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsInRvIiwid3JhcHBlciIsIiRwcm9jZXNzZWQiLCJjdXJyZW50V2Vidmlld0lkIiwiaXNQb3B1cE5WdWUiLCJob3N0TlZ1ZUlkIiwiX191bmlhcHBfb3JpZ2luX3R5cGUiLCJfX3VuaWFwcF9vcmlnaW5faWQiLCJwb3B1cE5WdWVJZCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiX191bmlhcHBfbWFza19pZCIsIl9fdW5pYXBwX2hvc3QiLCJtYXNrQ29sb3IiLCJfX3VuaWFwcF9tYXNrIiwibWFza1dlYnZpZXciLCJnZXRXZWJ2aWV3QnlJZCIsInBhcmVudCIsIm9sZFNob3ciLCJvbGRIaWRlIiwib2xkQ2xvc2UiLCJjbG9zZSIsInNob3dNYXNrIiwic2V0U3R5bGUiLCJtYXNrIiwiY2xvc2VNYXNrIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJnZXRTdWJOVnVlQnlJZCIsImdldEN1cnJlbnRTdWJOVnVlIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJnbG9iYWxFdmVudCIsImNhbGxiYWNrcyIsIlVOSUFQUF9TRVJWSUNFX05WVUVfSUQiLCJhZGRFdmVudExpc3RlbmVyIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayIsImNyZWF0ZUNhbGxiYWNrIiwicmVzIiwiZXJyTXNnIiwia2VlcEFsaXZlIiwiY2FsbGJhY2tJZCIsInB1Ymxpc2giLCJfcmVmIiwiY3JlYXRlUHVibGlzaCIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsInBsdWdpbk5hbWUiLCJkb20iLCJsb2FkRm9udEZhY2UiLCJmYW1pbHkiLCJzb3VyY2UiLCJkZXNjIiwiYWRkUnVsZSIsImZvbnRGYW1pbHkiLCJzdGF0dXMiLCJnbG9iYWxFdmVudCQxIiwiY2FsbGJhY2tzJDEiLCJpc1VuaUFwcFJlYWR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwic3RyZWFtIiwiTUVUSE9EX0dFVCIsIk1FVEhPRF9QT1NUIiwiQ09OVEVOVF9UWVBFX0pTT04iLCJDT05URU5UX1RZUEVfRk9STSIsInNlcmlhbGl6ZSIsImNvbnRlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImpvaW4iLCJoZWFkZXIiLCJfcmVmJG1ldGhvZCIsIl9yZWYkZGF0YVR5cGUiLCJkYXRhVHlwZSIsInJlc3BvbnNlVHlwZSIsImFib3J0ZWQiLCJoYXNDb250ZW50VHlwZSIsImhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJfcmVmMiIsIm9rIiwic3RhdHVzVGV4dCIsInJldCIsInN0YXR1c0NvZGUiLCJhYm9ydCIsInN0b3JhZ2UiLCJVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUiLCJnZXRTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVTdG9yYWdlIiwiX3JlZjMiLCJyZW1vdmVJdGVtIiwiY2xlYXJTdG9yYWdlIiwiX3JlZjQiLCJjbGlwYm9hcmQiLCJnZXRDbGlwYm9hcmREYXRhIiwiZ2V0U3RyaW5nIiwic2V0Q2xpcGJvYXJkRGF0YSIsInNldFN0cmluZyIsImdldEVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiRW1pdHRlciIsIiRvbiIsIndhcm4iLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImN0eCIsInNsaWNlIiwiZnJlZXplIiwid3giLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwiY2hvb3NlSW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJnZXRJbWFnZUluZm8iLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiY2hvb3NlVmlkZW8iLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwic2F2ZUZpbGUiLCJnZXRTYXZlZEZpbGVMaXN0IiwiZ2V0U2F2ZWRGaWxlSW5mbyIsInJlbW92ZVNhdmVkRmlsZSIsIm9wZW5Eb2N1bWVudCIsImdldFN0b3JhZ2VJbmZvIiwiY2hvb3NlTG9jYXRpb24iLCJvcGVuTG9jYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwibWFrZVBob25lQ2FsbCIsInNjYW5Db2RlIiwic2V0U2NyZWVuQnJpZ2h0bmVzcyIsImdldFNjcmVlbkJyaWdodG5lc3MiLCJzZXRLZWVwU2NyZWVuT24iLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVTaG9ydCIsImFkZFBob25lQ29udGFjdCIsInNob3dUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZVRvYXN0IiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJzaG93QWN0aW9uU2hlZXQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJzZXROYXZpZ2F0aW9uQmFyQ29sb3IiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsInJlTGF1bmNoIiwic3dpdGNoVGFiIiwibmF2aWdhdGVCYWNrIiwiZ2V0UHJvdmlkZXIiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwic2hhcmUiLCJyZXF1ZXN0UGF5bWVudCIsInN1YnNjcmliZVB1c2giLCJ1bnN1YnNjcmliZVB1c2giLCJvblB1c2giLCJvZmZQdXNoIiwiYmFzZVVuaSIsIm9zIiwibnZ1ZSIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwiY3JlYXRlVW5pIiwiZ2V0VW5pIiwiV2VleFBsdXMiLCJ0eXBvZiIsInMiLCJzdWJzdHJpbmciLCJmb3JtYXRMb2ciLCJtc2dzIiwidlR5cGUiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwicG9wIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDNU5BO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL3RhYkJhci9ob21lL2hvbWVcIjp7XCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6XCJ3aGl0ZVwiLFwiZW5hYmxlUHVsbERvd25SZWZyZXNoXCI6dHJ1ZSxcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiMwMDBcIixcIm9uUmVhY2hCb3R0b21EaXN0YW5jZVwiOjUwLFwidGl0bGVOVmlld1wiOmZhbHNlLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJzdWJOVnVlc1wiOlt7XCJpZFwiOlwiaG9tZVRpdGxlTnZ1ZVwiLFwicGF0aFwiOlwicGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlXCIsXCJ0eXBlXCI6XCJuYXZpZ2F0aW9uQmFyXCJ9XSxcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RhYkJhci9jYXRlZ29yeS9jYXRlZ29yeXNcIjp7XCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6XCJ3aGl0ZVwiLFwiZW5hYmxlUHVsbERvd25SZWZyZXNoXCI6dHJ1ZSxcIm9uUmVhY2hCb3R0b21EaXN0YW5jZVwiOjUwLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiIzAwMFwiLFwiYmFja2dyb3VuZENvbG9yVG9wXCI6XCIjMDAwXCIsXCJuYXZpZ2F0aW9uU3R5bGVcIjpcImN1c3RvbVwiLFwidGl0bGVOVmlld1wiOmZhbHNlLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJzdWJOVnVlc1wiOlt7XCJpZFwiOlwiY2F0ZVRpdGxlTnZ1ZVwiLFwicGF0aFwiOlwicGFnZXMvdGFiQmFyL2NhdGVnb3J5L3N1Yk52dWUvY2F0ZVRpdGxlTnZ1ZVwiLFwidHlwZVwiOlwibmF2aWdhdGlvbkJhclwifV0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJsaXN0c1wiOlwiL2NvbXBvbmVudHMveG0vbGlzdFwiLFwibGlzdGVyXCI6XCIvY29tcG9uZW50cy94bS9saXN0ZXJcIn19LFwicGFnZXMvdGFiQmFyL2NhcnQvY2FydFwiOntcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOnRydWUsXCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6XCJibGFja1wiLFwidGl0bGVOVmlld1wiOmZhbHNlLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJzdWJOVnVlc1wiOlt7XCJpZFwiOlwiY2FydFRpdGxlTnZ1ZVwiLFwicGF0aFwiOlwicGFnZXMvdGFiQmFyL2NhcnQvc3ViTnZ1ZS9jYXJ0VGl0bGVOdnVlXCIsXCJ0eXBlXCI6XCJuYXZpZ2F0aW9uQmFyXCJ9XSxcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RhYkJhci91c2VyL3VzZXJcIjp7XCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwiYmFja2dyb3VuZFRleHRTdHlsZVwiOlwibGlnaHRcIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiMwMDBcIixcImJhY2tncm91bmRDb2xvclRvcFwiOlwiIzAwMFwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcInRpdGxlTlZpZXdcIjpmYWxzZSxcInN1Yk5WdWVzXCI6W3tcImlkXCI6XCJ1c2VyVGl0bGVOdnVlXCIsXCJwYXRoXCI6XCJwYWdlcy90YWJCYXIvdXNlci9zdWJOdnVlL3VzZXJUaXRsZU52dWVcIixcInR5cGVcIjpcIm5hdmlnYXRpb25CYXJcIn1dLFwidXNpbmdDb21wb25lbnRzXCI6e1wiY25peGlodWFuXCI6XCIvY29tcG9uZW50cy94bS9jbml4aWh1YW5cIn19LFwicGFnZXMvZ29vZHMvZ29vZHNcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJcIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmMWYxZjFcIixcIm9uUmVhY2hCb3R0b21EaXN0YW5jZVwiOjUwLFwidGl0bGVOVmlld1wiOmZhbHNlLFwiYm91bmNlXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9sb2dpbi9sb2dpblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIueZu+W9lVwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2YwNmM3YVwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcImJvdW5jZVwiOlwibm9uZVwiLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9sb2dpbi9yZWdpc3RlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuazqOWGjOi0puWPt1wiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2YwNmM3YVwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcImJvdW5jZVwiOlwibm9uZVwiLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9sb2dpbi9yZXNldHBhc3N3ZFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIumHjee9ruWvhueggVwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2YwNmM3YVwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcImJvdW5jZVwiOlwibm9uZVwiLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9vcmRlci9jb25maXJtYXRpb25cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLnoa7orqTorqLljZVcIixcInNvZnRpbnB1dE5hdkJhclwiOlwibm9uZVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdXNlci9zZXR0aW5nL3NldHRpbmdcIjp7XCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjZjhmOGY4XCIsXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiJHnmoTorr7nva5cIixcImJhY2tncm91bmRDb2xvclRvcFwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZENvbG9yQm90dG9tXCI6XCIjZjNmM2YzXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy91c2VyL215UVIvbXlRUlwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaIkeeahOS6jOe7tOeggVwiLFwiYm91bmNlXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9tc2cvbXNnXCI6e1wiZW5hYmxlUHVsbERvd25SZWZyZXNoXCI6dHJ1ZSxcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIua2iOaBr+WIl+ihqFwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2YwNmM3YVwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL21zZy9jaGF0L2NoYXRcIjp7XCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjZjJmMmYyXCIsXCJiYWNrZ3JvdW5kQ29sb3JUb3BcIjpcIiNlNWU1ZTVcIixcImJhY2tncm91bmRDb2xvckJvdHRvbVwiOlwiI2U1ZTVlNVwiLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJib3VuY2VcIjpcIm5vbmVcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3VzZXIvY291cG9uL2NvdXBvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS8mOaDoOWIuFwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2YwNmM3YVwiLFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwid2hpdGVcIixcImJvdW5jZVwiOlwibm9uZVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdXNlci9rZWVwL2tlZXBcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiJHnmoTmlLbol49cIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmMDZjN2FcIixcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjpcIndoaXRlXCIsXCJib3VuY2VcIjpcIm5vbmVcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3VzZXIvYWRkcmVzcy9hZGRyZXNzXCI6e1wibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZmZmZmZlwiLFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5Zyw5Z2A566h55CGXCIsXCJiYWNrZ3JvdW5kQ29sb3JUb3BcIjpcIiNmZmZmZmZcIixcImJhY2tncm91bmRDb2xvckJvdHRvbVwiOlwiI2ZmZmZmZlwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdXNlci9hZGRyZXNzL2VkaXQvZWRpdFwiOntcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZmZmZcIixcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIue8lui+keaUtuS7tuS6uuWcsOWdgFwiLFwiYmFja2dyb3VuZENvbG9yVG9wXCI6XCIjZmZmZmZmXCIsXCJiYWNrZ3JvdW5kQ29sb3JCb3R0b21cIjpcIiNmZmZmZmZcIixcInVzaW5nQ29tcG9uZW50c1wiOntcIm1wdnVlLWNpdHktcGlja2VyXCI6XCIvY29tcG9uZW50cy9tcHZ1ZS1jaXR5cGlja2VyL21wdnVlQ2l0eVBpY2tlclwifX0sXCJwYWdlcy91c2VyL2RlcG9zaXQvZGVwb3NpdFwiOntcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZmZmZcIixcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWFheWAvFwiLFwiYmFja2dyb3VuZENvbG9yVG9wXCI6XCIjZmZmZmZmXCIsXCJiYWNrZ3JvdW5kQ29sb3JCb3R0b21cIjpcIiNmZmZmZmZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3BheS9wYXltZW50L3BheW1lbnRcIjp7XCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjZmZmZmZmXCIsXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLorqLljZXmlK/ku5hcIixcImJhY2tncm91bmRDb2xvclRvcFwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZENvbG9yQm90dG9tXCI6XCIjZmZmZmZmXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9wYXkvc3VjY2Vzcy9zdWNjZXNzXCI6e1wibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZmZmZmZlwiLFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5pSv5LuY5oiQ5YqfXCIsXCJiYWNrZ3JvdW5kQ29sb3JUb3BcIjpcIiNmZmZmZmZcIixcImJhY2tncm91bmRDb2xvckJvdHRvbVwiOlwiI2ZmZmZmZlwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvZ29vZHMvcmF0aW5ncy9yYXRpbmdzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5ZWG5ZOB6K+E6K66XCIsXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwib25SZWFjaEJvdHRvbURpc3RhbmNlXCI6NTAsXCJiYWNrZ3JvdW5kQ29sb3JUb3BcIjpcIiNmZmZmZmZcIixcImJhY2tncm91bmRDb2xvckJvdHRvbVwiOlwiI2ZmZmZmZlwiLFwidXNpbmdDb21wb25lbnRzXCI6e319fSxcImdsb2JhbFN0eWxlXCI6e1wibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwiYmxhY2tcIixcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZENvbG9yXCI6XCIjZmZmZmZmXCIsXCJiYWNrZ3JvdW5kQ29sb3JUb3BcIjpcIiNmZmZmZmZcIixcImJhY2tncm91bmRDb2xvckJvdHRvbVwiOlwiI2ZmZmZmZlwifX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfXzAyMEUxMUVcIn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTMyNDZhZSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjI5ZTBlOTlkXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pL3NodWlndW9uZXcvcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMzI0NmFlJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0YWJzXCJdIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWJcIl0gfSxcbiAgICAgICAgX3ZtLl9sKF92bS5vcmRlclR5cGUsIGZ1bmN0aW9uKHRhYiwgdGJJbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IHRiSW5kZXgsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItdGV4dFwiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IFt0YkluZGV4ID09IF92bS5zZWxlY3RJbmRleCA/IFwidGFiLXRleHQtb25cIiA6IFwiXCJdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93VHlwZSh0YkluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYikpXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJib3JkZXJcIl0sXG4gICAgICAgIHN0eWxlOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKFwiICsgX3ZtLnRyYW5zbGF0ZVhXICsgXCJweClcIiB9XG4gICAgICB9KVxuICAgIF0pLFxuICAgIF9jKFxuICAgICAgXCJzbGlkZXJcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNsaWRlclwiXSxcbiAgICAgICAgYXR0cnM6IHsgYXV0b1BsYXk6IGZhbHNlLCBpbmZpbml0ZTogZmFsc2UsIGluZGV4OiBfdm0uc2VsZWN0SW5kZXggfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2xpZGVyQ2hhbmdlIH1cbiAgICAgIH0sXG4gICAgICBfdm0uX2woX3ZtLm9yZGVyTGlzdCwgZnVuY3Rpb24ocGFnZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFtcImZyYW1lXCJdIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgcGFnZS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICA/IF9jKFwiY2VsbFwiLCB7IGFwcGVuZEFzVHJlZTogdHJ1ZSwgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX2wocGFnZSwgZnVuY3Rpb24ocm93LCByb3dJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFnZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInJvd1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widHlwZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnR5cGVUZXh0W3Jvdy50eXBlXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLWxlZnRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxlZnQtaW1hZ2VcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJvdy5pbWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1uYW1lXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtc3BlY1wiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93LnNwZWMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2UtbnVtYmVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LXVuaXRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi77+lXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93LnByaWNlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LW11bHRpcGxpZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ4XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LW51bWJlclwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy5udW1uZXIpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1udW1iZXJcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWFsVwiICsgX3ZtLl9zKHJvdy5udW1uZXIpICsgXCLku7bllYblk4FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1zdW1cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJkZXRhaWwtc3VtLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5ZCI6K6h77+lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1zdW0tcGF5bWVudFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93LnBheW1lbnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJkZXRhaWwtc3VtLW5vbWluYWxcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIo5ZCr6L+Q6LS5IO+/pVwiICsgX3ZtLl9zKHJvdy5mcmVpZ2h0KSArIFwiKVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcInVucGFpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbmNlbE9yZGVyKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iOiuouWNlVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b1BheW1lbnQocm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5LuY5qy+XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50eXBlID09IFwiYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbWluZERlbGl2ZXIocm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5o+Q6YaS5Y+R6LSnXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50eXBlID09IFwidW5yZWNlaXZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dMb2dpc3RpY3Mocm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5p+l55yL54mp5rWBXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcInBheVwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7orqTmlLbotKdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaIkeimgemAgOi0p1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcInJlY2VpdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuivhOS7t1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWGjeasoei0reS5sFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlho3mrKHotK3kubBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnR5cGUgPT0gXCJyZWZ1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuafpeeci+i/m+W6plwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcImNhbmNlbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlt7Llj5bmtohcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wib25vcmRlclwiXSB9LCBbXG4gICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9ub3JkZXItaW1hZ2VcIl0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFGR0o3WEVEMWdLMGpTWkZHNzYyZDNGWGFtLnBuZ1wiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9ub3JkZXItdGV4dFwiXSB9LCBbX3ZtLl92KFwi5rKh5pyJ55u45YWz6K6i5Y2VXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJcIj5cclxuXHRcdFx0XHQ8dGV4dCB2LWZvcj1cIih0YWIsIHRiSW5kZXgpIGluIG9yZGVyVHlwZVwiIDprZXk9XCJ0YkluZGV4XCIgXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJzaG93VHlwZSh0YkluZGV4KVwiIFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ0YWItdGV4dFwiIFxyXG5cdFx0XHRcdFx0OmNsYXNzPVwiW3RiSW5kZXggPT0gc2VsZWN0SW5kZXggPyAndGFiLXRleHQtb24nIDogJyddXCJcclxuXHRcdFx0XHQ+e3sgdGFiIH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJvcmRlclwiIDpzdHlsZT1cInsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlWFcgKyAncHgpJyB9XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxzbGlkZXIgY2xhc3M9XCJzbGlkZXJcIiA6YXV0by1wbGF5PVwiZmFsc2VcIiA6aW5maW5pdGU9XCJmYWxzZVwiIDppbmRleD1cInNlbGVjdEluZGV4XCIgQGNoYW5nZT1cInNsaWRlckNoYW5nZVwiPlxyXG5cdFx0XHQ8bGlzdCBjbGFzcz1cImZyYW1lXCIgdi1mb3I9XCIocGFnZSwgaW5kZXgpIGluIG9yZGVyTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdDxjZWxsIHYtaWY9XCJwYWdlLmxlbmd0aCA9PSAwXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib25vcmRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJvbm9yZGVyLWltYWdlXCIgc3JjPVwiaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUZHSjdYRUQxZ0swalNaRkc3NjJkM0ZYYW0ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvbm9yZGVyLXRleHRcIj7msqHmnInnm7jlhbPorqLljZU8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2NlbGw+XHJcblx0XHRcdFx0PGNlbGwgdi1mb3I9XCIocm93LCByb3dJbmRleCkgaW4gcGFnZVwiIDprZXk9XCJyb3dJbmRleFwiIHYtaWY9XCJwYWdlLmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0eXBlXCI+e3sgdHlwZVRleHRbcm93LnR5cGVdIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1pbmZvLWxlZnRcIj48aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgOnNyYz1cInJvdy5pbWdcIj48L2ltYWdlPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbmFtZVwiPnt7IHJvdy5uYW1lIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXNwZWNcIj57eyByb3cuc3BlYyB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtdW5pdFwiPu+/pTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCI+e3sgcm93LnByaWNlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiPng8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1udW1iZXJcIj57eyByb3cubnVtbmVyIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXRhaWwtbnVtYmVyXCI+5YWxe3sgcm93Lm51bW5lciB9feS7tuWVhuWTgTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsLXN1bVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXRhaWwtc3VtLXRleHRcIj7lkIjorqHvv6U8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRldGFpbC1zdW0tcGF5bWVudFwiPnt7IHJvdy5wYXltZW50IH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXRhaWwtc3VtLW5vbWluYWxcIj4o5ZCr6L+Q6LS5IO+/pXt7IHJvdy5mcmVpZ2h0IH19KTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICd1bnBhaWQnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIiBAY2xpY2s9XCJjYW5jZWxPcmRlcihyb3cpXCI+5Y+W5raI6K6i5Y2VPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG5zLWJ0biBwYXlcIiBAY2xpY2s9XCJ0b1BheW1lbnQocm93KVwiPuS7mOasvjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRucy1kaXZcIiB2LWlmPVwicm93LnR5cGUgPT0gJ2JhY2snXCI+PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCIgQGNsaWNrPVwicmVtaW5kRGVsaXZlcihyb3cpXCI+5o+Q6YaS5Y+R6LSnPC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zLWRpdlwiIHYtaWY9XCJyb3cudHlwZSA9PSAndW5yZWNlaXZlZCdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiIEBjbGljaz1cInNob3dMb2dpc3RpY3Mocm93KVwiPuafpeeci+eJqea1gTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gcGF5XCI+56Gu6K6k5pS26LSnPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG5zLWJ0biBwYXlcIj7miJHopoHpgIDotKc8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdyZWNlaXZlZCdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiPuivhOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiPuWGjeasoei0reS5sDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRucy1kaXZcIiB2LWlmPVwicm93LnR5cGUgPT0gJ2NvbXBsZXRlZCdcIj48dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7lho3mrKHotK3kubA8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdyZWZ1bmRzJ1wiPjx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiPuafpeeci+i/m+W6pjwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRucy1kaXZcIiB2LWlmPVwicm93LnR5cGUgPT0gJ2NhbmNlbGxlZCdcIj48dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7lt7Llj5bmtog8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jZWxsPlxyXG5cdFx0XHQ8L2xpc3Q+XHJcblx0XHQ8L3NsaWRlcj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2VsZWN0SW5kZXg6IDAsXHJcblx0XHRcdHRyYW5zbGF0ZVg6IFswLCAxMjUsIDI1MCwgMzc1LCA1MDAsIDYyNSwgNzUwXSxcclxuXHRcdFx0dHJhbnNsYXRlWFc6IDAsXHJcblx0XHRcdG9yZGVyVHlwZTogWyflhajpg6gnLCAn5b6F5LuY5qy+JywgJ+W+heWPkei0pycsICflvoXmlLbotKcnLCAn5b6F6K+E5Lu3JywgJ+mAgOaNoui0pyddLFxyXG5cdFx0XHR0eXBlVGV4dDoge1xyXG5cdFx0XHRcdHVucGFpZDogJ+etieW+heS7mOasvicsXHJcblx0XHRcdFx0YmFjazogJ+etieW+heWVhuWutuWPkei0pycsXHJcblx0XHRcdFx0dW5yZWNlaXZlZDogJ+WVhuWutuW3suWPkei0pycsXHJcblx0XHRcdFx0cmVjZWl2ZWQ6ICfnrYnlvoXnlKjmiLfor4Tku7cnLFxyXG5cdFx0XHRcdGNvbXBsZXRlZDogJ+S6pOaYk+W3suWujOaIkCcsXHJcblx0XHRcdFx0cmVmdW5kczogJ+WVhuWTgemAgOi0p+WkhOeQhuS4rScsXHJcblx0XHRcdFx0Y2FuY2VsbGVkOiAn6K6i5Y2V5bey5Y+W5raIJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcmRlckxpc3Q6IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICd1bnBhaWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAwLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMCxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTZ3ZXBlVzVzM0tWalNaRk5xNkFEM0ZYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VucGFpZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDEsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxZHVIdGNmQmpfdVZqU1pGcHE2QTBTWFhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAnYmFjaycsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDIsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNzNlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhaS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndW5yZWNlaXZlZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDMsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNzNlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhaS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAncmVjZWl2ZWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiA0LFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUpDMWZlLkNGM0tWalNaSm5xNnpuSEZYYUcuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2NvbXBsZXRlZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDUsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxR1Nxb2VXV3MzS1ZqU1pGeHE2eVdVWFhhdi5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAncmVmdW5kcycsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDYsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxX01lZmUzYUgzS1ZqU1pGanE2QUZXcFhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2FuY2VsbGVkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogNyxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFMdTFwZThDdzNLVmpTWkZ1cTZBQU9wWGFJLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VucGFpZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDAsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAwLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxaU1pZmUzYUgzS1ZqU1pGanE2QUZXcFhhQS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndW5wYWlkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogMSxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFENlNmZTRpSDNLVmpTWlBmcTZ4QmlWWGFHLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdC8v5pegXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICd1bnJlY2VpdmVkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogMyxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFJalNmZTRpSDNLVmpTWlBmcTZ4QmlWWGE0LmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3JlY2VpdmVkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogNCxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE2d2VwZVc1czNLVmpTWkZOcTZBRDNGWGFKLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3JlZnVuZHMnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiA2LFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTZ3ZXBlVzVzM0tWalNaRk5xNkFEM0ZYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLnNlbGVjdEluZGV4ID0gcGFyc2VJbnQodW5pLmdldFN0b3JhZ2VTeW5jKCd0YkluZGV4JykpKzE7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRzaG93VHlwZSh0YkluZGV4KSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0SW5kZXggPSB0YkluZGV4O1xyXG5cdFx0XHR0aGlzLnRyYW5zbGF0ZVhXID0gdGhpcy50cmFuc2xhdGVYW3RiSW5kZXhdO1xyXG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy5zZWxlY3RJbmRleDogJyArIHRoaXMuc2VsZWN0SW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNsaWRlckNoYW5nZShlKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0SW5kZXggPSBlLmluZGV4O1xyXG5cdFx0XHR0aGlzLnRyYW5zbGF0ZVhXID0gdGhpcy50cmFuc2xhdGVYW2UuaW5kZXhdO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZS5pbmRleDogJyArIEpTT04uc3RyaW5naWZ5KGUuaW5kZXgpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtaW5kRGVsaXZlcihyb3cpIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICflt7Lmj5DphpLllYblrrblj5HotKcnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGNhbmNlbE9yZGVyKHJvdykge1xyXG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHR0aXRsZTogJ+WPlua2iOiuouWNlScsXHJcblx0XHRcdFx0Y29udGVudDogJ+ehruWumuWPlua2iOatpOiuouWNle+8nycsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZG9DYW5jZWxPcmRlcihyb3cub3JkZXJzbik7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0ZG9DYW5jZWxPcmRlcihvcmRlcnNuKSB7XHJcblx0XHRcdGxldCB0eXBlTnVtID0gdGhpcy5vcmRlckxpc3QubGVuZ3RoO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVOdW07IGkrKykge1xyXG5cdFx0XHRcdGxldCBsaXN0ID0gdGhpcy5vcmRlckxpc3RbaV07XHJcblx0XHRcdFx0bGV0IG9yZGVyTnVtID0gbGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0aWYgKG9yZGVyTnVtID4gMCAmJiBsaXN0WzBdLnR5cGUgPT0gJ3VucGFpZCcpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgb3JkZXJOdW07IGorKykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcmRlckxpc3RbaV1bal0ub3JkZXJzbiA9PSBvcmRlcnNuKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5vcmRlckxpc3RbaV1bal0udHlwZSA9ICdjYW5jZWxsZWQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dG9QYXltZW50KHJvdykge1xyXG5cdFx0XHQvL+acrOWcsOaooeaLn+iuouWNleaPkOS6pFVJ5pWI5p6cXHJcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0dGl0bGU6ICfmraPlnKjojrflj5borqLljZUuLi4nXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsZXQgcGF5bWVudE9yZGVyID0gW107XHJcblx0XHRcdHBheW1lbnRPcmRlci5wdXNoKHJvdyk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdGtleTogJ3BheW1lbnRPcmRlcicsXHJcblx0XHRcdFx0XHRkYXRhOiBwYXltZW50T3JkZXIsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vcGF5L3BheW1lbnQvcGF5bWVudD9hbW91bnQ9JyArIHJvdy5wYXltZW50XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJzIHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG5cclxuLnRhYiB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGhlaWdodDogNzZweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRhYi10ZXh0IHtcclxuXHR3aWR0aDogMTI1cHg7XHJcblx0aGVpZ2h0OiA3NnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA3NnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcblx0Y29sb3I6ICM0NDQ7XHJcbn1cclxuLnRhYi10ZXh0LW9uIHtcclxuXHRjb2xvcjogI2YwNmM3YTtcclxufVxyXG4uYm9yZGVyIHtcclxuXHR3aWR0aDogNzVweDtcclxuXHRtYXJnaW46IDAgMjVweDtcclxuXHRoZWlnaHQ6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2YzdhO1xyXG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0dG9wOiA4MHB4O1xyXG5cdGJvdHRvbTogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmZyYW1lIHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0cGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcbi5vbm9yZGVyIHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0aGVpZ2h0OiAzNzVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5vbm9yZGVyLWltYWdlIHtcclxuXHR3aWR0aDogMTUwO1xyXG5cdGhlaWdodDogMTUwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1MDtcclxufVxyXG4ub25vcmRlci10ZXh0IHtcclxuXHR3aWR0aDogNzUwO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRmb250LXNpemU6IDI4cHg7XHJcblx0Y29sb3I6ICM0NDQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHR3aWR0aDogNzEwcHg7XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnR5cGUge1xyXG5cdHdpZHRoOiA3MTBweDtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcblx0Y29sb3I6ICNlYzY1MmY7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5vcmRlci1pbmZvIHtcclxuXHR3aWR0aDogNzEwcHg7XHJcblx0aGVpZ2h0OiAxODhweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcblx0ZmxleC1zaHJpbms6IDA7XHJcblx0d2lkdGg6IDE4OHB4O1xyXG5cdGhlaWdodDogMTg4cHg7XHJcbn1cclxuLmxlZnQtaW1hZ2Uge1xyXG5cdHdpZHRoOiAxODhweDtcclxuXHRoZWlnaHQ6IDE4OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5vcmRlci1pbmZvLXJpZ2h0IHtcclxuXHR3aWR0aDogNDcycHg7XHJcblx0aGVpZ2h0OiAxODhweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5vcmRlci1pbmZvLXJpZ2h0LW5hbWUge1xyXG5cdHdpZHRoOiA0NzJweDtcclxuXHRoZWlnaHQ6IDk0cHg7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vcmRlci1pbmZvLXJpZ2h0LXNwZWMge1xyXG5cdGNvbG9yOiAjYTdhN2E3O1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm9yZGVyLWluZm8tcmlnaHQtcHJpY2UtbnVtYmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiA0NzJweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5vcmRlci1pbmZvLXJpZ2h0LXVuaXQsXHJcbi5vcmRlci1pbmZvLXJpZ2h0LW11bHRpcGxpZXIge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ub3JkZXItaW5mby1yaWdodC1wcmljZSxcclxuLm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5kZXRhaWwge1xyXG5cdHdpZHRoOiA2NzBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uZGV0YWlsLW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5kZXRhaWwtc3VtIHtcclxuXHRwYWRkaW5nOiAwIDhweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uZGV0YWlsLXN1bS10ZXh0IHtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmRldGFpbC1zdW0tcGF5bWVudCB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5kZXRhaWwtc3VtLW5vbWluYWwge1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uYnRucyB7XHJcblx0d2lkdGg6IDY3MHB4O1xyXG5cdGhlaWdodDogODBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0bnMtZGl2IHtcclxuXHR3aWR0aDogNjcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uYnRucy1idG4ge1xyXG5cdG1pbi13aWR0aDogMTIwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDI4cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5kZWZhdWx0IHtcclxuXHRib3JkZXItY29sb3I6ICNjY2M7XHJcblx0Y29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5wYXkge1xyXG5cdGJvcmRlci1jb2xvcjogI2VjNjUyZjtcclxuXHRjb2xvcjogI2VjNjUyZjtcclxufVxyXG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICguLi5hcmdzKSB7XHJcbiAgY29uc3QgbXNncyA9IGFyZ3MubWFwKCh2KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgbGV0IG1zZyA9ICcnXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuICByZXR1cm4gbXNnXHJcbn1cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/lt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4v5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi/lt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4v5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTAhLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi/lt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL+W3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4v5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi/lt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMCEuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0YWJzXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImhlaWdodFwiOiBcIjgwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJ0YWJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImhlaWdodFwiOiBcIjc2XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInRhYi10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTI1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3NlwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjc2XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIixcbiAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiXG4gIH0sXG4gIFwidGFiLXRleHQtb25cIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjA2YzdhXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyNVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwNmM3YVwiLFxuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogMzAwLFxuICAgIFwidHJhbnNpdGlvbkRlbGF5XCI6IDAsXG4gICAgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlXCJcbiAgfSxcbiAgXCJAVFJBTlNJVElPTlwiOiB7XG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgXCJwcm9wZXJ0eVwiOiBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJkdXJhdGlvblwiOiAzMDAsXG4gICAgICBcImRlbGF5XCI6IDAsXG4gICAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZVwiXG4gICAgfVxuICB9LFxuICBcInNsaWRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwidG9wXCI6IFwiODBcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YzZjNmM1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwiZnJhbWVcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwib25vcmRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzc1XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MFwiXG4gIH0sXG4gIFwib25vcmRlci1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNTAsXG4gICAgXCJoZWlnaHRcIjogMTUwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDE1MFxuICB9LFxuICBcIm9ub3JkZXItdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOFwiLFxuICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2MFwiXG4gIH0sXG4gIFwicm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzEwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ0eXBlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzEwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiNlYzY1MmZcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzEwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxODhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImxlZnRcIjoge1xuICAgIFwiZmxleFNocmlua1wiOiAwLFxuICAgIFwid2lkdGhcIjogXCIxODhcIixcbiAgICBcImhlaWdodFwiOiBcIjE4OFwiXG4gIH0sXG4gIFwibGVmdC1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE4OFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ3MlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodC1uYW1lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDcyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtc3BlY1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhN2E3YTdcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjJcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2UtbnVtYmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwid2lkdGhcIjogXCI0NzJcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXVuaXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodC1tdWx0aXBsaWVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodC1udW1iZXJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNFwiXG4gIH0sXG4gIFwiZGV0YWlsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjcwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJkZXRhaWwtbnVtYmVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIlxuICB9LFxuICBcImRldGFpbC1zdW1cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiOFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImRldGFpbC1zdW0tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCJcbiAgfSxcbiAgXCJkZXRhaWwtc3VtLXBheW1lbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMFwiXG4gIH0sXG4gIFwiZGV0YWlsLXN1bS1ub21pbmFsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIlxuICB9LFxuICBcImJ0bnNcIjoge1xuICAgIFwid2lkdGhcIjogXCI2NzBcIixcbiAgICBcImhlaWdodFwiOiBcIjgwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG5zLWRpdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY3MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImJ0bnMtYnRuXCI6IHtcbiAgICBcIm1pbldpZHRoXCI6IFwiMTIwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwiZGVmYXVsdFwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gIH0sXG4gIFwicGF5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2VjNjUyZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZWM2NTJmXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9