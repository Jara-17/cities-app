import { Component, EventEmitter, Output } from '@angular/core';
import { ICity } from '../interfaces/ICity';

@Component({
  selector: 'app-add-cities-form',
  templateUrl: './add-cities-form.component.html',
  styleUrl: './add-cities-form.component.css'
})
export class AddCitiesFormComponent {
  @Output() cityCreated = new EventEmitter<ICity>();

  newCity: string = '';
  message: string = '';

  onAddCity() {
    if (this.newCity === "") {
      this.message = "El campo es obigatorio.";

      setTimeout(() => {
        this.message = ""
      }, 3000);

      return;
    }

    this.cityCreated.emit({name: this.newCity, isVisited: false});

    this.newCity = "";
  }
}
