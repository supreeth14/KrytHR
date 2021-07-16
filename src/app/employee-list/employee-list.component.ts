import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import{EmployeeService} from '../employee.service';
import {catchError} from 'rxjs/operators'
//import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employelists=[];
  public employee;

  constructor(private empService: EmployeeService,private http:HttpClient, private router: Router, private Aroute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.showEmployee();
    console.log('method called')
    // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //   console.log('component data',data);
      
      //this.totalAngularPackages = data;
      
  //}) 
  }

  showEmployee(){  
   this.empService.getEmployeeList().subscribe(data =>{
    this.employelists = data.employeeDetails
    
     console.log('test',this.employelists);
    })
  }

  onClick(emp){
    this.router.navigate(['/addEdit',emp.employeeId])

  }

  onAddEmployee(){
    this.router.navigate(['/addEdit',-1])
  }
  // errorHandler(error: HttpErrorResponse){
  //   console.log('went to error')
  //   return throwError(error.message || "server error")
  // }

  onDeleteEmployee(emp){
    this.empService.deletEmployee(emp.employeeId).subscribe(data=>console.log('sucess',emp)
    )
    console.log('in->deletemp');
    console.log(emp.employeeId);
    this.showEmployee();
    
    
  }
  onTest(){
    this.router.navigate(['/test'])
  }

  onTest2(){
    this.router.navigate(['/test2'])
  }


}
