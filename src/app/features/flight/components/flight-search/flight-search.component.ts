import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnChanges {
  @Input() prefillData: any;
  @Output() search = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from: [''],
      to: [''],
      date: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['prefillData'] && this.prefillData) {
      this.form.patchValue(this.prefillData);
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.search.emit(this.form.value);
    }
  }
}
