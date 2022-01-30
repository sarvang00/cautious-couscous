import { Component } from '@angular/core';
import arrayWords from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-word-generator';

  words = '';
  limit = 10;

  handleSlideChange(newLimit: number) {
    console.log(this.limit)
    this.limit = newLimit;
  }
  
  generate() {
    this.words = arrayWords.slice(0, this.limit).join(", ");
  }

}
