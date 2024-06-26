module UIServiceModule {

    export interface IUIService {
        RenderAllFilters(): void;
    }

    export class UIService implements IUIService {

        private readonly _storageService = StorageServiceModule.StorageService.GetInstance;
        private readonly _viewFiltersID = "viewFilters";
        private readonly _filterID = "filters";
        private readonly _editFilterID = "editFilter";

        constructor() { }

        async RenderAllFilters(): Promise<void> {
            try {
                var emailHighlightData = await this._storageService.GetFilters();
                var emailHighlightDataHtml = this.GetEmailHighlightDataHtml(emailHighlightData);
                document.getElementById(this._filterID).innerHTML = emailHighlightDataHtml;
            }
            catch (ex) {
                console.error(`Error whilst rendering filters: ${ex}`);
            }
        }

        private GetEmailHighlightDataHtml(emailHighlightData: DataModels.EmailHighlightData): string {
            var htmlBuilder: string[] = [];
            emailHighlightData.filters.forEach((el) => {
                return this.EmailHighlightDataToHtml(el, htmlBuilder);
            });
            return htmlBuilder.join("");
        }

        private EmailHighlightDataToHtml(filter: DataModels.Filter, htmlBuilder: string[]): void {
            var html =
                `<div id="${filter.id}" class='card shadow'>
                    <div class="card-body">
                        <table class="table table-borderless m-0">
                            <tbody>
                                <tr class="align-middle">
                                    <td>${filter.name}</td>
                                    <td>Appearance</td>
                                    <td>
                                        <div class="text-center filterAction">
                                            <span>Edit</span>
                                        </div>
                                        <div class="text-center filterAction">
                                            <span>Delete</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="flexSwitchCheckChecked" ${filter.enabled ? "checked" : ""}>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
            htmlBuilder.push(html);
        }

    }

}