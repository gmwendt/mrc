import { Component } from '@angular/core';
import { OpenPaneEvent } from './navigation/navigation.component';

@Component({
	selector: 'mrc',
	templateUrl: './mrc.component.html',
	styleUrls: ['./mrc.component.css'],
})
export class MrcComponent { 

	private _mainPaneType: string[] = [];

	private openPane(event: OpenPaneEvent): void {
		this._mainPaneType = event.paneType;
	}
}
