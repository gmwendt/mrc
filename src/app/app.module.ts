import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

//Material Modules
import { MaterialModule } from './material.module';

//App
import { AppComponent }     from './app.component';

//Mrc Components
import { MrcComponent }     from './mrc/mrc.component';
import { MrcHeaderComponent }     from './mrc/mrc-header/mrc-header.component';
import { MrcHeaderMenuComponent } from './mrc/mrc-header-menu/mrc-header-menu.component';
import { NavigationComponent }     from './mrc/navigation/navigation.component';

import { RibbonCadastroComponent } from './mrc/ribbons/ribbon-cadastro/ribbon-cadastro.component';

//Pages Modules
import { PagesModule } from './mrc/pages/pages.module';

//Shared Components
import { SplitAreaComponent }     from './shared/split-area/split-area.component';

@NgModule({
	imports: [BrowserModule, 
						MaterialModule,
						PagesModule],
	providers:    [  ],
	declarations: [ AppComponent, 
									MrcComponent, MrcHeaderComponent, MrcHeaderMenuComponent, NavigationComponent,
									RibbonCadastroComponent,
									SplitAreaComponent ],
	exports: [ MaterialModule, PagesModule ],
	bootstrap:    [ AppComponent ],
})
export class AppModule { }
