import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import {startLoadingIndicator, stopLoadingIndicator} from '@btapai/ng-loading-indicator';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("WOW");
    this.meta.addTag({
      name: "keywords",
      content: "Angular Project, Create Angular Project"
    });
    this.meta.addTag({
      name: "description",
      content: "Angular project training on rsgitech.com"
    });
    this.meta.addTag({ name: "author", content: "rsgitech" });
    this.meta.addTag({ name: "robots", content: "index, follow" });
  }
  gotToYahoo(event) {
    // event.preventDefault();
    console.log(event);
  }
  @startLoadingIndicator
  triggerLoadingIndicator() {
    setTimeout(this.triggerLoadingIndicatorStop.bind(this), 5000);
  }

  @stopLoadingIndicator
  triggerLoadingIndicatorStop() {
    console.log("stopped");
  }
}
