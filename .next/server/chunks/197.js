"use strict";
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 4197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ NewsService)
});

// EXTERNAL MODULE: ./src/repositories/api/BaseRepository.ts + 1 modules
var BaseRepository = __webpack_require__(5261);
;// CONCATENATED MODULE: ./src/repositories/api/blog/NewsRepository.ts

class NewsRepository extends BaseRepository/* BaseRepository */.R {
    async findMany(options) {
        const { limit  } = options;
        const params = this.getQueryBuilder().setFilter([
            {
                field: "category.id",
                operator: "$eq",
                value: 1
            },
            {
                field: "active",
                operator: "$eq",
                value: true
            }, 
        ]).setLimit(limit || 10).query();
        return await this.fetch(`/blog/articles/?${params}`);
    }
    async findById(id) {
        const params = this.getQueryBuilder().setFilter([
            {
                field: "category.id",
                operator: "$eq",
                value: 1
            },
            {
                field: "active",
                operator: "$eq",
                value: true
            }, 
        ]).query();
        return await this.fetch(`/blog/articles/${id}?${params}`);
    }
}

;// CONCATENATED MODULE: ./src/services/backend/api/blog/NewsService.ts

const NewsService = new class {
    constructor(){
        this.repository = new NewsRepository();
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