import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

//Material Modules
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

//Pages
//import { PageProductsComponent } from './mrc/pages/page-products/page-products.component';

//Pages Modules
import { PagesModule } from './mrc/pages/pages.module';

//Shared Components
import { SplitAreaComponent }     from './shared/split-area/split-area.component';

@NgModule({
	imports: [BrowserModule, 
						BrowserAnimationsModule, 
						MatExpansionModule, 
						MatInputModule, 
						MatTabsModule,
						PagesModule],
	providers:    [  ],
	declarations: [ AppComponent, 
									MrcComponent, MrcHeaderComponent, NavigationComponent,
									//PageProductsComponent,
									SplitAreaComponent ],
	exports: [ BrowserAnimationsModule, MatExpansionModule, MatInputModule, MatTabsModule, PagesModule ],
	bootstrap:    [ AppComponent ],
	//entryComponents: [ PageProductsComponent ]
})
export class AppModule { }
