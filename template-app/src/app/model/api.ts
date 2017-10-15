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

    constructor(data) {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                this.addCSVData(data[i]);
            }
        } else {
            // Fill up the database with 100 trades.
            for (let i = 0; i < 100; i++) { this.addCSVMockData(); }
        }
    }

    /** Adds a csvData to the database. */
    addCSVData(data) {
        const copiedData = this.data.slice();
        copiedData.push(this.csvData(data));
        this.dataChange.next(copiedData);
    }

    

    private csvData(csvData): BTCMarketsCSV {
        return {
            id: csvData[0],
            creationTime: csvData[1],
            price: csvData[2],
            volume: csvData[3],
            side: csvData[4],
            instrument: csvData[5],
            currency: csvData[6],
            market: csvData[7],
            feeIncTax: csvData[8],
            feeCurrency: csvData[9],
            feeInBaseCurrencyIncTax: csvData[10],
            taxInBaseCurrency: csvData[11],
            orderId: csvData[12]
        };
    }



    /** Adds a mock csvData to the database. */
    addCSVMockData() {
        const copiedData = this.data.slice();
        copiedData.push(this.createCSVData());
        this.dataChange.next(copiedData);
    }

    /** Builds and returns a BTCMarketsCSV. */
    private createCSVData(): BTCMarketsCSV {
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
 * to a common data base, ApiDatabase. It is not the data source's responsibility to manage
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