import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-address-list-item',
  templateUrl: './address-list-item.component.html',
  styleUrls: ['./address-list-item.component.scss']
})
export class AddressListItemComponent implements OnInit {

  onChange(){
   
  }
			//label= text("Label text", "Radio Button heading"),
			addresses= [
				{ title: "first home" },
				{ title: "anatomy home" },
				{ title: "work" }
			]
  constructor() { }

  ngOnInit(): void {
  }

}
