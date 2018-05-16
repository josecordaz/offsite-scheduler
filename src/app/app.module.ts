import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
