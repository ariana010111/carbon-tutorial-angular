import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {
	TableModel,
	TableItem,
	TableHeaderItem
} from "carbon-components-angular";

@Component({
	selector: "app-landing-page",
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.scss"]
})
// export interface ActionOptions {
// 	depth?: number;
// 	clearOnStoryChange?: boolean;
// 	limit?: number;
// 	allowFunction?: boolean;
// }
// export declare type HandlerFunction = (...args: any[]) => void; export declare function action(name: string, options?: ActionOptions): HandlerFunction;
export class LandingPageComponent implements OnInit {
	model = new TableModel();

	constructor() {
	}

	@ViewChild("videoPlayer", {static: false}) videoplayer: ElementRef;

	ngOnInit() {
		this.model.data = [
			[
				new TableItem({data: "541745", expandedData: "Row description"}),
				new TableItem({data: "Sophiaweg 500 A 245, 6523NJ Nijmegen"}),
				new TableItem({data: "0 / € 10 Unpaid"}),
				new TableItem({data: "Delivery"}),
				new TableItem({data: "23-06-2019  sun  12:20"}),

			],
			[
				new TableItem({data: "541745", expandedData: "Row description"}),
				new TableItem({data: "Sophiaweg 500 A 245, 6523NJ Nijmegen"}),
				new TableItem({data: "0 / € 10 Unpaid"}),
				new TableItem({data: "Delivery"}),
				new TableItem({data: "23-06-2019  sun  12:20"}),

			],

		];
		this.model.header = [
			new TableHeaderItem({data: "Recipe No"}),
			new TableHeaderItem({data: "Address"}),
			new TableHeaderItem({data: "Payment"}),
			new TableHeaderItem({data: "Receiving Type"}),
			new TableHeaderItem({data: "Delivery Date"}),

		];
	}

	// selected = action("item expanded");
	isPlay: boolean = false;

	toggleVideo(event: any) {
		this.videoplayer.nativeElement.play();
	}

	playPause() {
		var myVideo: any = document.getElementById("my_video_1");
		if (myVideo.paused) myVideo.play();
		else myVideo.pause();
	}

	public selected(event) {
		console.log(event);

	}
}
