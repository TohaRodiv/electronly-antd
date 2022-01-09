"use strict";
(() => {
var exports = {};
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 9901:
/***/ ((module) => {

module.exports = require("@nestjsx/crud-request");

/***/ }),

/***/ 5322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ orders)
});

// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(4891);
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

// EXTERNAL MODULE: ./src/services/backend/RequestHandler/RequestHandler.ts
var RequestHandler = __webpack_require__(4526);
;// CONCATENATED MODULE: ./src/pages/api/shop/orders.ts


const handleOrders = (req, res)=>{
    const requestHandler = new RequestHandler/* RequestHandler */.Z(req, res);
    requestHandler.POST(async (data)=>{
        const { payload , error  } = await OrderService.createAndSave(data);
        if (error) {
            res.status(error.statusCode || 500).json(error);
        } else {
            res.status(201).json(payload);
        }
    });
};
/* harmony default export */ const orders = (handleOrders);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [379], () => (__webpack_exec__(5322)));
module.exports = __webpack_exports__;

})();