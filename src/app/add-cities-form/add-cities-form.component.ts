import { Component, EventEmitter, Output } from '@angular/core';
import { ICity } from '../interfaces/ICity';
import { IMonth } from '../interfaces/IMonth';

@Component({
  selector: 'app-add-cities-form',
  templateUrl: './add-cities-form.component.html',
  styleUrl: './add-cities-form.component.css',
})
export class AddCitiesFormComponent {
  @Output() cityCreated = new EventEmitter<ICity>();

  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  newCity: string = '';
  newCountry: string = '';
  bestMonth: string = '';
  message: string = '';

  onAddCity() {
    if (
      this.newCity === '' ||
      this.newCountry === '' ||
      this.bestMonth === ''
    ) {
      this.message = 'Los campos son obigatorios.';

      setTimeout(() => {
        this.message = '';
      }, 3000);

      return;
    }

    const newCityObject: ICity = {
      name: this.newCity,
      country: this.newCountry,
      bestMonthToVisit: this.bestMonth,
      isVisited: false,
    };

    this.cityCreated.emit(newCityObject);

    this.newCity = '';
    this.newCountry = '';
    this.bestMonth = '';
  }
}
