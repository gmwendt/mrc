import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { PageProductsComponent } from '../pages/page-products/page-products.component';

export class OpenTabEvent {
	name: string;
	tabType: any;
}

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class NavigationComponent { 

	@Output()
	openTab: EventEmitter<OpenTabEvent>;

	constructor() {
		this.openTab = new EventEmitter<OpenTabEvent>();
	}

	private listItemClicked(tabType: string): void {
		var event: OpenTabEvent = { };

		switch (tabType) {
			case "produtos":
				event.name = 'Produtos';
				event.tabType = PageProductsComponent;
				break;
			
			default:
				// code...
				break;
		}
		
		this.openTab.emit(event);
	}
}
