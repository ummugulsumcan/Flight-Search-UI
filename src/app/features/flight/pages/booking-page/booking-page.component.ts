import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipe } from "../../../../shared/pipes/form-error.pipe";
import { Location } from '@angular/common';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, ErrorMessagePipe]
})
export class BookingPageComponent implements OnInit {
  form!: FormGroup;
  flightId!: string;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.form.controls;
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) return;
    const modalElement = document.getElementById('successModal');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    this.form.reset();
    this.submitted = false;
  }
}
