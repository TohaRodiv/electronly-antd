"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
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

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ validateMessages)
/* harmony export */ });
const validateMessages = {
    required: "${label} обязателен!",
    types: {
        email: "Неверный формат E-mail!"
    },
    pattern: {
        mismatch: "Неверный формат!"
    },
    string: {
        min: "${label} должно быть больше ${min} символов"
    }
};


/***/ }),

/***/ 4008:
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
// EXTERNAL MODULE: ./src/services/backend/api/shop/ProductService.ts + 1 modules
var ProductService = __webpack_require__(7705);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: ./src/components/molecules/price-compositor/index.ts + 3 modules
var price_compositor = __webpack_require__(936);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/molecules/product-table/ProductTable.tsx




const ProductTable = ({ products ,  })=>{
    const dataSource = products.map((product)=>{
        return {
            key: product.id,
            name: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                href: `/products/${product.id}`,
                children: product.name
            }),
            price: /*#__PURE__*/ jsx_runtime_.jsx(price_compositor/* PriceCompositor */.q, {
                primary: product.price,
                crossed: product.crossed_price
            })
        };
    });
    const columns = [
        {
            title: "Название",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "Цена",
            key: "price",
            dataIndex: "price"
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
        dataSource: dataSource,
        columns: columns,
        pagination: false
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-table/index.ts


// EXTERNAL MODULE: ./src/services/frontend/date/DateService.ts
var DateService = __webpack_require__(7898);
// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: external "antd/lib/typography/Text"
var Text_ = __webpack_require__(3570);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text_);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
;// CONCATENATED MODULE: ./src/components/molecules/description-order/DescriptionOrder.tsx







const DescriptionOrder = ({ order  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paragraph_default()), {
                type: "success",
                children: [
                    "Ваш заказ оформлен под номером ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Text_default()), {
                        underline: true,
                        copyable: {
                            text: `${order.id}`,
                            tooltips: false
                        },
                        children: [
                            "№",
                            order.id
                        ]
                    }),
                    ", скопируйте его и отслеживайте статус заказа на нашем сайте."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Descriptions, {
                title: "Информация о заказе",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Номер заказа",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Text_default()), {
                            copyable: {
                                text: `${order.id}`,
                                tooltips: false
                            },
                            children: order.id
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Имя",
                        children: order.fio
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Телефон",
                        children: order.tel
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "E-mail",
                        children: order.email
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Комментарий",
                        children: order.comment
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Дата оформления",
                        children: DateService/* DateService.getFormattedHuman */.R.getFormattedHuman(order.created)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Descriptions.Item, {
                        label: "Статус",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                            title: order.status.description,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Text_default()), {
                                children: order.status.name
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                level: 3,
                children: "Товары"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductTable, {
                products: order.products
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/description-order/index.ts


// EXTERNAL MODULE: ./src/components/molecules/empty/index.ts + 1 modules
var empty = __webpack_require__(6136);
// EXTERNAL MODULE: ./src/data/validate-messages.ts
var validate_messages = __webpack_require__(2379);
// EXTERNAL MODULE: ./src/services/frontend/api/OrderService.ts
var OrderService = __webpack_require__(1760);
// EXTERNAL MODULE: ./src/services/frontend/form/getPreparedFields.ts
var getPreparedFields = __webpack_require__(3298);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-input-mask"
var external_react_input_mask_ = __webpack_require__(4648);
var external_react_input_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_input_mask_);
;// CONCATENATED MODULE: ./src/components/molecules/product-order-form/ProductOrderForm.tsx








const ProductOrderForm = ({ product , onOrder ,  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const onFinish = async (fields)=>{
        setLoading(true);
        const data = (0,getPreparedFields/* getPreparedFields */.H)(fields);
        const { error , payload  } = await OrderService/* OrderService.createAndSave */.p.createAndSave(data);
        if (error) {
            external_antd_.message.error("Произошла ошибка:", error);
        } else {
            external_antd_.message.success("Ваша заявка успешно отправилась!");
            onOrder && onOrder(payload);
        }
        setLoading(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
        name: "product-order-form",
        onFinish: onFinish,
        validateMessages: validate_messages/* validateMessages */.w,
        layout: "vertical",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                hidden: true,
                initialValue: [
                    product.id
                ],
                name: "products",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                    type: "hidden"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                hidden: true,
                initialValue: 1,
                name: "status",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                    type: "hidden"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                name: "fio",
                label: "Ваше имя",
                rules: [
                    {
                        min: 2
                    }
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                name: "tel",
                label: "Телефон",
                rules: [
                    {
                        pattern: /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/,
                        type: "string",
                        required: true
                    }
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_input_mask_default()), {
                    mask: "+7 (999) 999-99-99",
                    name: "tel",
                    type: "text",
                    className: "ant-input"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                name: "email",
                label: "Email",
                rules: [
                    {
                        type: "email"
                    }
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                name: "comment",
                label: "Комментарий",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.TextArea, {
                    showCount: true,
                    allowClear: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                    loading: loading,
                    size: "large",
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
                    }),
                    type: "primary",
                    htmlType: "submit",
                    children: "Заказать"
                })
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-order-form/index.ts


// EXTERNAL MODULE: ./src/components/molecules/product-thumb/index.ts + 1 modules
var product_thumb = __webpack_require__(7348);
// EXTERNAL MODULE: ./src/components/molecules/section/index.tsx + 3 modules
var section = __webpack_require__(9360);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/pages/order-page/OrderPage.tsx












const OrderPage = ({ product ,  })=>{
    const { 0: order1 , 1: setOrder  } = (0,external_react_.useState)(null);
    const handleOrderSuccess = (order)=>{
        setOrder(order);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !product ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                    noindex: true,
                    description: about/* about.fullDescription */.j.fullDescription,
                    title: "Товар не найден"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(empty/* Empty */.H, {
                                description: "Товар не найден!"
                            })
                        })
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                    titleTemplate: `%s заказать онлайн в интернет-магазине ${about/* about.name */.j.name}`,
                    description: about/* about.fullDescription */.j.fullDescription,
                    title: product.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(section/* Section */.$, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Header */.$.Header, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 3,
                                    children: order1 ? `Ваш заказ успешно оформлен` : "Оформление быстрого заказа"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(section/* Section.Body */.$.Body, {
                                children: order1 ? /*#__PURE__*/ jsx_runtime_.jsx(DescriptionOrder, {
                                    order: order1
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                                    align: "middle",
                                    justify: "center",
                                    gutter: [
                                        24,
                                        12
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                            span: 24,
                                            md: 12,
                                            lg: 8,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(product_thumb/* ProductThumb */.B, {
                                                product: product,
                                                hideOrder: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                            span: 24,
                                            md: 12,
                                            lg: 10,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProductOrderForm, {
                                                product: product,
                                                onOrder: handleOrderSuccess
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};


;// CONCATENATED MODULE: ./src/pages/order/[id].tsx



const NextOrderPage = ({ product ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(OrderPage, {
        product: product
    }));
};
const getServerSideProps = async (ctx)=>{
    const props = {
        product: null
    };
    const productId = +(ctx.query && ctx.query.id || false);
    if (isFinite(productId) && productId > 0) {
        props.product = (await ProductService/* ProductService.findById */.M.findById(productId)).payload;
    }
    return {
        props
    };
};
/* harmony default export */ const _id_ = (NextOrderPage);


/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _BaseAPIService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6605);

const OrderService = new class extends _BaseAPIService__WEBPACK_IMPORTED_MODULE_0__/* .BaseAPIService */ .M {
    async createAndSave(dto) {
        return await this.fetch("/shop/orders", {
            method: "POST",
            body: JSON.stringify(dto),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
    }
};


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

/***/ 3298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ getPreparedFields)
/* harmony export */ });
function getPreparedFields(fields) {
    const result = {
    };
    Object.entries(fields).filter(([_fieldKey, fieldValue])=>typeof fieldValue != "undefined" && fieldValue != ""
    ).forEach(([fieldName, fieldValue])=>{
        result[fieldName] = fieldValue;
    });
    return result;
}


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 9901:
/***/ ((module) => {

module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = require("antd/lib/typography/Paragraph");

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

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4648:
/***/ ((module) => {

module.exports = require("react-input-mask");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,664,675,791,762,142,261,333,348,605], () => (__webpack_exec__(4008)));
module.exports = __webpack_exports__;

})();