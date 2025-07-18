import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private readonly flightUrl = 'assets/flights.json';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.flightUrl);
  }
}
