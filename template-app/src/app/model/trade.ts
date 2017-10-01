export class Trade {

    id: number;
    type: TradeType;
    openedDate: Date;
    closedDate: Date;
    bidAsk: number;
    unitsFilled: number;
    unitsTotal: number;
    actualRate: number;
    costProceeds: number;

    constructor() { }
}

export enum TradeType {
    LimitBuy
  }
