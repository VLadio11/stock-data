import { Component, OnInit, OnDestroy } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-stock-ohlc',
  templateUrl: './stock-ohlc.component.html',
  styleUrls: ['./stock-ohlc.component.css']
})
export class StockOhlcComponent implements OnInit, OnDestroy {

  constructor(private stockService: StockApiService) { }
  ohlc = [];
  ngOnInit() {
    this.getOHLC();
  }
  barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      layout: {
        padding: {
            left: 10,
            right: 25,
            top: 20,
            bottom: 5
        }
    }
  };
  barChartLabels =  ['Open', 'High', 'Low', 'Close'];
  barChartType = 'line';
  barChartLegend = false;
  chartColors = [{backgroundColor: '#7a7cff', borderColor: '#304ffe'}];
  barChartData = [
    {data: this.ohlc, label: 'Key Prices'}
  ];
  
  setChart(){
    this.barChartLabels = ['Open', 'High', 'Low', 'Close'];
    this.barChartType = 'line';
    this.barChartLegend = false;
    this.barChartData = [
      {data: this.ohlc, label: 'Key Prices'}
      ];
  }

  clearArrays(){
    this.ohlc.splice(0, this.ohlc.length);
  }
  subscription: Subscription = null;
  getOHLC(){
    this.subscription = this.stockService.stockData.subscribe(
      data =>{
        this.clearArrays();
        this.ohlc.push(data.open);
        this.ohlc.push(data.high);
        this.ohlc.push(data.low);
        this.ohlc.push(data.close);
        this.setChart();
      });
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
