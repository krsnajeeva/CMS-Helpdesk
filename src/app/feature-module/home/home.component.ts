import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentMessage: any
  genders: SelectItem[];

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form = new FormGroup({
    ticket_no: new FormControl('', [Validators.required]),
    date_created: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    program: new FormControl('', [Validators.required]),
    // status: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
    update_date: new FormControl('', [Validators.required]),

  });

  ngOnInit(): void {
    this.genders = [{ label: 'Select Gender', value: '' }, { label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];

  }

  uploadedFiles: any[] = [];
  constructor() { };


  get f() {
    return this.form.controls;
  }

  submit() {
    alert(JSON.stringify(this.form.value));
    this.parentMessage = JSON.stringify(this.form.value);
    console.log(this.form.value);
  }
}
