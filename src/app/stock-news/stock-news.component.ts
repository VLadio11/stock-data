import { Component, OnInit, OnDestroy } from '@angular/core';
import {StockApiService} from '../stock-api.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit, OnDestroy {

  constructor(private stockService: StockApiService) { }

  ngOnInit() {
    this.getNews();
  }

  newsInfo = [];

  clearArrays(){
    this.newsInfo.splice(0, this.newsInfo.length);
  }

  subscription: Subscription = null;
  getNews(){
    this.subscription = this.stockService.stockNews.subscribe(
     data => {
       this.clearArrays();
       for(let i of data){
       this.newsInfo.push(i);
       };
       console.log(data);
    },
   error => {this.newsInfo = [] }
   )
  };

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
