import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import{EmployeeListComponent} from './employee-list/employee-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import {Test2Component} from './test2/test2.component';

const routes: Routes = [
  { path: '',   redirectTo: '/employeelists', pathMatch: 'full' },
  {path:'employeelists', component: EmployeeListComponent},
  {path:'addEdit/:id', component: AddEditComponent},
  {path:'addEdit', component: AddEditComponent},
  {path:'test', component: TestComponent},
  {path:'test2', component:Test2Component}
  
  
  ,{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
