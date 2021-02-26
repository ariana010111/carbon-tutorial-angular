import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {HeaderComponent} from '../@layout/header/header.component';
import {FooterComponent} from '../@layout/footer/footer.component';
import { GridModule } from 'carbon-components-angular';
import {TilesModule,UIShellModule, AccordionModule } from 'carbon-components-angular';
import {
	LocationModule, CalendarModule, BuildingModule, EmailModule, PlayOutlineModule, PauseOutlineModule, InProgressModule,
	ChevronDownModule
} from "@carbon/icons-angular";
@NgModule({
	declarations: [
		LandingPageComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		GridModule,
		UIShellModule,
		TilesModule,
		AccordionModule,
		LocationModule,
		CalendarModule,
		BuildingModule,
		EmailModule,
		PlayOutlineModule,
		PauseOutlineModule,
		InProgressModule,
		ChevronDownModule
	]
})
export class HomeModule { }
