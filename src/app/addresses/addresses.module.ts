import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import {GridModule, ButtonModule, ListModule, RadioModule,LinkModule} from 'carbon-components-angular';
import { AddressListItemComponent } from './address-list/address-list-item/address-list-item.component';
@NgModule({
	declarations: [AddressListComponent, AddressListItemComponent],
	imports: [
		CommonModule,
		AddressesRoutingModule,
		GridModule,
		ButtonModule,
		ListModule,
		 RadioModule,
		 LinkModule
	]
})
export class AddressesModule { }
