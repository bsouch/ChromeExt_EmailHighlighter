var UIServiceModule;
(function (UIServiceModule) {
    var UIService = /** @class */ (function () {
        function UIService() {
            this._storageService = new StorageServiceModule.StorageService();
        }
        UIService.prototype.RenderAllFilters = function () {
        };
        return UIService;
    }());
    UIServiceModule.UIService = UIService;
})(UIServiceModule || (UIServiceModule = {}));
