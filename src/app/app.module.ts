import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddCitiesFormComponent } from './add-cities-form/add-cities-form.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCitiesFormComponent,
    CityComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
