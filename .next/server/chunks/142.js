"use strict";
exports.id = 142;
exports.ids = [142];
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



/***/ })

};
;