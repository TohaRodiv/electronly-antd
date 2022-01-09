"use strict";
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 6605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ BaseAPIService)
/* harmony export */ });
/* harmony import */ var _nestjsx_crud_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9901);
/* harmony import */ var _nestjsx_crud_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_request__WEBPACK_IMPORTED_MODULE_0__);

class BaseAPIService {
    constructor(){
        _nestjsx_crud_request__WEBPACK_IMPORTED_MODULE_0__.RequestQueryBuilder.setOptions({
            delim: "||",
            delimStr: ",",
            paramNamesMap: {
                fields: [
                    "fields",
                    "select"
                ],
                search: "s",
                filter: [
                    "filter[]",
                    "filter"
                ],
                or: [
                    "or[]",
                    "or"
                ],
                join: [
                    "join[]",
                    "join"
                ],
                sort: [
                    "sort[]",
                    "sort"
                ],
                limit: [
                    "per_page",
                    "limit"
                ],
                offset: [
                    "offset"
                ],
                page: [
                    "page"
                ],
                cache: [
                    "cache"
                ]
            }
        });
    }
    async fetch(url, options) {
        const result = {
            response: null,
            payload: null,
            error: null
        };
        try {
            const response = await fetch(`/api${url}`, options);
            result.response = response;
            const resultJSON = await response.json();
            if ([
                200,
                201, 
            ].includes(response.status) === false) {
                result.error = resultJSON;
            } else {
                result.payload = resultJSON;
            }
        } catch (error) {
            if (error instanceof Error) {
                result.error = {
                    statusCode: 500,
                    error: error.name,
                    message: error.message
                };
            } else {
                throw new Error(`Unknown type of error: ${error}`);
            }
        }
        return result;
    }
    getQueryBuilder() {
        return _nestjsx_crud_request__WEBPACK_IMPORTED_MODULE_0__.RequestQueryBuilder.create();
    }
}


/***/ })

};
;