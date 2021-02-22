import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import {GridModule,
	 ButtonModule, 
	 ListModule, 
	 RadioModule,
	 LinkModule , 
	 InputModule , 
	 DropdownModule,
	SelectModule
	} from 'carbon-components-angular';
import { AddressListItemComponent } from './address-list/address-list-item/address-list-item.component';
import { AddComponent } from './address-list/add/add.component';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
	declarations: [AddressListComponent, AddressListItemComponent, AddComponent],
	imports: [
		CommonModule,
		AddressesRoutingModule,
		GridModule,
		ButtonModule,
		ListModule,
		 RadioModule,
		 LinkModule,
		 InputModule, 
		 DropdownModule,
		 ReactiveFormsModule,
		 SelectModule
	]
})
export class AddressesModule { }
