export class Portfolio {

    total: number;
    name: string;
    units: number;
    assets: Asset[];

    constructor() {

    }
}

export class Asset {
    constructor(
        public assetCode: string,
        public assetName: string,
        public units: number,
        public value: number,
        public profitLoss: number) {
    }
}
