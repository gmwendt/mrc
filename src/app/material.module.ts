import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatExpansionModule, 
	MatInputModule, 
	MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
		BrowserAnimationsModule,
    MatExpansionModule, 
		MatInputModule, 
		MatTabsModule
  ],
  exports: [
		BrowserAnimationsModule,
		MatExpansionModule, 
		MatInputModule, 
		MatTabsModule
  ]
})
export class MaterialModule {}