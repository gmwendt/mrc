import { Component, EventEmitter, Output } from '@angular/core';

export class OpenTabEvent {

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

	private openTab(tabName: string): void {

	}
}
