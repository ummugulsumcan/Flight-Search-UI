import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlightCardComponent } from "../../components/flight-card/flight-card.component";
import { FlightSearchComponent } from "../../components/flight-search/flight-search.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-search-page',
  templateUrl: './flight-search-page.component.html',
  standalone: true,
  styleUrls: ['./flight-search-page.component.scss'],
  imports: [FlightCardComponent, FlightSearchComponent, CommonModule]
})
export class FlightSearchPageComponent {
  results: any[] = [];
  formData: any;

  constructor(private http: HttpClient) { }


  onSearch(formValue: any): void {
    this.http.get<any[]>('assets/flights.json').subscribe((flights) => {
      this.results = flights.filter(flight =>
        (!formValue.from || flight.from.toLowerCase().includes(formValue.from.toLowerCase())) &&
        (!formValue.to || flight.to.toLowerCase().includes(formValue.to.toLowerCase())) &&
        (!formValue.date || flight.date === formValue.date)
      );
    });
  }

  onDestinationClick(city: string) {
    this.formData = {
      from: city,
      to: '',
      date: ''
    };
  }
}
