import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICity } from '../interfaces/ICity';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  @Input() city!: ICity;
  @Output() cityDeleted = new EventEmitter<ICity>();

  onVisit() {
    this.city.isVisited = !this.city.isVisited
  }

  onDelete() {
    this.cityDeleted.emit(this.city);
  }
}
