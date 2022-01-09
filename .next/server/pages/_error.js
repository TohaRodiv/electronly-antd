(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 5593:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "style_error___Jlkf",
	"glitch": "style_glitch__w7Qc9",
	"glitchTop": "style_glitchTop__zWgPj",
	"glitchBotom": "style_glitchBotom__5fx3w",
	"error__wrapper": "style_error__wrapper__Bvffd",
	"error__description": "style_error__description__ANCDy"
};


/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ about)
/* harmony export */ });
const about = {
    name: "Electronly",
    shortDescription: "интернет-магазин электроники",
    fullDescription: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заглавных они рот раз рекламных агентство ведущими снова, это речью власти, точках страну приставка, проектах запятых города своих родного оксмокс гор."
};


/***/ }),

/***/ 7908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
// EXTERNAL MODULE: ./src/components/molecules/error/style.module.scss
var style_module = __webpack_require__(5593);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/molecules/error/Error.tsx


const Error = ({ statusCode , title ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default()).error__wrapper,
        children: statusCode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).error,
                    title: `${statusCode}`,
                    children: statusCode
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).error__description,
                    children: title
                })
            ]
        }) : "Ошибка на клиенте"
    }));
};


// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/pages/_error.tsx






const getRuHTTPErrorDescription = (statusCode)=>{
    switch(statusCode){
        case 404:
            return "Страница не найдена!";
        case 500:
            "Ошибка на сервере, зайдите позже.";
        default:
            return "На сайте возникла ошибка!";
    }
};
const ErrorPage = ({ statusCode ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                noindex: true,
                description: about/* about.fullDescription */.j.fullDescription,
                title: getRuHTTPErrorDescription(statusCode)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Error, {
                            statusCode: statusCode,
                            title: getRuHTTPErrorDescription(statusCode)
                        })
                    })
                })
            })
        ]
    }));
};
ErrorPage.getInitialProps = ({ res , err  })=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};
/* harmony default export */ const _error = (ErrorPage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [290], () => (__webpack_exec__(7908)));
module.exports = __webpack_exports__;

})();