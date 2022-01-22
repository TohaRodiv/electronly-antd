"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 5261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ BaseRepository)
});

;// CONCATENATED MODULE: ./src/services/backend/api/auth/AuthService.ts
const AuthService = new class {
    async getAccessToken() {
        if (!this.tokens.access_token) {
            return (await this.authorize()).access_token;
        } else {
            return this.tokens.access_token;
        }
    }
    setAccessToken(accessToken) {
        this.tokens.access_token = accessToken;
    }
    async authorize() {
        const authResponse = await fetch(`${process.env.API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username: process.env.API_LOGIN,
                password: process.env.API_PASSWORD
            }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        if (!authResponse.ok) {
            throw new Error("Ошибка авторизации, проверьте правильность логина / пароля.");
        }
        const tokens = await authResponse.json();
        if ("access_token" in tokens) {
            this.setAccessToken(tokens.access_token);
            return tokens;
        } else {
            throw new Error("Access token not found!");
        }
    }
    constructor(){
        this.tokens = {
            access_token: null
        };
    }
};

// EXTERNAL MODULE: external "@nestjsx/crud-request"
var crud_request_ = __webpack_require__(9901);
;// CONCATENATED MODULE: ./src/repositories/api/BaseRepository.ts


class BaseRepository {
    constructor(){
        crud_request_.RequestQueryBuilder.setOptions({
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
            const { headers , ...optionFields } = options || {
            };
            const response = await fetch(`${process.env.API_URL}${url}`, {
                ...optionFields,
                headers: new Headers({
                    ...headers,
                    "Authorization": `Bearer ${await AuthService.getAccessToken()}`
                })
            });
            result.response = response;
            const resultJSON = await response.json();
            if (!response.ok) {
                if (response.status == 401) {
                    await AuthService.authorize();
                    await this.fetch(url, options);
                }
                result.error = resultJSON;
            } else {
                result.payload = resultJSON;
            }
        } catch (error) {
            console.error(error);
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
        return crud_request_.RequestQueryBuilder.create();
    }
}


/***/ })

};
;