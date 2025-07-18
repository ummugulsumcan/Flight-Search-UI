import { Routes } from '@angular/router';
import { FlightSearchPageComponent } from './features/flight/pages/flight-search-page/flight-search-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FlightSearchPageComponent
  },
  {
  path: 'book/:id',
  loadComponent: () =>
    import('./features/flight/pages/booking-page/booking-page.component').then(m => m.BookingPageComponent)
}
];
