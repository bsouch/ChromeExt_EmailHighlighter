module StorageServiceModule {

    export interface IStorageService {
        GetFilters(): DataModels.EmailHighlightData;
        AddFilter(): void;
        RemoveFilter(): void;
    }

    export class StorageService implements IStorageService {

        private readonly EMAIL_HIGHLIGHT_KEY = "EmailHighlight";

        constructor() { }

        async GetFilters(): DataModels.EmailHighlightData {
            var filters = chrome.storage.sync.get(this.EMAIL_HIGHLIGHT_KEY);

        }
        AddFilter(): void {
            throw new Error("Method not implemented.");
        }
        RemoveFilter(): void {
            throw new Error("Method not implemented.");
        }

    }

}