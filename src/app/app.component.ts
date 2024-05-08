import { Component } from '@angular/core';
import { ICity } from './interfaces/ICity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  cities: ICity[] = [];

  onCityAdded(city: ICity) {
    this.cities.push(city);
  }

  onCityDeleted(city: ICity) {
    this.cities = this.cities.filter(c => c !== city)
  }
}
