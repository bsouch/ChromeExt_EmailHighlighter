/**
 * 1. Create Storage service module to handle data access. DONE
 * 2. Create data model that we want to serialise for storage. DONE
 * 3. Create page load function to get all filters from storage. DONE
 * 4. Create UI service module to handle UI changes.
 * 5. Add conversion function of data model to html in UI service.
 * 6. ...
 */
var _uiService = new UIServiceModule.UIService();
var _storageService = StorageServiceModule.StorageService.GetInstance;
var filterName = 1;
var newFilter = function () {
    var newModel = new DataModels.EmailHighlightData();
    var filter = new DataModels.Filter();
    filter.name = filterName.toString();
    newModel.filters.push(filter);
    filterName++;
    _storageService.AddFilter(newModel);
};
var init = function () {
    //Register clicks
    document.getElementById("newFilter").addEventListener("click", newFilter);
    _uiService.RenderAllFilters();
};
init();
//# sourceMappingURL=index.js.map