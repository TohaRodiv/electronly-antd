exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 8638:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "style_section__e8_3m",
	"section__header": "style_section__header__wNTUB",
	"section__head": "style_section__head__y9UJS",
	"section__head-inner": "style_section__head-inner__lw1vc",
	"section__icon": "style_section__icon__3RR7B",
	"section__article": "style_section__article___xzoi",
	"section__footer": "style_section__footer__xk8hE",
	"section--theme--light": "style_section--theme--light__Jvael",
	"section--theme--dark": "style_section--theme--dark__jP_KS"
};


/***/ }),

/***/ 9360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ section_Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/molecules/section/style.module.scss
var style_module = __webpack_require__(8638);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/molecules/section/Header.tsx



const Header = ({ children , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).section__header, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: classes,
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/section/Body.tsx



const Body = ({ children , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).section__article, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: classes,
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/section/Section.tsx



const Section = ({ children , className , theme , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).section, {
        [(style_module_default())[`section--theme--${theme}`]]: !!theme
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: classes,
        ...props,
        children: children
    }));
};
Section.defaultProps = {
    theme: "light"
};


;// CONCATENATED MODULE: ./src/components/molecules/section/index.tsx




const section_Section = ({ ...propps })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Section, {
        ...propps
    }));
};
section_Section.Body = Body;
section_Section.Header = Header;



/***/ })

};
;