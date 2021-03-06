import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  display = false;

    showDialog() {
        this.display = true;
    }
  
  parentMessage: any
  genders: SelectItem[];
  search: any
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form = new FormGroup({
    ticket_no: new FormControl('HD#0001', ),
    date_created: new FormControl('03/14/20', ),
    name: new FormControl('sample', ),
    email: new FormControl('sample@gmail.com', [ Validators.pattern(this.emailPattern)]),
    program: new FormControl('',Validators.required ),
    status: new FormControl('new', ),
    notes: new FormControl('',Validators.required ),
    update_date: new FormControl('03/14/20', ),
    // search: new FormControl(),

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



// intant

// interpolision