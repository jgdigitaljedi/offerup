"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var cloudscraper = require("cloudscraper");
var request = require("request");
var form_urlencoded_1 = require("form-urlencoded");
var fs = require("fs");
var path = require("path");
var _ = require("lodash");
var OfferUp = /** @class */ (function () {
    function OfferUp() {
        this.baseHost = 'https://api.offerupnow.com/api/v2';
        this.timeout = 5000;
        this.offerupConfigPath = '';
        this.token = undefined;
    }
    OfferUp.prototype.checkToken = function () {
        if (!this.token) {
            throw Error('Token is not defined. Please use OfferUp.authorize() to get token.');
        }
    };
    /**
     * Account APIs. Token required!
     */
    OfferUp.prototype.getMyProfile = function () {
        this.checkToken();
        return this.baseRequest(this.baseHost + "/user/me/");
    };
    OfferUp.prototype.getAccountPayment = function () {
        this.checkToken();
        return this.baseRequest(this.baseHost + "/user/me/payment-account/");
    };
    OfferUp.prototype.getAccountPaymentHistory = function () {
        this.checkToken();
        return this.baseRequest(this.baseHost + "/user/me/payment-history/");
    };
    OfferUp.prototype.getBoardsList = function () {
        this.checkToken();
        return this.baseRequest('https://api.offerupnow.com/api/offer_boards/v1/boards/');
    };
    OfferUp.prototype.getUserRelation = function (userid) {
        this.checkToken();
        if (!userid || typeof userid !== 'number') {
            throw Error('Userid is invalid or missing');
        }
        return this.baseRequest(this.baseHost + "/userrelation/" + userid, {
            checkBodyStatus: false,
            returnBody: true
        });
    };
    OfferUp.prototype.offerPrice = function (itemid, price) {
        this.checkToken();
        if (!itemid || typeof itemid !== 'number') {
            throw Error('ItemId is invalid or missing');
        }
        if (!price || typeof price !== 'number') {
            throw Error('Price is invalid or missing');
        }
        return this.basePostRequst(this.baseHost + "/item/" + itemid + "/offer/", 'offer=' + price);
    };
    OfferUp.prototype.authorize = function (username, password, options) {
        var _this = this;
        if (options === void 0) { options = { useDefault: true }; }
        if (!username || !password) {
            throw Error('Username or password not defined.');
        }
        if (options.useDefault) {
            this.offerupConfigPath = path.resolve(__dirname, './../.offerup');
            var offerupConfig = void 0;
            if (fs.existsSync(this.offerupConfigPath)) {
                offerupConfig = fs.readFileSync(this.offerupConfigPath, {
                    encoding: 'utf8'
                });
                var offerupSettings = _.split(offerupConfig, ':');
                if (offerupSettings.length == 2 && username == offerupSettings[1]) {
                    this.token = offerupSettings[0];
                    return this.baseRequest('https://api.offerupnow.com/api/v2/user/me');
                }
            }
        }
        return new Promise(function (resolve, reject) {
            _this.postRequest('https://api.offerupnow.com/api/v2/user/me', { username: username, password: password }).then(function (data) {
                if (options.useDefault && data.session && data.session.token && _this.offerupConfigPath && !fs.existsSync(_this.offerupConfigPath)) {
                    fs.writeFileSync(_this.offerupConfigPath, data.session.token + ":" + username, {
                        encoding: 'utf8'
                    });
                }
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Gets user by id
     * @param userid
     */
    OfferUp.prototype.getUser = function (userid) {
        if (!userid || typeof userid !== 'number') {
            throw Error('userid is not valid or missing.');
        }
        return this.baseRequest(this.baseHost + "/user/" + userid);
    };
    /**
     * Gets all categories
     */
    OfferUp.prototype.getCategories = function () {
        return this.baseRequest(this.baseHost + "/categories/");
    };
    /**
     * Gets all lists
     */
    OfferUp.prototype.getLists = function () {
        return this.baseRequest(this.baseHost + "/itemlists/");
    };
    /**
     * Get item by id
     * @param itemid
     */
    OfferUp.prototype.getItem = function (itemid) {
        if (!itemid || typeof itemid !== 'number') {
            throw Error('itemid is not valid or missing.');
        }
        return this.baseRequest(this.baseHost + "/item/" + itemid);
    };
    OfferUp.prototype.postRequest = function (url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                request({
                    url: url,
                    body: form_urlencoded_1.default(data),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*'
                    }
                }, function (err, response, body) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (response.statusCode !== HTTPStatus.OK) {
                        reject(new Error("Unexpected status code: " + response.statusCode));
                        return;
                    }
                    if (typeof body == 'undefined') {
                        reject(new Error("Unexpected response from offerup: body is undefined"));
                    }
                    body = JSON.parse(body);
                    if (typeof body.status == 'undefined' || body.status.code !== '200') {
                        reject(new Error("Unexpected response from offerup: " + body.status));
                    }
                    if (body.data.token) {
                        _this.token = body.data.token;
                    }
                    resolve(body.data);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    OfferUp.prototype.basePostRequst = function (url, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var options = {
                    url: url,
                    body: body,
                    method: 'POST',
                    encoding: 'UTF8',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*',
                        'Cookie': 'sessionid=' + _this.token
                    }
                };
                cloudscraper.request(options, function (err, response, body) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (response.statusCode !== HTTPStatus.CREATED) {
                        reject(new Error("Unexpected status code: " + response.statusCode));
                        return;
                    }
                    if (typeof body == 'undefined') {
                        reject(new Error("Unexpected response from offerup: body is undefined"));
                    }
                    body = JSON.parse(body);
                    resolve(body.data);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    OfferUp.prototype.baseRequest = function (url, requestOptions) {
        var _this = this;
        if (requestOptions === void 0) { requestOptions = { checkBodyStatus: true, returnBody: false }; }
        return new Promise(function (resolve, reject) {
            try {
                var options = {
                    url: url,
                    method: requestOptions.method || 'GET',
                    timeout: _this.timeout,
                    followAllRedirects: true
                };
                var headers = {};
                if (_this.token) {
                    Object.defineProperty(headers, 'Cookie', {
                        writable: true,
                        enumerable: true,
                        value: "sessionid=" + _this.token
                    });
                }
                if (requestOptions.body) {
                    options.body = form_urlencoded_1.default(requestOptions.body);
                }
                if (requestOptions.method == 'POST') {
                    options.encoding = null;
                    Object.defineProperty(headers, 'Content-Type', {
                        writable: true,
                        enumerable: true,
                        value: "application/x-www-form-urlencoded"
                    });
                    Object.defineProperty(headers, 'Accept', {
                        writable: true,
                        enumerable: true,
                        value: "*/*"
                    });
                }
                if (_.size(headers) > 0) {
                    options.headers = headers;
                }
                cloudscraper.request(options, function (err, response, body) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (response.statusCode !== HTTPStatus.OK) {
                        reject(new Error("Unexpected status code: " + response.statusCode));
                        return;
                    }
                    if (typeof body == 'undefined') {
                        reject(new Error("Unexpected response from offerup: body is undefined"));
                    }
                    body = JSON.parse(body);
                    if (requestOptions.checkBodyStatus) {
                        if (typeof body.status == 'undefined' || +body.status.code !== 200) {
                            reject(new Error("Unexpected response from offerup: " + body.status));
                        }
                    }
                    if (requestOptions.returnBody) {
                        resolve(body);
                        return;
                    }
                    resolve(body.data);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return OfferUp;
}());
exports.default = OfferUp;
