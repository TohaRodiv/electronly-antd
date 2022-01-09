"use strict";
(() => {
var exports = {};
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ Empty)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/empty/Empty.tsx


const Empty = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Empty, {
        ...props
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/empty/index.ts



/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ about)
/* harmony export */ });
const about = {
    name: "Electronly",
    shortDescription: "интернет-магазин электроники: от провода до компьютера",
    fullDescription: "Продажа электроники оптом и в розницу, у нас в наличии и под заказ ноутбуки, умные часы и фитнес браслеты, смартфоны и аксессуары. Ассортимент товаров постоянно пополняется, всегда актуальные цены в нашем каталоге."
};


/***/ }),

/***/ 1196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
// EXTERNAL MODULE: ./src/components/molecules/empty/index.ts + 1 modules
var empty = __webpack_require__(6136);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(5261);
;// CONCATENATED MODULE: ./src/repositories/api/shop/OrderRepository.ts

class OrderRepository extends BaseRepository/* BaseRepository */.R {
    async findById(id) {
        return await this.fetch(`/shop/orders/${id}`);
    }
    async createAndSave(dto) {
        return await this.fetch("/shop/orders", {
            method: "POST",
            body: JSON.stringify(dto),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/services/backend/api/shop/OrderService.ts

const OrderService = new class {
    constructor(){
        this.repsitory = new OrderRepository();
    }
    async findById(id) {
        return await this.repsitory.findById(id);
    }
    async createAndSave(dto) {
        return await this.repsitory.createAndSave(dto);
    }
};

// EXTERNAL MODULE: ./src/services/frontend/date/DateService.ts
var DateService = __webpack_require__(7898);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/typography/Text"
var Text_ = __webpack_require__(3570);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text_);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/pages/tracking/[id].tsx











const TrackingOrderPage = ({ order ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                noindex: true,
                description: about/* about.fullDescription */.j.fullDescription,
                title: order ? `Информация о заказе №${order.id}` : "Заказ не найден"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                            children: !order ? /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 3,
                                children: "Заказ не найден"
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Title_default()), {
                                level: 3,
                                children: [
                                    "Информация о заказе №",
                                    order === null || order === void 0 ? void 0 : order.id
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                            children: !order ? /*#__PURE__*/ jsx_runtime_.jsx(empty/* Empty */.H, {
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Descriptions, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                                        label: "Номер заказа",
                                        children: order.id
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                                        label: "Статус",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                            title: order.status.description,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Text_default()), {
                                                children: order.status.name
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                                        label: "Дата оформления",
                                        children: DateService/* DateService.getFormattedHuman */.R.getFormattedHuman(order.created)
                                    }),
                                    order.created != order.updated && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                                        label: "Дата редактирования",
                                        children: DateService/* DateService.getFormattedHuman */.R.getFormattedHuman(order.updated)
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const props = {
        order: null
    };
    const orderId = +(ctx.query && ctx.query.id || false);
    if (isFinite(orderId) && orderId > 0) {
        props.order = (await OrderService.findById(orderId)).payload;
    }
    console.log("order", props.order);
    return {
        props
    };
};
/* harmony default export */ const _id_ = (TrackingOrderPage);


/***/ }),

/***/ 7898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ DateService)
/* harmony export */ });
const DateService = new class {
    getFormattedHuman(value) {
        return new Date(value).toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timeZone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    }
};


/***/ }),

/***/ 9901:
/***/ ((module) => {

module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 3570:
/***/ ((module) => {

module.exports = require("antd/lib/typography/Text");

/***/ }),

/***/ 6492:
/***/ ((module) => {

module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [290,261], () => (__webpack_exec__(1196)));
module.exports = __webpack_exports__;

})();