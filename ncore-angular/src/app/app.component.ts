import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `<h1>Hey Angular</h1>`,
    styles: [`
    h1 {
        background-color: #fff;
        text-align: center;
    }
    `],
})
export class AppComponent {}