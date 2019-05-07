import { Component, OnInit } from '@angular/core';
import {StockApiService} from '../stock-api.service';

@Component({
  selector: 'app-stock-technical',
  templateUrl: './stock-technical.component.html',
  styleUrls: ['./stock-technical.component.css']
})
export class StockTechnicalComponent implements OnInit {

  constructor(private stockService: StockApiService) { }

  ngOnInit() {
    this.getData();
  }
  name = "";
  symbol="";
  error = "";
  realtimePrice = 0;
  stockData = [];
 

  getData():void{
    this.stockService.stockData.subscribe(
     data =>{
       console.log("In the data handler");
         this.name=data.companyName;
         this.symbol = data.symbol;
         this.realtimePrice = (data.iexRealtimePrice == null) ? data.iexRealtimePrice = 'N/A': data.iexRealtimePrice;
         console.log(data);
     },
     error => {this.error = "Incorrect.. Enter a correct value"
     }
 
    )
  }
}
