exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 772:
/***/ ((module) => {

// Exports
module.exports = {
	"availability--in-stock": "style_availability--in-stock__uiEEY",
	"availability--out-stock": "style_availability--out-stock__vER_c",
	"availability--under-order": "style_availability--under-order__Fe6Ik"
};


/***/ }),

/***/ 729:
/***/ ((module) => {

// Exports
module.exports = {
	"price": "style_price__8GPKc",
	"price--type--primary": "style_price--type--primary__BYvGt",
	"price--type--crossed": "style_price--type--crossed__kyiEQ",
	"price--type--discount": "style_price--type--discount__iqvEi",
	"price--size--small": "style_price--size--small__kUvwy",
	"price--size--middle": "style_price--size--middle__g0bvF",
	"price--size--large": "style_price--size--large__trgfd"
};


/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.8e872398.svg","height":64,"width":64});

/***/ }),

/***/ 8655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ AvailabilityCompositor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/availability/style.module.scss
var style_module = __webpack_require__(772);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/atoms/availability/Availability.tsx





const Availability = ({ count , type: availabilityType , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).availability);
    if (availabilityType === "in-stock") {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
            className: external_classnames_default()(classes, (style_module_default())["availability--in-stock"], className),
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(icons_.BlockOutlined, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: count === null ? "В наличии" : `В наличии ${count} шт.`
                })
            ]
        }));
    } else if (availabilityType === "out-stock") {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
            className: external_classnames_default()(classes, (style_module_default())["availability--out-stock"], className),
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(icons_.FrownOutlined, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Нет в наличии"
                })
            ]
        }));
    } else if (availabilityType === "under-order") {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
            className: external_classnames_default()(classes, (style_module_default())["availability--under-order"], className),
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Под заказ"
                })
            ]
        }));
    } else {
        throw new Error(`Unknown availability type: "${availabilityType}"`);
    }
};


;// CONCATENATED MODULE: ./src/components/atoms/availability/index.ts


;// CONCATENATED MODULE: ./src/components/molecules/availability-compositor/AvailabilityCompositor.tsx


const AvailabilityCompositor = ({ count , available ,  })=>{
    let availableType = "under-order";
    if (available) {
        if (count === null) {
            availableType = "in-stock";
        } else if (count > 0) {
            availableType = "in-stock";
        } else {
            availableType = "under-order";
        }
    } else {
        availableType = "out-stock";
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Availability, {
        type: availableType,
        count: count
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/availability-compositor/index.ts



/***/ }),

/***/ 9839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ ButtonGoToOrder)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/button-go-to-order/ButtonGoToOrder.tsx



const ButtonGoToOrder = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
        ...props,
        children: "Заказать"
    }));
};
ButtonGoToOrder.defaultProps = {
    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {
    }, "button-go-to-order"),
    size: "large",
    ghost: true,
    type: "primary"
};


;// CONCATENATED MODULE: ./src/components/molecules/button-go-to-order/index.ts



/***/ }),

/***/ 4525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ CategoryLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/category-link/CategoryLink.tsx




const CategoryLink = ({ category , icon , className ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: `/catalog/${category.id}`,
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
            children: [
                icon,
                category.title
            ]
        })
    }));
};
CategoryLink.defaultProps = {
    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ApiOutlined, {
    })
};


;// CONCATENATED MODULE: ./src/components/molecules/category-link/index.ts



/***/ }),

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ PriceCompositor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/atoms/price/style.module.scss
var style_module = __webpack_require__(729);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/atoms/price/Price.tsx



const getFormattedPrice = (price, type)=>{
    switch(type){
        case "primary":
        case "crossed":
            return `${price} ₽`;
        case "discount":
            return `${price} %`;
        case "order":
            return "По запросу";
        default:
            throw new Error(`Price type "${type}" is not supported!`);
    }
};
const Price = ({ size , type , value , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).price, (style_module_default())[`price--size--${size}`], (style_module_default())[`price--type--${type}`], className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classes,
        ...props,
        children: getFormattedPrice(value, type)
    }));
};
Price.defaultProps = {
    size: "middle",
    type: "primary"
};


;// CONCATENATED MODULE: ./src/components/atoms/price/index.ts


// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/price-compositor/PriceCompositor.tsx



const PriceCompositor = ({ primary , crossed , discount ,  })=>{
    let primaryPrice = primary;
    let crossedPrice = crossed;
    let discountPercentage = discount;
    if (primaryPrice) {
        if (crossedPrice) {
            discountPercentage = 100 - Math.round(primaryPrice * 100 / crossedPrice) || -1;
        } else if (typeof discountPercentage === "number") {
            let reductionAmount = Math.floor(primaryPrice * discountPercentage / 100);
            crossedPrice = primaryPrice;
            primaryPrice = primaryPrice - reductionAmount;
        }
    }
    const isShowPrimaryPrice = primaryPrice > 0 && !!!crossedPrice ? !!primaryPrice : !!crossedPrice && primaryPrice < Number(crossedPrice);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
        wrap: true,
        children: [
            isShowPrimaryPrice ? /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                type: "primary",
                size: "middle",
                value: primaryPrice
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                type: "order",
                size: "small",
                value: primaryPrice
            }),
            !!crossedPrice && primaryPrice < crossedPrice && /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                type: "crossed",
                size: "small",
                value: crossedPrice
            }),
            !!discountPercentage && primaryPrice < Number(crossedPrice) && /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                type: "discount",
                size: "small",
                value: -Math.abs(discountPercentage)
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/price-compositor/index.ts



/***/ }),

/***/ 7705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ ProductService)
});

// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(5261);
;// CONCATENATED MODULE: ./src/repositories/api/shop/ProductRepository.ts

class ProductRepository extends BaseRepository/* BaseRepository */.R {
    async findMany(options) {
        const { limit , filter , search ,  } = options;
        const params = this.getQueryBuilder().setLimit(limit || 10).setFilter({
            field: "active",
            operator: "$eq",
            value: true
        }).search(search || {
        }).query();
        const res = await this.fetch(`/shop/products/?${params}`);
        return res;
    }
    async findById(id) {
        return await this.fetch(`/shop/products/${id}`);
    }
    async findByCategoryId(categoryId) {
        const params = this.getQueryBuilder().setFilter({
            field: "category.id",
            operator: "$eq",
            value: categoryId
        }).setFilter({
            field: "active",
            operator: "$eq",
            value: true
        }).query();
        return await this.fetch(`/shop/products/?${params}`);
    }
}

;// CONCATENATED MODULE: ./src/services/backend/api/shop/ProductService.ts

const ProductService = new class {
    constructor(){
        this.repository = new ProductRepository();
    }
    async getMany(options = {
        limit: 10
    }) {
        return await this.repository.findMany(options);
    }
    async findById(id) {
        return await this.repository.findById(id);
    }
    async findByCategoryId(categoryId) {
        return await this.repository.findByCategoryId(categoryId);
    }
};


/***/ })

};
;