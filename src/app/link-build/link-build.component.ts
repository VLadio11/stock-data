import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-build',
  templateUrl: './link-build.component.html',
  styleUrls: ['./link-build.component.css']
})
export class LinkBuildComponent implements OnInit {
  value = 'Enter symbol';
  symbol = "";
  finance = "";
  stockTwits = "";
  finViz = "";
  marketWatch = "";
  stockCharts = "";
  stockFetcher = "";
  tradingView = "";
  bigCharts = "";
  whaleWisdom = "";
  panelOpenState = false;
  linkBuildState = false;
  constructor() { }

  setSymbol(){
    this.symbol = this.value.toUpperCase();
    this.buildLinks();
  }
  buildLinks(){
    this.finance = "quote/" + this.symbol;
    this.stockTwits = "symbol/" + this.symbol;
    this.finViz = "quote.ashx?t=" + this.symbol;
    this.marketWatch = "stock/" + this.symbol;
    this.stockCharts = "h-sc/ui?s=" + this.symbol;
    this.stockFetcher = "sf/search.php?q=" + this.symbol;
    this.tradingView = "symbols/" + this.symbol;
    this.bigCharts = "quickchart/quickchart.asp?symb=" + this.symbol;
    this.whaleWisdom = "stock/" + this.symbol;
    this.linkBuildState = true;
  }
  clearLinks(){
    this.value = 'Enter symbol';
    this.symbol = "";
    this.finance = "";
    this.stockTwits = "";
    this.finViz = "";
    this.marketWatch = "";
    this.stockCharts = "";
    this.stockFetcher = "";
    this.tradingView = "";
    this.bigCharts = "";
    this.whaleWisdom = "";
    this.linkBuildState = false;
  }
  ngOnInit() {
  }

}
