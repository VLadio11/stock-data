import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {
  constructor(private http: HttpClient) { }
  private stockDataSubject: Subject<StockData> = new Subject();
  private stockNewsSubject: Subject<any> = new Subject();
  private stockChartSubject: Subject<any> = new Subject();
  private stockStatSubject: Subject<SharesShort> = new Subject();

  public stockData =  this.stockDataSubject.asObservable();
  public stockNews = this.stockNewsSubject.asObservable();
  public stockChart = this.stockChartSubject.asObservable();
  public stockStat = this.stockStatSubject.asObservable();

  getStockData(symbol){
    this.http.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote?displayPercent=true`).subscribe((data:StockData) =>{
      this.stockDataSubject.next(data);
    });
  }
  getStockNews(symbol){
    this.http.get(`https://api.iextrading.com/1.0/stock/${symbol}/news`).subscribe((data:any) =>{
      this.stockNewsSubject.next(data);
    });
  }
  getChartData(symbol){
    this.http.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart`).subscribe((data:any) =>{
      this.stockChartSubject.next(data);
    });
  }
  getStatData(symbol){
    this.http.get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`).subscribe((data: SharesShort) =>{
      this.stockStatSubject.next(data);
    });
  }
  loadData(stockSymbol){
    this.getStockData(stockSymbol);
    this.getStockNews(stockSymbol);
    this.getChartData(stockSymbol);
    this.getStatData(stockSymbol);
  }
}
interface StockData {
  companyName: string;
  avgTotalVolume: number;
  open : number;
  low : number;
  high : number;
  close : number;
  latestVolume : number;
  symbol : string;
  iexRealtimePrice : any;
}

interface SharesShort {
  sharesOutstanding: number;
  float: number;
  shortInterest: number;
  shortRatio: string;
  week52high: any;
  week52low: any;
  day50MovingAvg: any;
  day200MovingAvg: any;
  EBITDA: any;
  debt: any;
  dividendRate: any;
  dividendYield: any;
  peRatioHigh: any;
  peRatioLow: any;
  revenue: any;
  revenuePerEmployee: any;
  revenuePerShare: any;
}