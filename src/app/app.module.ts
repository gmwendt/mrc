import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { MrcComponent }     from './home/mrc.component';

@NgModule({
	imports: [BrowserModule],
	providers:    [  ],
	declarations: [ AppComponent, MrcComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
