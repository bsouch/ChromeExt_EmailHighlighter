var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var StorageServiceModule;
(function (StorageServiceModule) {
    var StorageService = /** @class */ (function () {
        function StorageService() {
            this.EMAIL_HIGHLIGHT_KEY = "EmailHighlight";
            this._emailHighlightData = new DataModels.EmailHighlightData();
        }
        Object.defineProperty(StorageService, "GetInstance", {
            get: function () {
                return this._instance || (this._instance = new this());
            },
            enumerable: false,
            configurable: true
        });
        StorageService.prototype.GetFilters = function () {
            return __awaiter(this, void 0, void 0, function () {
                var promiseData, emailHighlightData, ex_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, chrome.storage.sync.get(this.EMAIL_HIGHLIGHT_KEY)];
                        case 1:
                            promiseData = _a.sent();
                            console.error("Data: ", promiseData);
                            emailHighlightData = JSON.parse(promiseData[this.EMAIL_HIGHLIGHT_KEY]);
                            this._emailHighlightData = emailHighlightData;
                            return [2 /*return*/, emailHighlightData];
                        case 2:
                            ex_1 = _a.sent();
                            console.error("Exception thrown accessing the Chrome Storage.");
                            return [2 /*return*/, new DataModels.EmailHighlightData()];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StorageService.prototype.AddFilter = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var ex_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this._emailHighlightData.filters.push(data.filters[0]);
                            return [4 /*yield*/, this.Set(this._emailHighlightData)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            ex_2 = _a.sent();
                            console.error("Set filters failed: ".concat(ex_2));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StorageService.prototype.RemoveFilter = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var ex_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this._emailHighlightData.filters = this._emailHighlightData.filters.filter(function (f) { return f.id !== id; });
                            return [4 /*yield*/, this.Set(this._emailHighlightData)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            ex_3 = _a.sent();
                            console.error("Remove Filter failed: ".concat(ex_3));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StorageService.prototype.Set = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var jsonData, ex_4;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            jsonData = JSON.stringify(data);
                            return [4 /*yield*/, chrome.storage.sync.set((_a = {}, _a[this.EMAIL_HIGHLIGHT_KEY] = jsonData, _a))];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            ex_4 = _b.sent();
                            console.error("Set failed: ".concat(ex_4));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return StorageService;
    }());
    StorageServiceModule.StorageService = StorageService;
})(StorageServiceModule || (StorageServiceModule = {}));
//# sourceMappingURL=storageservice.js.map