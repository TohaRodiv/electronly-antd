(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 1702:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ ImagePreviewMask)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/image-preview-mask/ImagePreviewMask.tsx



const ImagePreviewMask = ({ icon , text ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
        children: [
            icon,
            text && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: text
            })
        ]
    }));
};
ImagePreviewMask.defaultProps = {
    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.EyeOutlined, {
    }),
    text: "Просмотр"
};


;// CONCATENATED MODULE: ./src/components/molecules/image-preview-mask/index.ts



/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Space)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/space/Space.tsx


const Space = ({ display , justifyContent , children , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Space, {
        style: {
            display,
            justifyContent
        },
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/space/index.ts



/***/ }),

/***/ 8329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/services/backend/api/shop/ProductService.ts + 1 modules
var ProductService = __webpack_require__(7705);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/components/molecules/availability-compositor/index.ts + 3 modules
var availability_compositor = __webpack_require__(8655);
// EXTERNAL MODULE: ./src/components/molecules/button-go-to-order/index.ts + 1 modules
var button_go_to_order = __webpack_require__(9839);
// EXTERNAL MODULE: ./src/components/molecules/category-link/index.ts + 1 modules
var category_link = __webpack_require__(4525);
// EXTERNAL MODULE: ./src/components/molecules/image-preview-mask/index.ts + 1 modules
var image_preview_mask = __webpack_require__(3212);
// EXTERNAL MODULE: ./src/components/molecules/price-compositor/index.ts + 3 modules
var price_compositor = __webpack_require__(936);
// EXTERNAL MODULE: ./src/components/molecules/space/index.ts + 1 modules
var space = __webpack_require__(3530);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/pages/product-page/style.module.scss
var style_module = __webpack_require__(1702);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./src/services/frontend/string/StringService.ts
var StringService = __webpack_require__(3557);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
;// CONCATENATED MODULE: ./src/components/pages/product-page/ProductPage.tsx

















/**
 * @see https://github.com/garmeeh/next-seo#product
 */ const ProductPage = ({ product  })=>{
    const { id , name , description , images , count , price , crossed_price , available , category ,  } = product;
    const router = (0,router_.useRouter)();
    const handleGoToOrder = (productId)=>{
        router.push(`/order/${productId}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                titleTemplate: `%s купить в интернет-магазине ${about/* about.name */.j.name}`,
                description: StringService/* StringService.cutEllipsisText */.P.cutEllipsisText(product.description, 300),
                title: product.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.ProductJsonLd, {
                offers: [
                    {
                        price: `${product.price}`,
                        priceCurrency: "RUB",
                        itemCondition: "https://schema.org/UsedCondition",
                        availability: product.available ? product.crossed_price ? "https://schema.org/Discontinued" : "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                        url: `${"http://ec2-18-116-200-2.us-east-2.compute.amazonaws.com"}/product/${product.id}`,
                        seller: {
                            name: `${about/* about.name */.j.name} - ${about/* about.shortDescription */.j.shortDescription}`
                        }
                    }
                ],
                description: StringService/* StringService.cutEllipsisText */.P.cutEllipsisText(product.description, 300),
                images: product.images.map((image)=>image.path
                ),
                productName: product.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (style_module_default())["product-page"],
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                                    gutter: 24,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                            span: 24,
                                            sm: 12,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Image, {
                                                preview: {
                                                    mask: /*#__PURE__*/ jsx_runtime_.jsx(image_preview_mask/* ImagePreviewMask */.O, {
                                                    })
                                                },
                                                alt: name,
                                                src: images[0].path
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                                            span: 24,
                                            sm: 12,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                                    level: 3,
                                                    children: product.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(price_compositor/* PriceCompositor */.q, {
                                                            primary: price,
                                                            crossed: crossed_price
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(button_go_to_order/* ButtonGoToOrder */.D, {
                                                            ghost: false,
                                                            onClick: ()=>{
                                                                handleGoToOrder(id);
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        "Категория: ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(category_link/* CategoryLink */.I, {
                                                            category: category,
                                                            icon: null
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(availability_compositor/* AvailabilityCompositor */.o, {
                                                    available: available,
                                                    count: count
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                description && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                            level: 4,
                                            children: "Описание"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Paragraph_default()), {
                                            children: description
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/pages/product-page/index.ts


;// CONCATENATED MODULE: ./src/pages/product/[id].tsx



const NextProductPage = ({ product ,  })=>{
    return product && /*#__PURE__*/ jsx_runtime_.jsx(ProductPage, {
        product: product
    });
};
const getServerSideProps = async (ctx)=>{
    const props = {
        product: null
    };
    const productId = +(ctx.query && ctx.query.id || false);
    if (isFinite(productId) && productId > 0) {
        props.product = (await ProductService/* ProductService.findById */.M.findById(productId)).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const _id_ = (NextProductPage);


/***/ }),

/***/ 3557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ StringService)
/* harmony export */ });
const StringService = new class {
    cutEllipsisText(string, maxCharsCount, dots = "...") {
        if (string.length > maxCharsCount - dots.length) {
            return `${string.substring(0, maxCharsCount - dots.length)}${dots}`;
        } else {
            return string;
        }
    }
};


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

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/typography/Paragraph");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,290,261,303,936], () => (__webpack_exec__(8329)));
module.exports = __webpack_exports__;

})();