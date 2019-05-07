import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';

import { Component , OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');
    
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }


 constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private router: Router) {}
}