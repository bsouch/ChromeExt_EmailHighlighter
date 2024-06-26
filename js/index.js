/**
 * 1. Create Storage service module to handle data access.
 * 2. Create data model that we want to serialise for storage.
 * 3. Create page load function to get all filters from storage.
 * 4. Create UI service module to handle UI changes.
 * 5. Add conversion function of data model to html in UI service.
 * 6. ...
 */
var _uiService = new UIServiceModule.UIService();
var init = function () {
    _uiService.RenderAllFilters();
};
init();
