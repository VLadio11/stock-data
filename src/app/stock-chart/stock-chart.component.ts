import { Component, OnInit, OnDestroy } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit, OnDestroy {

  constructor(private stockService: StockApiService) { }
  localChartData = [];
  localDate=[];
  ngOnInit() {
    this.getChartData();
  }
  barChartLabels = this.localDate;
  barChartType = 'line';
  barChartLegend = false;
  barChartData = [
    {data: this.localChartData, label: 'Price'}
  ];
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
          left: 25,
          right: 25,
          top: 30,
          bottom: 25
      }
  }
  };
  setChart(){
    this.barChartLabels = this.localDate;
    this.barChartType = 'line';
    this.barChartLegend = false;
    this.barChartData = [
      {data: this.localChartData, label: 'Price'}
      ];
  }

  clearArrays(){
    this.localChartData.splice(0, this.localChartData.length);
    this.localDate.splice(0, this.localDate.length);
  }

  subscription: Subscription = null;
  getChartData(){
    this.subscription = this.stockService.stockChart.subscribe(
      data => {
        this.clearArrays();
        console.log(data);
        for(let i of data){
          this.localChartData.push(i.vwap);
          this.localDate.push(i.label);
        }
        this.setChart();
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
