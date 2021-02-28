import {
	Component,
	ViewChild,
	Inject,
	Optional,
	AfterViewInit,
	OnInit,
} from "@angular/core";
import { ModalButtonType, ModalService } from "carbon-components-angular";
import { BaseModal } from "./base-modal.class";

@Component({
	selector: "app-confirm-modal",
	templateUrl: "./confirm-modal.component.html",
	styleUrls: ["./confirm-modal.component.scss"],
})
export class ConfirmModalComponent extends BaseModal {
	modalType: "default";

	injector: any;

	constructor(
		public modalService: ModalService,
		// @Inject("modalText") public modalText,
		@Inject("size") public size
	) {
		super();
	}

	ngOnInit(): void {}

	closeModal() {
		this.modalService.destroy();
	}
	delete() {
		console.log("deleted")!;
	}
}
