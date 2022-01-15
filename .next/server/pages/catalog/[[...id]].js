"use strict";
(() => {
var exports = {};
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4313);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _molecules_category_list_CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5760);
/* harmony import */ var _molecules_product_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6222);
/* harmony import */ var _molecules_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9360);
/* harmony import */ var _molecules_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3530);
/* harmony import */ var _services_backend_api_shop_CategoryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8993);
/* harmony import */ var _services_backend_api_shop_ProductService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7705);
/* harmony import */ var _services_backend_cache_CacheService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8800);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6492);
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_12__);













const CatalogPage = ({ products , categories , category ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_12__.NextSeo, {
                titleTemplate: `%s - купить по выгодной цене в интернет-магазине ${_data_about__WEBPACK_IMPORTED_MODULE_2__/* .about.name */ .j.name}`,
                description: category.description || _data_about__WEBPACK_IMPORTED_MODULE_2__/* .about.fullDescription */ .j.fullDescription,
                title: category.title
            }),
            categories && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_5__/* .Section */ .$, {
                theme: "dark",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_atoms_container__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_5__/* .Section.Header */ .$.Header, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_11___default()), {
                                level: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_molecules_space__WEBPACK_IMPORTED_MODULE_6__/* .Space */ .T, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.AppstoreOutlined, {
                                        }),
                                        "Категории"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_5__/* .Section.Body */ .$.Body, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_category_list_CategoryList__WEBPACK_IMPORTED_MODULE_3__/* .CategoryList */ .o, {
                                categories: categories
                            })
                        })
                    ]
                })
            }),
            products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_5__/* .Section */ .$, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_5__/* .Section.Body */ .$.Body, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_product_list__WEBPACK_IMPORTED_MODULE_4__/* .ProductList */ .c, {
                            products: products
                        })
                    })
                })
            })
        ]
    }));
};
const getServerSideProps = async ({ req , res , query  })=>{
    res && _services_backend_cache_CacheService__WEBPACK_IMPORTED_MODULE_9__/* .CacheService.setCachePage */ .Q.setCachePage(res);
    const props = {
        categories: null,
        products: null,
        category: {
            id: 1,
            title: "Каталог",
            description: "",
            images: []
        }
    };
    const categoryId = +(query && query.id || false);
    if (isFinite(categoryId) && categoryId > 0) {
        props.categories = (await _services_backend_api_shop_CategoryService__WEBPACK_IMPORTED_MODULE_7__/* .CategoryService.getMany */ .H.getMany()).payload;
        props.products = (await _services_backend_api_shop_ProductService__WEBPACK_IMPORTED_MODULE_8__/* .ProductService.findByCategoryId */ .M.findByCategoryId(categoryId)).payload;
        props.category = (await _services_backend_api_shop_CategoryService__WEBPACK_IMPORTED_MODULE_7__/* .CategoryService.findById */ .H.findById(categoryId)).payload;
    } else {
        props.categories = (await _services_backend_api_shop_CategoryService__WEBPACK_IMPORTED_MODULE_7__/* .CategoryService.getMany */ .H.getMany()).payload;
        props.products = (await _services_backend_api_shop_ProductService__WEBPACK_IMPORTED_MODULE_8__/* .ProductService.getMany */ .M.getMany()).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPage);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,290,261,303,936,348,852], () => (__webpack_exec__(5186)));
module.exports = __webpack_exports__;

})();