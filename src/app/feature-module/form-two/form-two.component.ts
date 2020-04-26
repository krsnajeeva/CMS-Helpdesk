import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../core-module/services/product.service';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { HelpDeskFormClass } from '../form-two/form';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
})

export class FormTwoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  today = new Date();
  current_date = ''
  buttonlable: String;
  isButtonVisible = false;
  uploadedFiles: any[] = [];
  namelist: any[];
  sub: any;
  data: any;
  helpdeskprogram: HelpDeskFormClass = new HelpDeskFormClass();
  LogData: any;
  issuelog: String;
  helpdesk_programID: any;
  helpdesk_notes: any;
  menuItems: MenuItem[];
  home: MenuItem;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    // this.buttonlable = 'Submit'
    this.menuItems = [
      // {label:'Create Ticket', url:'/help-desk/create'},
      { label: 'Edit Ticket', url: '/help-desk/edit/:id' }
    ];

    this.home = { icon: 'pi pi-home', url: '#' };

    this.getAllPrograms();
    this.registerForm = this.formBuilder.group({
      programID: ['', Validators.required],
      // notes: ['',],
    });

    this.sub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.getLogbyId(params.id);
      this.getRecord(params.id)
    });

    this.current_date = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');


  }
  getAllPrograms(): void {
    this.productService.getAllPrograms().subscribe(namelist => {
      this.namelist = namelist;
      console.log("namelist", namelist)
    });
  };

  getRecord(id): void {
    this.productService.getHelpdeskId(id).subscribe(data => {
      this.helpdeskprogram = data[0];
      this.data = data[0]
      // console.log("krsna", this.helpdeskprogram)

      switch (this.data.status) {
        case 'New': {
          this.buttonlable = 'Open';
          break;
        }
        case 'InProgress': {
          this.buttonlable = 'Resolve';
          break;
        }
        case 'Resolved': {
          this.isButtonVisible = true;
          this.buttonlable = 'Reopen';
          break;
        }
        case 'Reopened': {
          this.buttonlable = 'Reassign';
          break;
        }
        case 'Resolved': {
          this.buttonlable = 'Close';
          break;
        }
        default: {
          this.buttonlable = 'Close';
          break;
        }
      }
    })

  }
  getLogbyId(id): void {
    this.productService.getLogbyId(id).subscribe(data => {
      this.LogData = data
      console.log("logssss", data)
    });
  }

  onSubmit() {
    // this.helpDeskForm.staffName = this.cmsUserData.staffName;
    // this.helpDeskForm.email = this.cmsUserData.staffEmail;
    // alert(JSON.stringify(this.helpdeskprogram));
    this.helpdeskprogram.programID = this.helpdesk_programID;
    // this.helpdeskprogram.notes = this.helpdesk_notes
    switch (this.buttonlable) {
      case 'Open': {
        this.helpdeskprogram.status = 'InProgress';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log(data);
            alert(data[0].id)
            this.getRecord(data[0].id)
            // this.router.navigate(['']);
          });
        // alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Resolve': {
        this.helpdeskprogram.status = 'Resolved';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            // alert(data)
            // var va = data
            console.log(data);
            // this.router.navigate(['']);
          });
        // alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Reopen': {
        this.helpdeskprogram.status = 'Reopened';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log("---gauranga", data);
            alert(data);
            // this.getRecord(data[0].id)
            // this.router.navigate(['']);
          });
        // alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
      case 'Reassign': {
        this.helpdeskprogram.status = 'InProgress';
        this.productService.updateHelpdesk(this.helpdeskprogram)
          .subscribe(data => {
            console.log("---gauranga", data);
            // this.router.navigate(['']);
          });
        break;
      }
      default: {
        // this.helpdeskprogram.status = 'Closed';
        alert(JSON.stringify(this.helpdeskprogram));
        break;
      }
    }
  }
  onSubmitLog() {
    alert(this.issuelog)
  }
}
