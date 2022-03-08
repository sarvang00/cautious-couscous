import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HTTP module
import { HttpClientModule } from "@angular/common/http"
// Toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, //required animations module
    ToastrModule.forRoot(), //toastr module
    FontAwesomeModule //fontawesome
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
