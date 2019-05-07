import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkBuildComponent } from './link-build/link-build.component';
import { NewsLinkComponent } from './news-link/news-link.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { StockNewsComponent } from './stock-news/stock-news.component';
import { StockTechnicalComponent } from './stock-technical/stock-technical.component';
import { StockMainComponent } from './stock-main/stock-main.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockOhlcComponent } from './stock-ohlc/stock-ohlc.component';
import { ChartsModule } from 'ng2-charts';
import { StockVolumeComponent } from './stock-volume/stock-volume.component';
import { StockShortsComponent } from './stock-shorts/stock-shorts.component';
import {FlexLayoutModule } from '@angular/flex-layout';
import { StockKeyInfoComponent } from './stock-key-info/stock-key-info.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBuildComponent,
    NewsLinkComponent,
    StockNewsComponent,
    StockTechnicalComponent,
    StockMainComponent,
    StockChartComponent,
    StockOhlcComponent,
    StockVolumeComponent,
    StockShortsComponent,
    StockKeyInfoComponent,
    LandingPageComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
})
export class AppModule { }
