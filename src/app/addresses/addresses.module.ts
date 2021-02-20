import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressListComponent } from './address-list/address-list.component';


@NgModule({
	declarations: [AddressListComponent],
	imports: [
		CommonModule,
		AddressesRoutingModule
	]
})
export class AddressesModule { }
