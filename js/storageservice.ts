module StorageServiceModule {

    export interface IStorageService {
        GetFilters(): Promise<DataModels.EmailHighlightData>;
        AddFilter(data: DataModels.EmailHighlightData): void;
        RemoveFilter(id: string): Promise<void>;
    }

    export class StorageService implements IStorageService {

        private static _instance: IStorageService;
        private readonly EMAIL_HIGHLIGHT_KEY = "EmailHighlight";
        private _emailHighlightData: DataModels.EmailHighlightData;

        private constructor() {
            this._emailHighlightData = new DataModels.EmailHighlightData();
        }

        public static get GetInstance() {
            return this._instance || (this._instance = new this());
        }

        async GetFilters(): Promise<DataModels.EmailHighlightData> {
            try {
                const promiseData: any = await chrome.storage.sync.get(this.EMAIL_HIGHLIGHT_KEY);
                console.error("Data: ", promiseData);
                const emailHighlightData: DataModels.EmailHighlightData = JSON.parse(promiseData[this.EMAIL_HIGHLIGHT_KEY]);
                this._emailHighlightData = emailHighlightData;
                return emailHighlightData;
            }
            catch (ex) {
                console.error("Exception thrown accessing the Chrome Storage.")
                return new DataModels.EmailHighlightData();
            }
        }

        async AddFilter(data: DataModels.EmailHighlightData): Promise<void> {
            try {
                this._emailHighlightData.filters.push(data.filters[0]);
                await this.Set(this._emailHighlightData);
            }
            catch (ex) {
                console.error(`Set filters failed: ${ex}`);
            }
        }

        async RemoveFilter(id: string): Promise<void> {
            try {
                this._emailHighlightData.filters = this._emailHighlightData.filters.filter(f => f.id !== id);
                await this.Set(this._emailHighlightData);
            }
            catch (ex) {
                console.error(`Remove Filter failed: ${ex}`);
            }
        }

        private async Set(data: DataModels.EmailHighlightData): Promise<void> {
            try {
                const jsonData = JSON.stringify(data);
                await chrome.storage.sync.set({ [this.EMAIL_HIGHLIGHT_KEY]: jsonData });
            }
            catch (ex) {
                console.error(`Set failed: ${ex}`);
            }
        }

    }

}