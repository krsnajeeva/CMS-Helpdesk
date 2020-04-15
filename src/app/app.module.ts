import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core-module/app.component';
import { CountriesListComponent } from './feature-module/countries-list/countries-list.component';
import { HomeComponent } from './feature-module/home/home.component';
import { ToolBarComponent } from './block-module/tool-bar/tool-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SideNavComponent } from './block-module/side-nav/side-nav.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ContextMenuModule } from 'primeng/contextmenu';
import { HelpDeskFeatureModule } from './feature-module/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    HomeComponent,
    ToolBarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    InputTextareaModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    SidebarModule,
    TableModule,
    CodeHighlighterModule,
    ContextMenuModule,
    HelpDeskFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
