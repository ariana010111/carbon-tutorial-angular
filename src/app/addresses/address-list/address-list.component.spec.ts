import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListComponent } from './address-list.component';
import {GridModule, 
	ButtonModule
} from 'carbon-components-angular';
describe('AddressListComponent', () => {
	let component: AddressListComponent;
	let fixture: ComponentFixture<AddressListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AddressListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddressListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
