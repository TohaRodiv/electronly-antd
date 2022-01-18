(() => {
var exports = {};
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 4230:
/***/ ((module) => {

// Exports
module.exports = {
	"news-page__image": "style_news-page__image__DpsJu"
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

/***/ 6780:
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
// EXTERNAL MODULE: ./src/services/backend/api/blog/NewsService.ts + 1 modules
var NewsService = __webpack_require__(4197);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/components/molecules/image-preview-mask/index.ts + 1 modules
var image_preview_mask = __webpack_require__(3212);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: ./src/services/frontend/string/StringService.ts
var StringService = __webpack_require__(3557);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./src/components/pages/news-page/style.module.scss
var style_module = __webpack_require__(4230);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/pages/news-page/NewsPage.tsx









const NewsPage = ({ news ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                description: StringService/* StringService.cutEllipsisText */.P.cutEllipsisText(news.content, 300),
                title: news.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (style_module_default())["news-page"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Image, {
                                    preview: {
                                        mask: /*#__PURE__*/ jsx_runtime_.jsx(image_preview_mask/* ImagePreviewMask */.O, {
                                        })
                                    },
                                    src: news.images[0].path,
                                    alt: news.title,
                                    wrapperClassName: (style_module_default())["news-page__image"]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 3,
                                    className: (style_module_default())["news-page__title"],
                                    children: news.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (style_module_default())["news-page__content"],
                                    children: news.content
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        clear: "both"
                                    }
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/pages/news-page/index.ts


;// CONCATENATED MODULE: ./src/pages/news/[id].tsx



const NextNewsPage = ({ news ,  })=>{
    return news && /*#__PURE__*/ jsx_runtime_.jsx(NewsPage, {
        news: news
    });
};
const getServerSideProps = async (ctx)=>{
    const props = {
        news: null
    };
    const articleId = +(ctx.query && ctx.query.id || false);
    if (isFinite(articleId) && articleId > 0) {
        props.news = (await NewsService/* NewsService.findById */.Y.findById(articleId)).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const _id_ = (NextNewsPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [290,261,197], () => (__webpack_exec__(6780)));
module.exports = __webpack_exports__;

})();