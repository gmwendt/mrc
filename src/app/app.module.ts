import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

//Meterial Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	MatExpansionModule, 
	MatInputModule, 
	MatTabsModule
} from '@angular/material';

//App
import { AppComponent }     from './app.component';

//Mrc Components
import { MrcComponent }     from './mrc/mrc.component';
import { MrcHeaderComponent }     from './mrc/mrc-header/mrc-header.component';
import { NavigationComponent }     from './mrc/navigation/navigation.component';

//Shared Components
import { SplitAreaComponent }     from './shared/split-area/split-area.component';

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, MatExpansionModule, MatInputModule, MatTabsModule],
	providers:    [  ],
	declarations: [ AppComponent, 
	
									MrcComponent, MrcHeaderComponent, NavigationComponent,
									
									SplitAreaComponent ],
	exports: [ BrowserAnimationsModule, MatExpansionModule, MatInputModule, MatTabsModule ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
