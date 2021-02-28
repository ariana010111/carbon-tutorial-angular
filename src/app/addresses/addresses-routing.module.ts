import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import {AddComponent} from './address-list/add/add.component';
import {NeighborMailboxComponent} from './neighbor-mailbox/neighbor-mailbox.component';
import {ConfirmModalComponent} from './address-list/confirm-modal/confirm-modal.component'
const routes: Routes = [
	{
		path: '',
		component: AddressListComponent
	},
	{
		path: 'address/add',
		component: AddComponent
	},
	{
		path: 'address/neighbormailbox',
		component: NeighborMailboxComponent
	},
	{
		path: 'address/confirm',
		component: ConfirmModalComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddressesRoutingModule { }
