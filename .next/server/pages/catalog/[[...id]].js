"use strict";
(() => {
var exports = {};
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
// EXTERNAL MODULE: ./src/components/molecules/category-list/CategoryList.tsx + 1 modules
var CategoryList = __webpack_require__(5760);
// EXTERNAL MODULE: ./src/components/molecules/product-list/index.ts + 1 modules
var product_list = __webpack_require__(6222);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: ./src/components/molecules/space/index.ts + 1 modules
var space = __webpack_require__(3530);
// EXTERNAL MODULE: ./src/components/molecules/tracking-order-form/index.ts + 1 modules
var tracking_order_form = __webpack_require__(6004);
// EXTERNAL MODULE: ./src/services/backend/api/shop/CategoryService.ts + 1 modules
var CategoryService = __webpack_require__(8993);
// EXTERNAL MODULE: ./src/services/backend/api/shop/ProductService.ts + 1 modules
var ProductService = __webpack_require__(7705);
;// CONCATENATED MODULE: ./src/services/backend/cache/CacheService.ts
const CacheService = new class {
    setCachePage(res) {
        res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=72000");
    }
};

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/pages/catalog/[[...id]].tsx















const CatalogPage = ({ products , categories , category ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                titleTemplate: `%s - купить по выгодной цене в интернет-магазине ${about/* about.name */.j.name}`,
                description: category.description || about/* about.fullDescription */.j.fullDescription,
                title: category.title
            }),
            categories && /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                theme: "dark",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.AppstoreOutlined, {
                                        }),
                                        "Категории"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryList/* CategoryList */.o, {
                                categories: categories
                            })
                        })
                    ]
                })
            }),
            products && /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(product_list/* ProductList */.c, {
                            products: products
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                theme: "dark",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchOutlined, {
                                        }),
                                        "Поиск заказа"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* Section.Body */.$.Body, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Paragraph_default()), {
                                    style: {
                                        color: "var(--ant-primary-1"
                                    },
                                    children: "Заказывали ранее у нас? Введите номер заказа, чтобы проверить его статус."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(tracking_order_form/* TrackingOrderForm */.N, {
                                    size: "large",
                                    theme: "light"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
const getServerSideProps = async ({ req , res , query  })=>{
    res && CacheService.setCachePage(res);
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
        props.categories = (await CategoryService/* CategoryService.getMany */.H.getMany()).payload;
        props.products = (await ProductService/* ProductService.findByCategoryId */.M.findByCategoryId(categoryId)).payload;
        props.category = (await CategoryService/* CategoryService.findById */.H.findById(categoryId)).payload;
    } else {
        props.categories = (await CategoryService/* CategoryService.getMany */.H.getMany()).payload;
        props.products = (await ProductService/* ProductService.getMany */.M.getMany()).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const _id_ = (CatalogPage);


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

/***/ 1774:
/***/ ((module) => {

module.exports = require("antd/lib/typography/Paragraph");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,664,675,791,762,142,261,333,348,4,758], () => (__webpack_exec__(276)));
module.exports = __webpack_exports__;

})();