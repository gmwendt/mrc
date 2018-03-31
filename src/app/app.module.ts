import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

//Material Modules
import { MaterialModule } from './material.module';

//App
import { AppComponent }     from './app.component';

//Mrc Components
import { MrcComponent }     from './mrc/mrc.component';
import { MrcContentComponent } from './mrc/mrc-content/mrc-content.component';
import { MrcHeaderComponent }     from './mrc/mrc-header/mrc-header.component';
import { MrcHeaderMenuComponent } from './mrc/mrc-header-menu/mrc-header-menu.component';
import { NavigationComponent }     from './mrc/navigation/navigation.component';

import { RibbonCadastroComponent } from './mrc/ribbons/ribbon-cadastro/ribbon-cadastro.component';

//Services
import { MrcContentService } from './mrc/mrc-content/mrc-content.service';
import { ProductService } from './mrc/common/produto.service'

//Pages Modules
import { PagesModule } from './mrc/pages/pages.module';

//Shared Components
import { SplitAreaComponent }     from './shared/split-area/split-area.component';

@NgModule({
	imports: [BrowserModule, 
						MaterialModule,
						PagesModule],
	providers:    [ MrcContentService, ProductService ],
	declarations: [ AppComponent, 
									MrcComponent, MrcContentComponent, MrcHeaderComponent, MrcHeaderMenuComponent, NavigationComponent,
									RibbonCadastroComponent,
									SplitAreaComponent ],
	exports: [ MaterialModule, PagesModule ],
	bootstrap:    [ AppComponent ],
	entryComponents: [ RibbonCadastroComponent ]
})
export class AppModule { }
