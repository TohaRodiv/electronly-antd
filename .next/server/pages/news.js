"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.8e872398.svg","height":64,"width":64});

/***/ }),

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Image)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/atoms/image/Image.tsx


// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const triplet = (e1, e2, e3)=>keyStr.charAt(e1 >> 2) + keyStr.charAt((e1 & 3) << 4 | e2 >> 4) + keyStr.charAt((e2 & 15) << 2 | e3 >> 6) + keyStr.charAt(e3 & 63)
;
const rgbDataURL = (r, g, b)=>`data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
;
const Image = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        ...props
    }));
};
Image.defaultProps = {
    placeholder: "blur",
    blurDataURL: rgbDataURL(237, 181, 6)
};


;// CONCATENATED MODULE: ./src/components/atoms/image/index.ts



/***/ }),

/***/ 4084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4313);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _molecules_news_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3917);
/* harmony import */ var _molecules_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9360);
/* harmony import */ var _services_backend_api_blog_NewsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4197);
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6492);
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);








const NewsPage = ({ news ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__.NextSeo, {
                description: _data_about__WEBPACK_IMPORTED_MODULE_2__/* .about.fullDescription */ .j.fullDescription,
                title: "Новости"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_4__/* .Section */ .$, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_atoms_container__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_4__/* .Section.Header */ .$.Header, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_6___default()), {
                                level: 3,
                                children: "Новости"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_4__/* .Section.Body */ .$.Body, {
                            children: news && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_news_list__WEBPACK_IMPORTED_MODULE_3__/* .NewsList */ .p, {
                                news: news
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const props = {
        news: null
    };
    props.news = (await _services_backend_api_blog_NewsService__WEBPACK_IMPORTED_MODULE_5__/* .NewsService.getMany */ .Y.getMany()).payload;
    return {
        props,
        revalidate: 60 * 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 9901:
/***/ ((module) => {

module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 6492:
/***/ ((module) => {

module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,675,791,762,142,261,197,917], () => (__webpack_exec__(4084)));
module.exports = __webpack_exports__;

})();