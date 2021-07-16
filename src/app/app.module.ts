import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import{HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
//import{Employee} from './employee'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    AddEditComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //Employee

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
