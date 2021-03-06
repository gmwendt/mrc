import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Material Modules
import { MaterialModule } from './material.module';

//App
import { AppComponent }     from './app.component';

//Mrc Components
import { MrcComponent }     from './mrc/mrc.component';
import { MrcContentComponent } from './mrc/mrc-content/mrc-content.component';
import { MrcHeaderComponent }     from './mrc/mrc-header/mrc-header.component';
import { MrcHeaderConfigComponent } from './mrc/mrc-header/mrc-header-config/mrc-header-config.component';
import { MrcHeaderMenuComponent } from './mrc/mrc-header-menu/mrc-header-menu.component';
import { NavigationComponent }     from './mrc/navigation/navigation.component';

import { RibbonCadastroComponent } from './mrc/ribbons/ribbon-cadastro/ribbon-cadastro.component';

//Services
import { HttpService } from './mrc/common/http.service';
import { ProductService } from './mrc/common/product.service';
import { MrcContentService } from './mrc/mrc-content/mrc-content.service';

//Pages Modules
import { PagesModule } from './mrc/pages/pages.module';

//Shared Components
import { SplitAreaComponent }     from './shared/split-area/split-area.component';

@NgModule({
	imports: [BrowserModule, 
						HttpClientModule,
						MaterialModule,
						PagesModule],
	providers:    [ HttpService, MrcContentService, ProductService ],
	declarations: [ AppComponent, 
									MrcComponent, MrcContentComponent, MrcHeaderComponent, MrcHeaderConfigComponent, MrcHeaderMenuComponent, NavigationComponent,
									RibbonCadastroComponent,
									SplitAreaComponent ],
	exports: [ MaterialModule, PagesModule ],
	bootstrap:    [ AppComponent ],
	entryComponents: [ RibbonCadastroComponent ]
})
export class AppModule { }
