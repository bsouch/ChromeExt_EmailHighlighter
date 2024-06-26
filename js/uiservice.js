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
var UIServiceModule;
(function (UIServiceModule) {
    var UIService = /** @class */ (function () {
        function UIService() {
            this._storageService = StorageServiceModule.StorageService.GetInstance;
            this._viewFiltersID = "viewFilters";
            this._filterID = "filters";
            this._editFilterID = "editFilter";
        }
        UIService.prototype.RenderAllFilters = function () {
            return __awaiter(this, void 0, void 0, function () {
                var emailHighlightData, emailHighlightDataHtml, ex_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this._storageService.GetFilters()];
                        case 1:
                            emailHighlightData = _a.sent();
                            emailHighlightDataHtml = this.GetEmailHighlightDataHtml(emailHighlightData);
                            document.getElementById(this._filterID).innerHTML = emailHighlightDataHtml;
                            return [3 /*break*/, 3];
                        case 2:
                            ex_1 = _a.sent();
                            console.error("Error whilst rendering filters: ".concat(ex_1));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        UIService.prototype.GetEmailHighlightDataHtml = function (emailHighlightData) {
            var _this = this;
            var htmlBuilder = [];
            emailHighlightData.filters.forEach(function (el) {
                return _this.EmailHighlightDataToHtml(el, htmlBuilder);
            });
            return htmlBuilder.join("");
        };
        UIService.prototype.EmailHighlightDataToHtml = function (filter, htmlBuilder) {
            var html = "<div id=\"".concat(filter.id, "\" class='card shadow'>\n                    <div class=\"card-body\">\n                        <table class=\"table table-borderless m-0\">\n                            <tbody>\n                                <tr class=\"align-middle\">\n                                    <td>").concat(filter.name, "</td>\n                                    <td>Appearance</td>\n                                    <td>\n                                        <div class=\"text-center filterAction\">\n                                            <span>Edit</span>\n                                        </div>\n                                        <div class=\"text-center filterAction\">\n                                            <span>Delete</span>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"form-check form-switch\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\n                                                id=\"flexSwitchCheckChecked\" ").concat(filter.enabled ? "checked" : "", ">\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>");
            htmlBuilder.push(html);
        };
        return UIService;
    }());
    UIServiceModule.UIService = UIService;
})(UIServiceModule || (UIServiceModule = {}));
//# sourceMappingURL=uiservice.js.map