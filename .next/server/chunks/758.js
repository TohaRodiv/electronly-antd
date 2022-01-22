exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 5025:
/***/ ((module) => {

// Exports
module.exports = {
	"category-list": "style_category-list__mS2_s",
	"category-list__item": "style_category-list__item__t3O8_",
	"category-list__block": "style_category-list__block__4JCQh",
	"category-list-item": "style_category-list-item__9832j",
	"category-list-item__body": "style_category-list-item__body__XhjuQ",
	"category-list-item__image": "style_category-list-item__image__QA_zH",
	"category-list-item__title": "style_category-list-item__title__a1CM1"
};


/***/ }),

/***/ 4134:
/***/ ((module) => {

// Exports
module.exports = {
	"product-list": "style_product-list__FDH5c"
};


/***/ }),

/***/ 5760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ CategoryList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: ./src/components/molecules/category-list/style.module.scss
var style_module = __webpack_require__(5025);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: ./src/components/atoms/image/index.ts + 1 modules
var atoms_image = __webpack_require__(3630);
// EXTERNAL MODULE: ./public/images/logo.svg
var logo = __webpack_require__(2640);
;// CONCATENATED MODULE: ./src/components/molecules/category-list/CategoryListItem.tsx







const CategoryListItem = ({ category , className ,  })=>{
    const classes = external_classnames_default()((style_module_default())["category-list-item"], className);
    const previewImage = category.images.length > 0 ? category.images[0].path : logo/* default */.Z;
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: `/catalog/${category.id}`,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (style_module_default())["category-list-item__body"],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(atoms_image/* Image */.E, {
                    objectFit: "contain",
                    className: (style_module_default())["category-list-item__image"],
                    width: 150,
                    height: 150,
                    src: previewImage,
                    alt: category.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                    level: 4,
                    className: (style_module_default())["category-list-item__title"],
                    children: category.title
                })
            ]
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/category-list/CategoryList.tsx



const CategoryList = ({ categories ,  })=>{
    if (!categories) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (style_module_default())["category-list"],
        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (style_module_default())["category-list__item"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryListItem, {
                    category: category,
                    className: (style_module_default())["category-list__block"]
                })
            }, category.id)
        )
    }));
};



/***/ }),

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ ProductList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/molecules/product-thumb/index.ts + 1 modules
var product_thumb = __webpack_require__(7348);
// EXTERNAL MODULE: ./src/components/molecules/product-list/style.module.scss
var style_module = __webpack_require__(4134);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/molecules/product-list/ProductList.tsx



const ProductList = ({ products , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default())["product-list"],
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(product_thumb/* ProductThumb */.B, {
                product: product,
                className: (style_module_default())["product-list__item"]
            }, product.id)
        )
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-list/index.ts



/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Space)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/space/Space.tsx


const Space = ({ display , justifyContent , children , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Space, {
        style: {
            display,
            justifyContent
        },
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/space/index.ts



/***/ }),

/***/ 8993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ CategoryService)
});

// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(5261);
;// CONCATENATED MODULE: ./src/repositories/api/shop/CategoryRepository.ts

class CategoryRepository extends BaseRepository/* BaseRepository */.R {
    async findMany(options) {
        const { limit ,  } = options;
        const params = this.getQueryBuilder().setLimit(limit || 10).setFilter({
            field: "active",
            operator: "$eq",
            value: true
        }).query();
        const res = await this.fetch(`/shop/categories/?${params}`);
        return res;
    }
    async findById(id) {
        return await this.fetch(`/shop/categories/${id}`);
    }
}

;// CONCATENATED MODULE: ./src/services/backend/api/shop/CategoryService.ts

const CategoryService = new class {
    constructor(){
        this.repository = new CategoryRepository();
    }
    async getMany(options = {
    }) {
        return await this.repository.findMany(options);
    }
    async findById(id) {
        return await this.repository.findById(id);
    }
};


/***/ })

};
;