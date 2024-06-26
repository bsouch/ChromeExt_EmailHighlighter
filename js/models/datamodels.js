var DataModels;
(function (DataModels) {
    var EmailHighlightData = /** @class */ (function () {
        function EmailHighlightData() {
            this.filters = [];
        }
        return EmailHighlightData;
    }());
    DataModels.EmailHighlightData = EmailHighlightData;
    var Filter = /** @class */ (function () {
        function Filter() {
            this.id = self.crypto.randomUUID();
            this.appearance = new Appearance();
        }
        return Filter;
    }());
    DataModels.Filter = Filter;
    var Appearance = /** @class */ (function () {
        function Appearance() {
            this.border = new Border;
            this.minWidth = "0px";
        }
        return Appearance;
    }());
    var Border = /** @class */ (function () {
        function Border() {
        }
        return Border;
    }());
})(DataModels || (DataModels = {}));
//# sourceMappingURL=datamodels.js.map