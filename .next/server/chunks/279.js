"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.8e872398.svg","height":64,"width":64});

/***/ }),

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Image)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/atoms/image/Image.tsx


// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const triplet = (e1, e2, e3)=>keyStr.charAt(e1 >> 2) + keyStr.charAt((e1 & 3) << 4 | e2 >> 4) + keyStr.charAt((e2 & 15) << 2 | e3 >> 6) + keyStr.charAt(e3 & 63)
;
const rgbDataURL = (r, g, b)=>`data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
;
const Image = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        ...props
    }));
};
Image.defaultProps = {
    placeholder: "blur",
    blurDataURL: rgbDataURL(237, 181, 6)
};


;// CONCATENATED MODULE: ./src/components/atoms/image/index.ts



/***/ })

};
;