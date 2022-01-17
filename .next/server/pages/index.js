(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3777:
/***/ ((module) => {

// Exports
module.exports = {
	"button-scroll-down": "style_button-scroll-down__yUKk1",
	"button-scroll-down__item": "style_button-scroll-down__item___EQZm",
	"sdb04": "style_sdb04__xv3GV"
};


/***/ }),

/***/ 1092:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "style_hero__AUPeD",
	"hero__row": "style_hero__row__zizB7",
	"hero__content": "style_hero__content__3azr0",
	"hero__head": "style_hero__head__HKnax",
	"hero__description": "style_hero__description__M34gY",
	"hero__image-wrapper": "style_hero__image-wrapper__eWI4j",
	"hero__image-wrapper-mobile": "style_hero__image-wrapper-mobile__15F_k",
	"hero__cta": "style_hero__cta__RpxMq",
	"hero__scroll-down": "style_hero__scroll-down__wGoD_"
};


/***/ }),

/***/ 4205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/components/molecules/category-list/CategoryList.tsx + 1 modules
var CategoryList = __webpack_require__(5760);
// EXTERNAL MODULE: ./src/components/molecules/news-list/index.ts + 3 modules
var news_list = __webpack_require__(3917);
// EXTERNAL MODULE: ./src/components/molecules/product-list/index.ts + 1 modules
var product_list = __webpack_require__(6222);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/molecules/space/index.ts + 1 modules
var space = __webpack_require__(3530);
// EXTERNAL MODULE: ./src/services/backend/api/blog/NewsService.ts + 1 modules
var NewsService = __webpack_require__(4197);
// EXTERNAL MODULE: ./src/services/backend/api/shop/ProductService.ts + 1 modules
var ProductService = __webpack_require__(7705);
// EXTERNAL MODULE: ./src/services/backend/api/shop/CategoryService.ts + 1 modules
var CategoryService = __webpack_require__(8993);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: ./src/components/molecules/tracking-order-form/index.ts + 1 modules
var tracking_order_form = __webpack_require__(6004);
// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
// EXTERNAL MODULE: ./src/components/atoms/button-scroll-down/style.module.scss
var style_module = __webpack_require__(3777);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/atoms/button-scroll-down/ButtonScrollDown.tsx



const ButtonScrollDown = ({ className , classNameArrow ,  })=>{
    const classes = external_classnames_default()((style_module_default())["button-scroll-down"], className);
    const classesArrow = external_classnames_default()((style_module_default())["button-scroll-down__item"], classNameArrow);
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classes,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: classesArrow
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/atoms/button-scroll-down/index.ts


// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/components/molecules/hero/style.module.scss
var hero_style_module = __webpack_require__(1092);
var hero_style_module_default = /*#__PURE__*/__webpack_require__.n(hero_style_module);
;// CONCATENATED MODULE: ./public/workspace.svg
/* harmony default export */ const workspace = ({"src":"/_next/static/media/workspace.8c4563d7.svg","height":473,"width":500});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/molecules/hero/Hero.tsx











const Hero = ({})=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (hero_style_module_default()).hero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (hero_style_module_default()).hero__row,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (hero_style_module_default()).hero__content,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (hero_style_module_default())["hero__image-wrapper-mobile"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        alt: about/* about.name */.j.name,
                                        width: 220,
                                        height: 220,
                                        src: workspace
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (hero_style_module_default()).hero__head,
                                    children: about/* about.shortDescription */.j.shortDescription
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (hero_style_module_default()).hero__description,
                                    children: about/* about.fullDescription */.j.fullDescription
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    className: (hero_style_module_default()).hero__cta,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                            onClick: ()=>{
                                                router_default().push("/about");
                                            },
                                            size: "large",
                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.AlignLeftOutlined, {
                                            }),
                                            type: "default",
                                            ghost: true,
                                            children: "Подробнее"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                            type: "default",
                                            onClick: ()=>{
                                                router_default().push("/catalog");
                                            },
                                            size: "large",
                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ShoppingOutlined, {
                                            }),
                                            children: "В каталог"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (hero_style_module_default())["hero__image-wrapper"],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: about/* about.name */.j.name,
                                width: 600,
                                height: 600,
                                src: workspace
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonScrollDown, {
                className: (hero_style_module_default())["hero__scroll-down"]
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/pages/index.tsx

















const HomePage = ({ news , products , categories ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                description: about/* about.fullDescription */.j.fullDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
            }),
            categories && categories.length && /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
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
            products && products.length && /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                theme: "light",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.StarOutlined, {
                                        }),
                                        "Новинки"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(product_list/* ProductList */.c, {
                                products: products
                            })
                        })
                    ]
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
                                        color: "var(--ant-primary-1)"
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
            }),
            news && news.length && /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                theme: "light",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.ReadOutlined, {
                                        }),
                                        "Новости"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(news_list/* NewsList */.p, {
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
        news: null,
        products: null,
        categories: null
    };
    props.news = (await NewsService/* NewsService.getMany */.Y.getMany()).payload;
    props.products = (await ProductService/* ProductService.getMany */.M.getMany()).payload;
    props.categories = (await CategoryService/* CategoryService.getMany */.H.getMany()).payload;
    return {
        props,
        revalidate: 60 * 60
    };
};
/* harmony default export */ const pages = (HomePage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,290,261,303,936,348,4,197,758,917], () => (__webpack_exec__(4205)));
module.exports = __webpack_exports__;

})();