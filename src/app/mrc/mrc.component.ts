import { Component } from '@angular/core';

@Component({
	selector: 'mrc',
	templateUrl: './mrc.component.html',
	styleUrls: ['./mrc.component.css'],
})
export class MrcComponent { 

	private _tabsOpen: string[] = [];

	private openTab(event: any): void {
		this._tabsOpen.push(event);
	}
}
