import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import countryNames from "../utils/countries"

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

  getRandCountry() {
    for (let i:number =0; i < this.limit; i++) {
      if (i==0) {
        this.words = countryNames[Math.floor(Math.random()*226) + 1];
      }
      else{
        this.words = this.words + ", " + countryNames[Math.floor(Math.random()*226) + 1];
      }
    }
  }

}
