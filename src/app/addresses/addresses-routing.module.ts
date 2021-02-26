import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import {AddComponent} from './address-list/add/add.component';
import {NeighborMailboxComponent} from './neighbor-mailbox/neighbor-mailbox.component'
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
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddressesRoutingModule { }
