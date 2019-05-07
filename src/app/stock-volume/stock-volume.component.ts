import { Component, OnInit, OnDestroy } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-stock-volume',
  templateUrl: './stock-volume.component.html',
  styleUrls: ['./stock-volume.component.css']
})
export class StockVolumeComponent implements OnInit, OnDestroy {

  constructor(private stockService: StockApiService) { }
  volume = [];
  avgVolume = 0;
  latestVolume = 0;
  ngOnInit() {
    this.getVolume();
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
  barChartLabels = ['Average Volume', 'Day Volume'];
  barChartType = 'bar';
  barChartLegend = false;
  chartColors = [{backgroundColor: '#304ffe', borderColor: '#304ffe'}];
  barChartData = [
    {data:  [this.avgVolume, this.latestVolume], label: 'Volume'}
    ];

  subscription: Subscription =null;
  setChart(){
    this.barChartLabels = ['Average Volume', 'Day Volume'];
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.barChartData = [
      {data: [this.avgVolume, this.latestVolume], label: 'Volume'}
      ];
  }
  clearArrays(){
    this.barChartData.splice(0, this.barChartData.length);
  }
  getVolume(){
    this.subscription = this.stockService.stockData.subscribe(data=>{
      this.clearArrays();
      this.avgVolume = data.avgTotalVolume;
      this.latestVolume = data.latestVolume;
      this.setChart();
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
