exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 3326:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__IELx8",
	"container--fluid": "style_container--fluid__iGDNB"
};


/***/ }),

/***/ 4313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/style.module.scss
var style_module = __webpack_require__(3326);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/atoms/container/Container.tsx



const Container = ({ children , fluid , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).container, {
        [(style_module_default())["container--fluid"]]: fluid
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes,
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/atoms/container/index.ts



/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ about)
/* harmony export */ });
const about = {
    name: "Electronly",
    shortDescription: "интернет-магазин электроники: от провода до компьютера",
    fullDescription: "Российский интернет-магазин, специализирующийся на оптовой и розничной продаже электроники и комплектующих отечественного и зарубежного производства."
};


/***/ })

};
;