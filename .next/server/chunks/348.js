exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 7471:
/***/ ((module) => {

// Exports
module.exports = {
	"product-thumb": "style_product-thumb__crBeG",
	"product-thumb--with-sale": "style_product-thumb--with-sale__n5flG",
	"product-thumb__title": "style_product-thumb__title__q3Sc_",
	"product-thumb__title-link": "style_product-thumb__title-link__R5UgK",
	"product-thumb__image": "style_product-thumb__image__aKIvl",
	"ant-card-body": "style_ant-card-body__92MAZ",
	"product-thumb__body-inner": "style_product-thumb__body-inner__J_7vX"
};


/***/ }),

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* reexport */ ProductThumb)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/molecules/product-thumb/style.module.scss
var style_module = __webpack_require__(7471);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: ./src/components/molecules/price-compositor/index.ts + 3 modules
var price_compositor = __webpack_require__(936);
// EXTERNAL MODULE: ./src/components/molecules/availability-compositor/index.ts + 3 modules
var availability_compositor = __webpack_require__(8655);
// EXTERNAL MODULE: ./src/components/molecules/button-go-to-order/index.ts + 1 modules
var button_go_to_order = __webpack_require__(9839);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: ./src/components/molecules/category-link/index.ts + 1 modules
var category_link = __webpack_require__(4525);
// EXTERNAL MODULE: ./src/components/atoms/image/index.ts + 1 modules
var atoms_image = __webpack_require__(3630);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./public/images/logo.svg
var logo = __webpack_require__(2640);
;// CONCATENATED MODULE: ./src/components/molecules/product-thumb/ProductThumb.tsx













const ProductThumb = ({ product , hideOrder , className , ...props })=>{
    const router = (0,router_.useRouter)();
    const classes = external_classnames_default()((style_module_default())["product-thumb"], {
        [(style_module_default())["product-thumb--with-sale"]]: !!product.crossed_price
    }, className);
    const previewImage = product.images.length > 0 ? product.images[0].path : logo/* default */.Z;
    const imageBlock = /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: `/product/${product.id}`,
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_image/* Image */.E, {
            objectFit: "contain",
            width: 320,
            height: 200,
            src: previewImage,
            alt: product.name,
            className: (style_module_default())["product-thumb__image"]
        })
    });
    const handleGoToOrder = (productId)=>{
        router.push(`/order/${productId}`);
    };
    const actions = [];
    if (!hideOrder) {
        actions.push(/*#__PURE__*/ jsx_runtime_.jsx(button_go_to_order/* ButtonGoToOrder */.D, {
            onClick: ()=>{
                handleGoToOrder(product.id);
            }
        }, "product-thumb-image"));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Card, {
        bodyStyle: {
            flex: "1 1 auto"
        },
        className: classes,
        actions: actions,
        cover: imageBlock,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (style_module_default())["product-thumb__body-inner"],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                    level: 4,
                    className: (style_module_default())["product-thumb__title"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                        href: `/product/${product.id}`,
                        className: (style_module_default())["product-thumb__title-link"],
                        children: product.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(category_link/* CategoryLink */.I, {
                    category: product.category
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(price_compositor/* PriceCompositor */.q, {
                    primary: product.price,
                    crossed: product.crossed_price
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(availability_compositor/* AvailabilityCompositor */.o, {
                    count: product.count,
                    available: product.available
                })
            ]
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-thumb/index.ts



/***/ })

};
;