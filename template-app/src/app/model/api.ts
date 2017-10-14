import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface BTCMarketsCSV {
    id: number;
    creationTime: Date;
    price: number;
    volume: number;
    side: number;
    instrument: string;
    currency: number;
    market: string;
    feeIncTax: number;
    feeCurrency: string;
    feeInBaseCurrencyIncTax: number;
    taxInBaseCurrency: number;
    orderId: number;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ApiDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<BTCMarketsCSV[]> = new BehaviorSubject<BTCMarketsCSV[]>([]);
    get data(): BTCMarketsCSV[] { return this.dataChange.value; }

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
    private createTrade(): BTCMarketsCSV {
        return {
            id: this.data.length + 1,
            creationTime: new Date(),
            price: 0,
            volume: 0,
            side: 0,
            instrument: '',
            currency: 0,
            market: '',
            feeIncTax: 0,
            feeCurrency: '',
            feeInBaseCurrencyIncTax: 0,
            taxInBaseCurrency: 0,
            orderId: 0
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
export class BTCMarketsDataSource extends DataSource<any> {
    constructor(private _database: ApiDatabase) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<BTCMarketsCSV[]> {
        return this._database.dataChange;
    }

    disconnect() { }
}