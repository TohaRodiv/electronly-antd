"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 5142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ Link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/atoms/link/Link.tsx


const Link = ({ passHref: _passHref , text , className , children , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: className,
            children: text || children
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/atoms/link/index.ts



/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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