(() => {
var exports = {};
exports.id = 872;
exports.ids = [872];
exports.modules = {

/***/ 4134:
/***/ ((module) => {

// Exports
module.exports = {
	"product-list": "style_product-list__FDH5c"
};


/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ Empty)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/empty/Empty.tsx


const Empty = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Empty, {
        ...props
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/empty/index.ts



/***/ }),

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ ProductList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/molecules/product-thumb/index.ts + 1 modules
var product_thumb = __webpack_require__(7348);
// EXTERNAL MODULE: ./src/components/molecules/product-list/style.module.scss
var style_module = __webpack_require__(4134);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/molecules/product-list/ProductList.tsx



const ProductList = ({ products , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default())["product-list"],
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(product_thumb/* ProductThumb */.B, {
                product: product,
                className: (style_module_default())["product-list__item"]
            }, product.id)
        )
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-list/index.ts



/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ ProductSearchForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/molecules/product-search-form/ProductSearchForm.tsx



const ProductSearchForm = ({ ...props })=>{
    const router = (0,router_.useRouter)();
    const handleSearch = (data)=>{
        router.push(`/search/${data}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Search, {
        onSearch: handleSearch,
        ...props
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-search-form/index.ts



/***/ }),

/***/ 4606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4313);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _molecules_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6136);
/* harmony import */ var _molecules_product_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6222);
/* harmony import */ var _molecules_product_search_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(195);
/* harmony import */ var _molecules_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9360);
/* harmony import */ var _services_backend_api_shop_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7705);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_10__);











const SearchPage = ({ products , phrase ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_10__.NextSeo, {
                noindex: true,
                description: _data_about__WEBPACK_IMPORTED_MODULE_2__/* .about.fullDescription */ .j.fullDescription,
                title: phrase || "Поиск по каталогу"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__/* .Section */ .$, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_atoms_container__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__/* .Section.Header */ .$.Header, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_product_search_form__WEBPACK_IMPORTED_MODULE_5__/* .ProductSearchForm */ .j, {
                                enterButton: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.SearchOutlined, {
                                    }),
                                    type: "primary",
                                    ghost: true,
                                    children: "Поиск"
                                }),
                                defaultValue: phrase
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__/* .Section.Body */ .$.Body, {
                            children: products && products.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_product_list__WEBPACK_IMPORTED_MODULE_4__/* .ProductList */ .c, {
                                products: products
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_empty__WEBPACK_IMPORTED_MODULE_3__/* .Empty */ .H, {
                                description: `Товаро не найдено по запросу "${phrase}"`
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const props = {
        products: null,
        phrase: ""
    };
    const phrase = ctx.query && ctx.query.phrase || "";
    props.phrase = phrase;
    if (phrase) {
        props.products = (await _services_backend_api_shop_ProductService__WEBPACK_IMPORTED_MODULE_7__/* .ProductService.getMany */ .M.getMany({
            search: {
                "name": {
                    "$or": {
                        "$contL": phrase
                    }
                }
            },
            limit: 100
        })).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 9901:
/***/ ((module) => {

"use strict";
module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 6492:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,290,261,303,936,348], () => (__webpack_exec__(4606)));
module.exports = __webpack_exports__;

})();