exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 7556:
/***/ ((module) => {

// Exports
module.exports = {
	"contact-menu__item": "style_contact-menu__item__JtHfG",
	"contact-menu--theme--dark": "style_contact-menu--theme--dark__a5bwo",
	"contact-menu__link": "style_contact-menu__link__kSXp6"
};


/***/ }),

/***/ 8635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ ContactMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/data/contacts.ts
const contacts = {
    addresses: [],
    tels: [],
    emails: [
        {
            value: "electronly@info.ru",
            active: true
        }, 
    ],
    socials: {
        whatsapp: [],
        vk: [],
        telegram: [],
        instagram: []
    }
};

// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
// EXTERNAL MODULE: ./src/components/molecules/space/index.ts + 1 modules
var space = __webpack_require__(3530);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/molecules/contact-menu/style.module.scss
var style_module = __webpack_require__(7556);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/molecules/contact-menu/utils.tsx






const getAddressItems = (addresses)=>addresses.filter((address)=>address.active
    ).map((address, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
            className: (style_module_default())["contact-menu__item"],
            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                href: "/contacts",
                className: (style_module_default())["contact-menu__link"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.HomeOutlined, {
                        }),
                        address.value
                    ]
                })
            })
        }, `address-${index}`)
    )
;
const getTelItems = (tels)=>tels.filter((tel)=>tel.active
    ).map((tel, index)=>{
        const clearedTel = tel.value.replace(/\D/g, "");
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
            className: (style_module_default())["contact-menu__item"],
            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                href: `tel:+${clearedTel}`,
                className: (style_module_default())["contact-menu__link"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.PhoneOutlined, {
                        }),
                        tel.value
                    ]
                })
            })
        }, `tel-${index}`));
    })
;
const getEmailItems = (emails)=>emails.filter((email)=>email.active
    ).map((email, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
            className: (style_module_default())["contact-menu__item"],
            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                href: `mailto:${email.value}`,
                className: (style_module_default())["contact-menu__link"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {
                        }),
                        email.value
                    ]
                })
            })
        }, `email-${index}`)
    )
;
const getSocialIconByType = (type)=>{
    switch(type){
        case "whatsapp":
            return(/*#__PURE__*/ jsx_runtime_.jsx(icons_.WhatsAppOutlined, {
            }));
        case "vk":
            return(/*#__PURE__*/ jsx_runtime_.jsx(icons_.WarningOutlined, {
            }));
        case "telegram":
            return(/*#__PURE__*/ jsx_runtime_.jsx(icons_.WarningOutlined, {
            }));
        case "instagram":
            return(/*#__PURE__*/ jsx_runtime_.jsx(icons_.InstagramOutlined, {
            }));
    }
};
const getSocialItem = (socialItems, type)=>socialItems.filter((social)=>social.active
    ).map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
            className: (style_module_default())["contact-menu__item"],
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: social.url,
                target: "_blank",
                className: (style_module_default())["contact-menu__link"],
                rel: "noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                    children: [
                        getSocialIconByType(type),
                        social.value
                    ]
                })
            })
        }, `social-${index}-${social.value}`)
    )
;
const getSocialItems = (socials)=>Object.entries(socials).map(([socialType, social])=>{
        return getSocialItem(social, socialType);
    })
;

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/molecules/contact-menu/ContactMenu.tsx






const ContactMenu = ({ className , theme , ...props })=>{
    const { addresses , tels , emails , socials ,  } = contacts;
    const classes = external_classnames_default()((style_module_default())["contact-menu"], {
        [(style_module_default())[`contact-menu--theme--${theme}`]]: !!theme
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
        className: classes,
        ...props,
        children: [
            getAddressItems(addresses),
            getTelItems(tels),
            getEmailItems(emails),
            getSocialItems(socials), 
        ]
    }));
};
ContactMenu.defaultProps = {
    theme: "dark"
};


;// CONCATENATED MODULE: ./src/components/molecules/contact-menu/index.ts



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



/***/ })

};
;