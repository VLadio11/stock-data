import { Component, OnInit, OnDestroy } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-stock-shorts',
  templateUrl: './stock-shorts.component.html',
  styleUrls: ['./stock-shorts.component.css']
})
export class StockShortsComponent implements OnInit, OnDestroy {
  float = 0;
  shortInterest= 0;
  sharesOutstanding = 0;
  shortRatio = 'N/A';

  constructor(private stockService: StockApiService) { }

  ngOnInit() {
    this.getShortStat();
  }

  barChartLabels = ['Shares Short', 'Shares Outstanding'];
  barChartType = 'bar';
  barChartLegend = false;
  chartColors = [{backgroundColor: '#304ffe', borderColor: '#304ffe'}];
  barChartData = [
    {data: [this.shortInterest, this.sharesOutstanding], label: 'Short ratio'}
  ];
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
  setChart(){
    this.barChartLabels = ['Shares Short', 'Shares Outstanding'];
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.barChartData = [
      {data: [this.shortInterest, this.sharesOutstanding], label: 'Shares'}
      ];
  }
  clearArrays(){
    this.barChartData.splice(0, this.barChartData.length);
  }
  subscription: Subscription = null;
  
  getShortStat(){
    this.subscription = this.stockService.stockStat.subscribe(
      data=>{
        this.clearArrays();
        console.log(data);
        this.float = data.float;
        this.shortInterest = data.shortInterest;
        this.sharesOutstanding = data.sharesOutstanding;
        this.shortRatio = (data.shortRatio == null) ? data.shortRatio = 'N/A' : data.shortRatio;
        this.setChart();
      }
    )};

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
