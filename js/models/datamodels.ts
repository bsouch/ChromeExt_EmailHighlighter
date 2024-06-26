module DataModels {

    export class EmailHighlightData {
        filters: Filter[] = [];
    }

    export class Filter {
        id: string = self.crypto.randomUUID();
        name: string;
        description: string;
        appearance: Appearance = new Appearance();
        enabled: boolean;
    }

    class Appearance {
        text: string;
        border: Border = new Border;
        backgroundColour: string;
        textColour: string;
        minWidth: string = "0px";
    }

    class Border {
        topLeft: string;
        topRight: string;
        bottomLeft: string;
        bottomRight: string;
        thickness: string;
    }

}