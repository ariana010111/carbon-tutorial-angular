import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
}
