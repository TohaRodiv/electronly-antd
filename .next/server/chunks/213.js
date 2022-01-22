exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 8588:
/***/ ((module) => {

// Exports
module.exports = {
	"cta": "style_cta__nI1nn",
	"cta__row": "style_cta__row__9Ezuz",
	"cta__col": "style_cta__col__3Gp1e",
	"cta__col-image": "style_cta__col-image__cV5Vc",
	"cta__col-form": "style_cta__col-form__Unb_J",
	"cta__head": "style_cta__head__2WGHa"
};


/***/ }),

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/workspace.8c4563d7.svg","height":473,"width":500});

/***/ }),

/***/ 7213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ CTA)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
// EXTERNAL MODULE: ./src/components/atoms/image/index.ts + 1 modules
var atoms_image = __webpack_require__(3630);
// EXTERNAL MODULE: ./src/data/validate-messages.ts
var validate_messages = __webpack_require__(2379);
// EXTERNAL MODULE: ./src/services/frontend/api/OrderService.ts
var OrderService = __webpack_require__(1760);
// EXTERNAL MODULE: ./src/services/frontend/form/getPreparedFields.ts
var getPreparedFields = __webpack_require__(3298);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-input-mask"
var external_react_input_mask_ = __webpack_require__(4648);
var external_react_input_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_input_mask_);
;// CONCATENATED MODULE: ./src/components/organisms/callback-form/CallbackForm.tsx








const CallbackForm = ({ ...props })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const handleSubmit = async (fields)=>{
        setLoading(true);
        const data = (0,getPreparedFields/* getPreparedFields */.H)(fields);
        const { error , payload  } = await OrderService/* OrderService.createAndSave */.p.createAndSave(data);
        if (error) {
            console.error(error);
            external_antd_.message.error("Произошла ошибка, повторите позже.");
        } else {
            external_antd_.message.success("Ваша заявка успешно отправлена!");
        }
        setLoading(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Spin, {
        spinning: loading,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
            validateMessages: validate_messages/* validateMessages */.w,
            onFinish: handleSubmit,
            layout: "vertical",
            ...props,
            children: [
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
                    label: "Сообщение",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.TextArea, {
                        showCount: true,
                        allowClear: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        block: true,
                        size: "large",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {
                        }),
                        type: "primary",
                        htmlType: "submit",
                        children: "Отправить"
                    })
                })
            ]
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/organisms/callback-form/index.ts


// EXTERNAL MODULE: ./src/components/organisms/CTA/style.module.scss
var style_module = __webpack_require__(8588);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./public/images/workspace.svg
var workspace = __webpack_require__(905);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
;// CONCATENATED MODULE: ./src/components/organisms/CTA/CTA.tsx








const CTA = ({ head ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default()).cta,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (style_module_default()).cta__row,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((style_module_default()).cta__col, (style_module_default())["cta__col-image"]),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_image/* Image */.E, {
                            alt: "",
                            width: 500,
                            height: 500,
                            src: workspace/* default */.Z
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()((style_module_default()).cta__col, (style_module_default())["cta__col-form"]),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                level: 4,
                                className: (style_module_default()).cta__head,
                                children: head
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CallbackForm, {
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/organisms/CTA/index.ts



/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;