import { Component, OnInit } from '@angular/core';
import {StockApiService} from '../stock-api.service';

@Component({
  selector: 'app-stock-key-info',
  templateUrl: './stock-key-info.component.html',
  styleUrls: ['./stock-key-info.component.css']
})
export class StockKeyInfoComponent implements OnInit {

  constructor(private http: StockApiService) { }

  ngOnInit() {
    this.getKeyData();
  }
  week52low = 'N/A';
  week52high = 'N/A';
  day50mov = 'N/A';
  day200mov = 'N/A';
  ebitda = 'N/A';
  debt = 'N/A';
  dividendRate = 'N/A';
  dividendYield = 'N/A';
  peRatioHigh = 'N/A';
  peRatioLow = 'N/A';
  revenue = 'N/A';
  revenuePerEmployee = 'N/A';
  revenuePerShare = 'N/A';
   
  getKeyData(){
    this.http.stockStat.subscribe(data=>{
      this.week52low = data.week52low;
      this.week52high = data.week52high;
      this.day50mov = data.day50MovingAvg;
      this.day200mov = data.day200MovingAvg;
      this.ebitda = (data.EBITDA == 0) ? data.EBITDA = 'N/A' : data.EBITDA;
      this.debt = (data.debt == 0) ? data.debt = 'N/A' : data.debt;
      this.dividendRate = (data.dividendRate == 0) ? data.dividendRate = 'N/A' : data.dividendRate;
      this.dividendYield = (data.dividendYield == 0) ? data.dividendYield = 'N/A' : data.dividendYield;
      this.peRatioHigh = (data.peRatioHigh == 0) ? data.peRatioHigh = 'N/A' : data.peRatioHigh;
      this.peRatioLow = (data.peRatioLow == 0) ? data.peRatioLow = 'N/A' : data.peRatioLow;
      this.revenue = (data.revenue == 0) ? data.revenue = 'N/A' : data.revenue;
      this.revenuePerEmployee = (data.revenuePerEmployee == 0) ? data.revenuePerEmployee = 'N/A' : data.revenuePerEmployee;
      this.revenuePerShare = (data.revenuePerShare == 0) ? data.revenuePerShare = 'N/A' : data.revenuePerShare;
    })
  }

}
