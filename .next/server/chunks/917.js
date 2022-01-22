exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 7951:
/***/ ((module) => {

// Exports
module.exports = {
	"news-list": "style_news-list__yw8HD"
};


/***/ }),

/***/ 2701:
/***/ ((module) => {

// Exports
module.exports = {
	"news-thumb": "style_news-thumb__QTo1m",
	"news-thumb__image-link": "style_news-thumb__image-link__0K0Xd",
	"news-thumb__image": "style_news-thumb__image__qCcaQ",
	"news-thumb__title": "style_news-thumb__title__2uwNp"
};


/***/ }),

/***/ 3917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ NewsList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/molecules/news-thumb/style.module.scss
var style_module = __webpack_require__(2701);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/atoms/image/index.ts + 1 modules
var atoms_image = __webpack_require__(3630);
// EXTERNAL MODULE: ./public/images/logo.svg
var logo = __webpack_require__(2640);
;// CONCATENATED MODULE: ./src/components/molecules/news-thumb/NewsThumb.tsx








const NewsThumb = ({ news , ...props })=>{
    const previewImage = news.images.length > 0 ? news.images[0].path : logo/* default */.Z;
    const imageBlock = /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: `/news/${news.id}`,
        className: (style_module_default())["news-thumb__image-link"],
        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_image/* Image */.E, {
            width: 360,
            height: 200,
            objectFit: "cover",
            src: previewImage,
            alt: news.title,
            className: (style_module_default())["news-thumb__image"]
        })
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
        bodyStyle: {
            flex: "1 1 auto"
        },
        className: (style_module_default())["news-thumb"],
        actions: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms_link/* Link */.r, {
                href: `/news/${news.id}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.AlignLeftOutlined, {
                    }),
                    " Подробнее"
                ]
            }, "news-thumb-image")
        ],
        cover: imageBlock,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                level: 4,
                className: (style_module_default())["news-thumb__title"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                    href: `/news/${news.id}`,
                    children: news.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (style_module_default())["news-thumb__body"],
                children: news.content
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/news-thumb/index.ts


// EXTERNAL MODULE: ./src/components/molecules/news-list/style.module.scss
var news_list_style_module = __webpack_require__(7951);
var news_list_style_module_default = /*#__PURE__*/__webpack_require__.n(news_list_style_module);
;// CONCATENATED MODULE: ./src/components/molecules/news-list/NewsList.tsx



const NewsList = ({ news ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (news_list_style_module_default())["news-list"],
        children: news.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsThumb, {
                news: article
            }, article.id)
        )
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/news-list/index.ts



/***/ })

};
;