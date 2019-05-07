import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StockMainComponent} from './stock-main/stock-main.component';
import { LinkBuildComponent } from './link-build/link-build.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'', redirectTo: 'stockdata', pathMatch: 'full'},
  {path: 'default', component: LinkBuildComponent },
  {path: 'stockdata', component: StockMainComponent},
  { path: 'stockdata/:id', component: StockMainComponent},
  { path: 'land', component: LandingPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
