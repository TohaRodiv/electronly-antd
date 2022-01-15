(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3326:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__IELx8",
	"container--fluid": "style_container--fluid__iGDNB"
};


/***/ }),

/***/ 3001:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "style_logo__UboK3",
	"logo__inner": "style_logo__inner__J55Go",
	"logo__icon": "style_logo__icon__QtlOM"
};


/***/ }),

/***/ 5405:
/***/ ((module) => {

// Exports
module.exports = {
	"catalog-menu__item": "style_catalog-menu__item__mk8Fm",
	"catalog-menu--theme--dark": "style_catalog-menu--theme--dark__PsTuB",
	"catalog-menu__link": "style_catalog-menu__link__qOA43"
};


/***/ }),

/***/ 7942:
/***/ ((module) => {

// Exports
module.exports = {
	"main-menu": "style_main-menu__JzMSu",
	"main-menu__icon--collapsed": "style_main-menu__icon--collapsed__0xQD6",
	"main-menu-list__item": "style_main-menu-list__item__qoRbP",
	"main-menu-list--theme--dark": "style_main-menu-list--theme--dark__TfKz6",
	"main-menu-list__link": "style_main-menu-list__link__Ftdj6"
};


/***/ }),

/***/ 8641:
/***/ ((module) => {

// Exports
module.exports = {
	"usefull-menu__item": "style_usefull-menu__item__hYA8z",
	"usefull-menu--theme--dark": "style_usefull-menu--theme--dark__tth9x",
	"usefull-menu__link": "style_usefull-menu__link__j1S4T"
};


/***/ }),

/***/ 558:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7846:
/***/ ((module) => {

// Exports
module.exports = {
	"app-footer": "style_app-footer__fg7mG",
	"app-footer__head": "style_app-footer__head__89gHD",
	"app-footer__description": "style_app-footer__description__ayyaC",
	"app-footer__copyright-wrapper": "style_app-footer__copyright-wrapper__D01K7"
};


/***/ }),

/***/ 9349:
/***/ ((module) => {

// Exports
module.exports = {
	"app-header": "style_app-header__1MtOv",
	"app-header__inner": "style_app-header__inner__a0RYT",
	"app-header__menu-icon": "style_app-header__menu-icon__hHVp6",
	"app-header__toggle-menu": "style_app-header__toggle-menu__Qslys",
	"app-header__main-menu": "style_app-header__main-menu__vqN8_"
};


/***/ }),

/***/ 3197:
/***/ ((module) => {

// Exports
module.exports = {
	"app-layout": "style_app-layout___j3cQ"
};


/***/ }),

/***/ 4313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/atoms/container/style.module.scss
var style_module = __webpack_require__(3326);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/atoms/container/Container.tsx



const Container = ({ children , fluid , className , ...props })=>{
    const classes = external_classnames_default()((style_module_default()).container, {
        [(style_module_default())["container--fluid"]]: fluid
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes,
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/atoms/container/index.ts



/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ ProductSearchForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/molecules/product-search-form/ProductSearchForm.tsx



const ProductSearchForm = ({ ...props })=>{
    const router = (0,router_.useRouter)();
    const handleSearch = (data)=>{
        router.push(`/search/${data}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Search, {
        onSearch: handleSearch,
        ...props
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/product-search-form/index.ts



/***/ }),

/***/ 4482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/templates/app-layout/style.module.scss
var style_module = __webpack_require__(3197);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./src/components/atoms/container/index.ts + 1 modules
var container = __webpack_require__(4313);
;// CONCATENATED MODULE: external "antd/lib/layout/layout"
const layout_namespaceObject = require("antd/lib/layout/layout");
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/organisms/app-footer/style.module.scss
var app_footer_style_module = __webpack_require__(7846);
var app_footer_style_module_default = /*#__PURE__*/__webpack_require__.n(app_footer_style_module);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__(6492);
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);
// EXTERNAL MODULE: ./src/components/atoms/link/index.ts + 1 modules
var atoms_link = __webpack_require__(5142);
;// CONCATENATED MODULE: ./src/data/main-menu.ts
const mainMenu = [
    {
        path: "/catalog",
        title: "Каталог"
    },
    {
        path: "/about",
        title: "О нас"
    },
    {
        path: "/payment-and-delivery",
        title: "Оплата и доставка"
    },
    {
        path: "/news",
        title: "Новости"
    },
    {
        path: "/contacts",
        title: "Контакты"
    }, 
];

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/molecules/main-menu/style.module.scss
var main_menu_style_module = __webpack_require__(7942);
var main_menu_style_module_default = /*#__PURE__*/__webpack_require__.n(main_menu_style_module);
;// CONCATENATED MODULE: ./src/components/molecules/main-menu/MainMenu.tsx







const MainMenu = ({ className , icon , ...props })=>{
    const classes = external_classnames_default()((main_menu_style_module_default())["main-menu"], className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu, {
        selectable: false,
        className: classes,
        ...props,
        children: mainMenu.map((menuItem, indexItem)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                icon: icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                    href: menuItem.path,
                    text: menuItem.title
                })
            }, `${menuItem.path}-${indexItem}`)
        )
    }));
};
MainMenu.defaultProps = {
    theme: "dark",
    mode: "horizontal",
    overflowedIndicator: /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoreOutlined, {
        className: (main_menu_style_module_default())["main-menu__icon--collapsed"]
    })
};


// EXTERNAL MODULE: ./src/components/molecules/space/index.ts + 1 modules
var space = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/molecules/main-menu/MainMenuList.tsx







const MainMenuList = ({ className , icon , theme , ...props })=>{
    const classes = external_classnames_default()((main_menu_style_module_default())["main-menu-list"], {
        [(main_menu_style_module_default())[`main-menu-list--theme--${theme}`]]: !!theme
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
        className: classes,
        ...props,
        children: mainMenu.map((menuItem, indexItem)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
                className: (main_menu_style_module_default())["main-menu-list__item"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                    href: menuItem.path,
                    className: (main_menu_style_module_default())["main-menu-list__link"],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                        children: [
                            icon,
                            menuItem.title
                        ]
                    })
                })
            }, `${menuItem.path}-${indexItem}`)
        )
    }));
};
MainMenuList.defaultProps = {
    theme: "dark"
};


;// CONCATENATED MODULE: ./src/components/molecules/main-menu/index.ts



// EXTERNAL MODULE: ./src/components/molecules/catalog-menu/style.module.scss
var catalog_menu_style_module = __webpack_require__(5405);
var catalog_menu_style_module_default = /*#__PURE__*/__webpack_require__.n(catalog_menu_style_module);
;// CONCATENATED MODULE: ./src/context/AppContext.tsx


const appData = {
    categories: []
};
const AppContext = /*#__PURE__*/ (0,external_react_.createContext)(appData);
const AppProvider = ({ children , value ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: value,
        children: children
    }));
};
const useAppData = ()=>useContext(AppContext)
;

;// CONCATENATED MODULE: ./src/components/molecules/catalog-menu/CatalogMenu.tsx








const CatalogMenu = ({ className , icon , theme , ...props })=>{
    const classes = external_classnames_default()((catalog_menu_style_module_default())["catalog-menu"], {
        [(catalog_menu_style_module_default())[`catalog-menu--theme--${theme}`]]: !!theme
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppContext.Consumer, {
        children: ({ categories  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Spin, {
                indicator: /*#__PURE__*/ jsx_runtime_.jsx(icons_.LoadingOutlined, {
                }),
                spinning: !!!categories,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
                    className: classes,
                    ...props,
                    children: categories && categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
                            className: (catalog_menu_style_module_default())["catalog-menu__item"],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                                href: `/catalog/${category.id}`,
                                className: (catalog_menu_style_module_default())["catalog-menu__link"],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                                    children: [
                                        icon,
                                        category.title
                                    ]
                                })
                            })
                        }, `category-${category.id}`)
                    )
                })
            })
    }));
};
CatalogMenu.defaultProps = {
    theme: "light"
};


;// CONCATENATED MODULE: ./src/components/molecules/catalog-menu/index.ts


// EXTERNAL MODULE: external "antd/lib/typography/Paragraph"
var Paragraph_ = __webpack_require__(1774);
var Paragraph_default = /*#__PURE__*/__webpack_require__.n(Paragraph_);
// EXTERNAL MODULE: ./src/components/molecules/contact-menu/index.ts + 3 modules
var contact_menu = __webpack_require__(8635);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(1879);
;// CONCATENATED MODULE: ./src/data/usefull-menu.ts
const usefullMenu = [
    {
        title: "Поиск в каталоге",
        path: "/search"
    },
    {
        title: "Поиск заказа",
        path: "/tracking"
    }, 
];

// EXTERNAL MODULE: ./src/components/molecules/usefull-menu/style.module.scss
var usefull_menu_style_module = __webpack_require__(8641);
var usefull_menu_style_module_default = /*#__PURE__*/__webpack_require__.n(usefull_menu_style_module);
;// CONCATENATED MODULE: ./src/components/molecules/usefull-menu/UsefullMenu.tsx







const UsefullMenu = ({ className , icon , theme , ...props })=>{
    const classes = external_classnames_default()((usefull_menu_style_module_default())["usefull-menu"], {
        [(usefull_menu_style_module_default())[`usefull-menu--theme--${theme}`]]: !!theme
    }, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
        className: classes,
        ...props,
        children: usefullMenu && usefullMenu.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
                className: (usefull_menu_style_module_default())["usefull-menu__item"],
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
                    href: item.path,
                    className: (usefull_menu_style_module_default())["usefull-menu__link"],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space/* Space */.T, {
                        children: [
                            icon,
                            item.title
                        ]
                    })
                })
            }, `usefull-${index}`)
        )
    }));
};
UsefullMenu.defaultProps = {
    theme: "dark"
};


;// CONCATENATED MODULE: ./src/components/molecules/usefull-menu/index.ts


;// CONCATENATED MODULE: ./src/components/organisms/app-footer/AppFooter.tsx














const AppFooter = ({ className , ...props })=>{
    const classes = external_classnames_default()((app_footer_style_module_default())["app-footer"], className);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Footer, {
        className: classes,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                    gutter: [
                        24,
                        8
                    ],
                    justify: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                            xs: 24,
                            lg: 6,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Title_default()), {
                                    level: 5,
                                    className: (app_footer_style_module_default())["app-footer__head"],
                                    children: [
                                        about/* about.name */.j.name,
                                        " - ",
                                        about/* about.shortDescription */.j.shortDescription
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Paragraph_default()), {
                                    className: (app_footer_style_module_default())["app-footer__description"],
                                    children: about/* about.fullDescription */.j.fullDescription
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 5,
                                    className: (app_footer_style_module_default())["app-footer__head"],
                                    children: "Меню"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainMenuList, {
                                    theme: "dark",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 5,
                                    className: (app_footer_style_module_default())["app-footer__head"],
                                    children: "Каталог"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogMenu, {
                                    theme: "dark",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 5,
                                    className: (app_footer_style_module_default())["app-footer__head"],
                                    children: "Полезное"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(UsefullMenu, {
                                    theme: "dark",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Title_default()), {
                                    level: 5,
                                    className: (app_footer_style_module_default())["app-footer__head"],
                                    children: "Контакты"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(contact_menu/* ContactMenu */.s, {
                                    theme: "dark"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (app_footer_style_module_default())["app-footer__copyright-wrapper"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
                    children: [
                        (new Date).getFullYear(),
                        " \xa9 ",
                        about/* about.name */.j.name,
                        " - ",
                        about/* about.shortDescription */.j.shortDescription
                    ]
                })
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/organisms/app-footer/index.ts


;// CONCATENATED MODULE: ./src/components/organisms/drawer-catalog/DrawerCatalog.tsx





const DrawerCatalog = ({ show , className , ...props })=>{
    const classes = external_classnames_default()(className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Drawer, {
        className: classes,
        ...props,
        children: show && /*#__PURE__*/ jsx_runtime_.jsx(CatalogMenu, {
            className: "custom-menu",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
            })
        })
    }));
};
DrawerCatalog.defaultProps = {
    width: 300,
    placement: "left",
    title: "Каталог"
};


;// CONCATENATED MODULE: ./src/components/organisms/drawer-catalog/index.ts


// EXTERNAL MODULE: ./src/components/organisms/app-header/style.module.scss
var app_header_style_module = __webpack_require__(9349);
var app_header_style_module_default = /*#__PURE__*/__webpack_require__.n(app_header_style_module);
// EXTERNAL MODULE: ./src/components/molecules/app-logo/style.module.scss
var app_logo_style_module = __webpack_require__(3001);
var app_logo_style_module_default = /*#__PURE__*/__webpack_require__.n(app_logo_style_module);
;// CONCATENATED MODULE: ./src/components/molecules/app-logo/AppLogo.tsx





const AppLogo = ({ className  })=>{
    const classes = external_classnames_default()((app_logo_style_module_default()).logo, className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms_link/* Link */.r, {
        href: "/",
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: (app_logo_style_module_default()).logo__inner,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(icons_.ThunderboltOutlined, {
                    className: (app_logo_style_module_default()).logo__icon
                }),
                "Electronly"
            ]
        })
    }));
};


;// CONCATENATED MODULE: ./src/components/molecules/app-logo/index.ts


// EXTERNAL MODULE: ./src/components/molecules/product-search-form/index.ts + 1 modules
var product_search_form = __webpack_require__(195);
;// CONCATENATED MODULE: ./src/components/organisms/app-header/AppHeader.tsx












const AppHeader = ({ className , ...props })=>{
    const { 0: collapsedMenu , 1: setCollapsedMenu  } = (0,external_react_.useState)(false);
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const toggleCollapsedMenu = ()=>{
        setCollapsedMenu(!collapsedMenu);
    };
    (0,external_react_.useEffect)(()=>{
        setShow(true);
    }, []);
    const classes = external_classnames_default()((app_header_style_module_default())["app-header"], className);
    const menuClasses = external_classnames_default()((app_header_style_module_default())["app-header__menu-icon"], (app_header_style_module_default())["app-header__toggle-menu"]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Header, {
                className: classes,
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (app_header_style_module_default())["app-header__inner"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AppLogo, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.MenuOutlined, {
                                className: menuClasses,
                                onClick: toggleCollapsedMenu
                            }),
                            show && /*#__PURE__*/ jsx_runtime_.jsx(MainMenu, {
                                className: (app_header_style_module_default())["app-header__main-menu"]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popover, {
                                placement: "bottomLeft",
                                title: "Поиск в каталоге",
                                className: (app_header_style_module_default())["app-header__menu-icon"],
                                content: /*#__PURE__*/ jsx_runtime_.jsx(product_search_form/* ProductSearchForm */.j, {
                                    enterButton: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchOutlined, {
                                        }),
                                        type: "primary",
                                        ghost: true
                                    })
                                }),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchOutlined, {
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DrawerCatalog, {
                onClose: toggleCollapsedMenu,
                visible: collapsedMenu,
                show: show
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/organisms/app-header/index.ts


// EXTERNAL MODULE: ./src/components/organisms/app-content/style.module.scss
var app_content_style_module = __webpack_require__(558);
var app_content_style_module_default = /*#__PURE__*/__webpack_require__.n(app_content_style_module);
;// CONCATENATED MODULE: ./src/components/organisms/app-content/AppContent.tsx




const AppContent = ({ className , children , ...props })=>{
    const classes = external_classnames_default()((app_content_style_module_default())["app-content"], className);
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Content, {
        className: classes,
        ...props,
        children: children
    }));
};


;// CONCATENATED MODULE: ./src/components/organisms/app-content/index.ts


;// CONCATENATED MODULE: ./src/components/templates/app-layout/AppLayout.tsx







const AppLayout = ({ children , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Layout, {
        ...props,
        className: (style_module_default())["app-layout"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AppHeader, {
                className: (style_module_default())["app-layout__header"]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AppContent, {
                className: (style_module_default())["app-layout__main"],
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AppFooter, {
                className: (style_module_default())["app-layout__footer"]
            })
        ]
    }));
};


;// CONCATENATED MODULE: ./src/components/templates/app-layout/index.ts


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/data/seo.ts

const seo = {
    titleTemplate: `%s | ${about/* about.name */.j.name} - ${about/* about.shortDescription */.j.shortDescription}`,
    defaultTitle: `${about/* about.name */.j.name} - ${about/* about.shortDescription */.j.shortDescription}`
};

// EXTERNAL MODULE: ./src/services/frontend/api/BaseAPIService.ts
var BaseAPIService = __webpack_require__(6605);
;// CONCATENATED MODULE: ./src/services/frontend/api/ShopCategoryService.ts

const ShopCategoryService = new class extends BaseAPIService/* BaseAPIService */.M {
    async getMany() {
        return await this.fetch("/shop/categories");
    }
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx











function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const { payload , error ,  } = await ShopCategoryService.getMany();
            if (!error) {
                setCategories(payload);
            } else {
                console.error(`Error fetch categories. ${error.message}: ${error.statusCode}`);
            }
        })();
        const handleStart = ()=>{
            external_nprogress_default().start();
        };
        const handleStop = ()=>{
            external_nprogress_default().done();
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, []);
    const pageLayout = (page)=>page
    ;
    const appLayout = (page)=>/*#__PURE__*/ jsx_runtime_.jsx(AppLayout, {
            children: page
        })
    ;
    const getLayout = Component.getLayout ? pageLayout : appLayout;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.ConfigProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppProvider, {
            value: {
                categories
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                    ...seo
                }),
                getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })),
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.BackTop, {
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 9901:
/***/ ((module) => {

"use strict";
module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/typography/Paragraph");

/***/ }),

/***/ 6492:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,303,635,605], () => (__webpack_exec__(4482)));
module.exports = __webpack_exports__;

})();