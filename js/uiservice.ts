module UIServiceModule {

    export interface IUIService {
        renderAllFilters(): void;
    }

    export class UIService implements IUIService {

        renderAllFilters(): void {
            console.error("UIServiceModule Here.");
        }

    }

}