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
	SelectModule,
	UIShellModule,
	ModalModule,
	ModalService,
	PlaceholderModule,
	CheckboxModule,
	InlineLoadingModule
	} from 'carbon-components-angular';
import { AddressListItemComponent } from './address-list/address-list-item/address-list-item.component';
import { AddComponent } from './address-list/add/add.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DeleteModule,AddModule, EditModule , ArrowLeftModule , CloseModule , CheckmarkModule ,ChevronRightModule, PhoneModule} from "@carbon/icons-angular";
import { NeighborMailboxComponent } from './neighbor-mailbox/neighbor-mailbox.component';
import { ConfirmModalComponent } from './address-list/confirm-modal/confirm-modal.component';
@NgModule({
	declarations: [AddressListComponent, AddressListItemComponent, AddComponent, NeighborMailboxComponent, ConfirmModalComponent],
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
		 SelectModule,
		DeleteModule,
		EditModule,
		ArrowLeftModule,
		CloseModule,
		CheckmarkModule,
		ChevronRightModule,
		UIShellModule,
		AddModule,
		ModalModule,
		PlaceholderModule,
		CheckboxModule,
		PhoneModule,
		InlineLoadingModule
	
	]
})
export class AddressesModule { }
