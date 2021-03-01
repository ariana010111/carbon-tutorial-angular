import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addressForm = new FormGroup({
    addressName: new FormControl(''),
    postCode: new FormControl(''),
    HuisnrT: new FormControl(''),
    JouwAdres: new FormControl(''),
  });
 
	model= "default"
  constructor() { }

  ngOnInit():void{
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addressForm.value);
  }
  onChange($event){

  }
  onSuccess(){

  }
  // toggleState() {
	// 	switch (this.state) {
	// 		case InlineLoadingState.Inactive: this.state = InlineLoadingState.Active; break;
	// 		case InlineLoadingState.Active: this.state = InlineLoadingState.Finished; break;
	// 		case InlineLoadingState.Finished: this.state = InlineLoadingState.Error; break;
	// 		case InlineLoadingState.Error: this.state = InlineLoadingState.Inactive; break;
	// 	}
	// }
}
