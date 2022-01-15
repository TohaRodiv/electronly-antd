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

/***/ 161:
/***/ ((module) => {

// Exports
module.exports = {
	"main-carousel-item": "style_main-carousel-item__IQgN_",
	"main-carousel-item__image": "style_main-carousel-item__image__FaUdJ",
	"main-carousel-item__body-container": "style_main-carousel-item__body-container__4qkRQ",
	"main-carousel-item__body": "style_main-carousel-item__body__b4N_c",
	"main-carousel-item__body-inner": "style_main-carousel-item__body-inner__tMqQY",
	"main-carousel-item__title": "style_main-carousel-item__title__icV_h",
	"main-carousel-item__subtitle": "style_main-carousel-item__subtitle__yUd5O",
	"main-carousel-item__scroll-down-icon": "style_main-carousel-item__scroll-down-icon__T8lIA"
};


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
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
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/atoms/image/index.ts + 1 modules
var atoms_image = __webpack_require__(3630);
// EXTERNAL MODULE: ./src/components/molecules/main-carousel/style.module.scss
var style_module = __webpack_require__(161);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/atoms/button-scroll-down/style.module.scss
var button_scroll_down_style_module = __webpack_require__(3777);
var button_scroll_down_style_module_default = /*#__PURE__*/__webpack_require__.n(button_scroll_down_style_module);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
;// CONCATENATED MODULE: ./src/components/atoms/button-scroll-down/ButtonScrollDown.tsx




const ButtonScrollDown = ({ className , classNameArrow , scrollTo ,  })=>{
    const classes = external_classnames_default()((button_scroll_down_style_module_default())["button-scroll-down"], className);
    const classesArrow = external_classnames_default()((button_scroll_down_style_module_default())["button-scroll-down__item"], classNameArrow);
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: `#${scrollTo}`,
        className: classes,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: classesArrow
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/atoms/button-scroll-down/index.ts


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/molecules/main-carousel/CarouselItem.tsx











const CarouselItem = ({ banner , className , scrollTo , ...props })=>{
    const router = (0,router_.useRouter)();
    const { id , title , subtitle , image ,  } = banner;
    const classes = external_classnames_default()((style_module_default())["main-carousel-item"], className);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(atoms_image/* Image */.E, {
                objectFit: "cover",
                layout: "fill",
                className: (style_module_default())["main-carousel-item__image"],
                alt: title,
                src: image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (style_module_default())["main-carousel-item__body"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    className: (style_module_default())["main-carousel-item__body-container"],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default())["main-carousel-item__body-inner"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                className: (style_module_default())["main-carousel-item__title"],
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (style_module_default())["main-carousel-item__subtitle"],
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        onClick: ()=>{
                                            router.push("/about");
                                        },
                                        size: "large",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.AlignLeftOutlined, {
                                        }),
                                        ghost: true,
                                        children: "Подробнее"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        onClick: ()=>{
                                            router.push("/catalog");
                                        },
                                        size: "large",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ShoppingOutlined, {
                                        }),
                                        children: "В каталог"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (style_module_default())["main-carousel-item__scroll-down-icon"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonScrollDown, {
                    classNameArrow: (style_module_default())["main-carousel-item__scroll-item"],
                    scrollTo: scrollTo
                })
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/main-carousel/MainCarousel.tsx



const MainCarousel = ({ banners , scrollTo ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Carousel, {
        autoplay: true,
        effect: "fade",
        dotPosition: "right",
        children: banners.map((banner)=>/*#__PURE__*/ jsx_runtime_.jsx(CarouselItem, {
                scrollTo: scrollTo,
                banner: banner
            }, banner.id)
        )
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/main-carousel/index.ts


// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
;// CONCATENATED MODULE: ./src/data/banners.ts

const banners = [
    {
        id: 1,
        title: `${about/* about.name */.j.name} - ${about/* about.shortDescription */.j.shortDescription}`,
        subtitle: about/* about.fullDescription */.j.fullDescription,
        image: "/banners/hero-1.jpg",
        images: [
            {
                id: 1,
                path: ""
            }, 
        ]
    },
    {
        id: 2,
        title: `${about/* about.name */.j.name} - ${about/* about.shortDescription */.j.shortDescription}`,
        subtitle: about/* about.fullDescription */.j.fullDescription,
        image: "/banners/hero-2.webp",
        images: [
            {
                id: 1,
                path: ""
            }, 
        ]
    }, 
];

// EXTERNAL MODULE: ./src/components/molecules/tracking-order-form/index.ts + 1 modules
var tracking_order_form = __webpack_require__(6004);
// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./src/services/backend/cache/CacheService.ts
var CacheService = __webpack_require__(8800);
;// CONCATENATED MODULE: ./src/pages/index.tsx



















const HomePage = ({ news , products , categories ,  })=>{
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = (millis % 60000 / 1000).toFixed(0);
        return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                description: about/* about.fullDescription */.j.fullDescription
            }),
            banners && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(MainCarousel, {
                    banners: banners,
                    scrollTo: "tracking-order"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                theme: "dark",
                id: "tracking-order",
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
const getServerSideProps = async ({ req , res  })=>{
    res && CacheService/* CacheService.setCachePage */.Q.setCachePage(res);
    const props = {
        news: null,
        products: null,
        categories: null
    };
    props.news = (await NewsService/* NewsService.getMany */.Y.getMany()).payload;
    props.products = (await ProductService/* ProductService.getMany */.M.getMany()).payload;
    props.categories = (await CategoryService/* CategoryService.getMany */.H.getMany()).payload;
    return {
        props
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,290,261,303,936,348,197,852,4,917], () => (__webpack_exec__(826)));
module.exports = __webpack_exports__;

})();