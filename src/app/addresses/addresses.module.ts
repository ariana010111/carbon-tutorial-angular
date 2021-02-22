import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import {GridModule, 
	    ButtonModule
} from 'carbon-components-angular';
@NgModule({
	declarations: [AddressListComponent],
	imports: [
		CommonModule,
		AddressesRoutingModule,
		GridModule,
		ButtonModule,
	
	]
})
export class AddressesModule { }
