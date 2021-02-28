import { Component, OnInit } from '@angular/core';
import {ModalService} from 'carbon-components-angular'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-address-list',
	templateUrl: './address-list.component.html',
	styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

	
	constructor(private service:ModalService) { }

	ngOnInit(): void {
	}

}
