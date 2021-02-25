import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { GridModule } from 'carbon-components-angular';
import {TableModule,TilesModule, AccordionModule } from 'carbon-components-angular';
import {LocationModule , CalendarModule , BuildingModule , EmailModule , PlayOutlineModule , PauseOutlineModule , InProgressModule} from '@carbon/icons-angular'
@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		GridModule,
		TableModule,
		TilesModule,
		AccordionModule,
		LocationModule,
		CalendarModule,
		BuildingModule,
		EmailModule,
		PlayOutlineModule, 
		PauseOutlineModule,
		InProgressModule
	]
})
export class HomeModule { }
