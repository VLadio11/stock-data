import { Component, OnInit } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-stock-main',
  templateUrl: './stock-main.component.html',
  styleUrls: ['./stock-main.component.css']
})
export class StockMainComponent implements OnInit {

  constructor(private stockDats: StockApiService, private route: ActivatedRoute){}
  value="Enter Symbol";
  symbol="";
  input ='';
  flag =false;
  errorFlag=false;
  setSymbolMakeCall(){
    this.input = this.value.toUpperCase();
    this.errorFlag=false;
    this.flag=true;
    this.stockDats.loadData(this.input);
    };


    
  ngOnInit() {
    this.getRouteStock();
  }

  getRouteStock(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
      this.stockDats.loadData(id);
      this.errorFlag=false;
      this.flag=true;
      }
    });
  }

}
