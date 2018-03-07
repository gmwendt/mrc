import { Component, EventEmitter, Output } from '@angular/core';

export class OpenTabEvent {
	name: string;
	tabType: string;
}

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
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
				event.tabType = 'PageProductsComponent';
				break;
			
			default:
				// code...
				break;
		}
		
		this.openTab.emit(event);
	}
}
