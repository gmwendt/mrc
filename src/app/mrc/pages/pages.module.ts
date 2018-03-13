import { NgModule } from '@angular/core';

import { PageProductsComponent } from './page-products/page-products.component';

@NgModule({
	declarations: [ PageProductsComponent ],
	exports: [ PageProductsComponent ],
	entryComponents: [ PageProductsComponent ]
})
export class PagesModule { }