import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-address-list-item',
  templateUrl: './address-list-item.component.html',
  styleUrls: ['./address-list-item.component.scss']
})
export class AddressListItemComponent implements OnInit {

  onChange(event:any){
   
  }
			//label= text("Label text", "Radio Button heading"),
			addresses= [
				{ title: "first home" , desc:" Sophiaweg 500 A 245,6523NJ Nijmegen", neighbour:" Neighbour Sophiaweg 500 A 245,6523NJ Nijmegen" , mailbox:"Mailbox"},
				{ title: "anatomy home" , desc:" Sophiaweg 500 A 245,6523NJ Nijmegen", neighbour:" Neighbour Sophiaweg 500 A 245,6523NJ Nijmegen" , mailbox:"" },
				{ title: "work", desc:" Sophiaweg 500 A 245,6523NJ Nijmegen", neighbour:"" , mailbox:"" }
			]
  constructor() { }

  ngOnInit(): void {
  }

}
