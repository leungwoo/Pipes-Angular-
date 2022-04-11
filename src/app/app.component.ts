import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name!: string;
  public date!: string;
  public amount!: number;
  public height!: number;

  public car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
}
