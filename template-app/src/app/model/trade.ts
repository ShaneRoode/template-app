import { DashboardComponent } from './../dashboard/dashboard.component';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

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
}

export enum TradeType {
    LimitBuy
}

const trades: Trade[] = [
    {
        id: 0,
        type: TradeType.LimitBuy,
        openedDate: new Date(),
        closedDate: new Date(),
        bidAsk: 0.00514799,
        unitsFilled: 0.00514799,
        unitsTotal: 0.00514799,
        actualRate: 0.00514799,
        costProceeds: 0.00514799
    },
    {
        id: 1,
        type: TradeType.LimitBuy,
        openedDate: new Date(),
        closedDate: new Date(),
        bidAsk: 0.00514799,
        unitsFilled: 0.00514799,
        unitsTotal: 0.00514799,
        actualRate: 0.00514799,
        costProceeds: 0.00514799
    },
];

/** An example database that the data source uses to retrieve data for the table. */
export class TradeDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Trade[]> = new BehaviorSubject<Trade[]>([]);
    get data(): Trade[] { return this.dataChange.value; }

    constructor() {
        // Fill up the database with 100 trades.
        for (let i = 0; i < 100; i++) { this.addTrade(); }
    }

    /** Adds a new trade to the database. */
    addTrade() {
        const copiedData = this.data.slice();
        copiedData.push(this.createTrade());
        this.dataChange.next(copiedData);
    }

    /** Builds and returns a new Trade. */
    private createTrade(): Trade {
        return {
            id: this.data.length + 1,
            openedDate: new Date(),
            closedDate: new Date(),
            type: Math.round(Math.random() * 100),
            bidAsk: Math.round(Math.random() * 100),
            unitsFilled: 0.002165,
            unitsTotal: 0.002165,
            actualRate: 0.002165,
            costProceeds: 0.002165,
        };
    }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class TradesDataSource extends DataSource<any> {
    constructor(private _tradeDatabase: TradeDatabase) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Trade[]> {
        return this._tradeDatabase.dataChange;
    }

    disconnect() { }
}
