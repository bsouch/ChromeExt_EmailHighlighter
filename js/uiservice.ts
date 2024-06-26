module UIServiceModule {

    export interface IUIService {
        RenderAllFilters(): void;
    }

    export class UIService implements IUIService {

        private readonly _storageService = new StorageServiceModule.StorageService();

        constructor() { }

        RenderAllFilters(): void {

        }

    }

}