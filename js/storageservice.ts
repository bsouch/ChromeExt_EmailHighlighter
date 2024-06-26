module StorageServiceModule {

    export interface IStorageService {
        GetFilters(): Promise<DataModels.EmailHighlightData>;
        SetFilters(data: DataModels.EmailHighlightData): void;
    }

    export class StorageService implements IStorageService {

        private readonly EMAIL_HIGHLIGHT_KEY = "EmailHighlight";

        constructor() { }

        async GetFilters(): Promise<DataModels.EmailHighlightData> {
            try {
                const promiseData: any = await chrome.storage.sync.get(this.EMAIL_HIGHLIGHT_KEY);
                console.error("Data: ", promiseData);
                const emailHighlightData: DataModels.EmailHighlightData = JSON.parse(promiseData.EMAIL_HIGHLIGHT_KEY);
                return emailHighlightData;
            }
            catch (ex) {
                console.error("Exception thrown accessing the Chrome Storage.")
                return new DataModels.EmailHighlightData();
            }
        }

        async SetFilters(data: DataModels.EmailHighlightData): Promise<void> {
            try {
                const jsonData = JSON.stringify(data);
                await chrome.storage.sync.set({ [this.EMAIL_HIGHLIGHT_KEY]: jsonData });
            }
            catch (ex) {
                console.error(`Set filters failed: ${ex}`);
            }
        }

    }

}