"use strict";
(() => {
var exports = {};
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 9901:
/***/ ((module) => {

module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 1444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ categories)
});

// EXTERNAL MODULE: ./src/services/backend/RequestHandler/RequestHandler.ts
var RequestHandler = __webpack_require__(4526);
// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(4891);
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

;// CONCATENATED MODULE: ./src/services/backend/cache/CacheService.ts
const CacheService = new class {
    setCachePage(res) {
        res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=72000");
    }
};

;// CONCATENATED MODULE: ./src/pages/api/shop/categories.ts



const handlerCategories = (req, res)=>{
    const requestHandler = new RequestHandler/* RequestHandler */.Z(req, res);
    requestHandler.GET(async ()=>{
        const { payload , error ,  } = await CategoryService.getMany();
        if (error) {
            res.status(error.statusCode).json(error);
        } else {
            res && CacheService.setCachePage(res);
            res.status(200).json(payload);
        }
    });
};
/* harmony default export */ const categories = (handlerCategories);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [379], () => (__webpack_exec__(1444)));
module.exports = __webpack_exports__;

})();