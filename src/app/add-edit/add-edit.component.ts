import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import{EmployeeService} from '../employee.service'
import{Employee} from '../employee'

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  public empId;
  public employee;
  public empLists=[];
  public test=''
  constructor(private router: Router, private Aroute: ActivatedRoute, private emps:EmployeeService) { }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      console.log('id =',id)
      if(id>=0){
        this.empId=id;
      this.getById()
      // this.safetyCheck(()=>this.employee)
      }
      else{
        this.employee= new Employee(null,'','');

      }
      

      console.log('test-2',this.empLists);
      
      
    // this.empLists.forEach(element => {
    //   if(this.empId==element.id){
    //     this.employee=element;
    //   }

    // });
    // console.log(this.employee)
    })
  }

  getById(){
    this.emps.getEmployeeList().subscribe(data=>{
      this.empLists=data.employeeDetails
      console.log(this.empLists);
      this.empLists.forEach(element => {
          if(this.empId==element.employeeId){
            this.employee=element;
          }
        });
        console.log(this.employee)
    })
  }

  onEditUpdate(){
    console.log(this.employee);
    this.emps.updateEmployeeById(this.employee).subscribe(
      data=> console.log('!success',this.employee)
      
    )
    this.router.navigate([''])
    

  }

  onEditCancel(){
    this.router.navigate([''])
  }

  onAdd(){
    console.log(this.employee);
    this.emps.addEmployee(this.employee).subscribe(
      data=> console.log('!success',this.employee)
      
    )
    this.router.navigate([''])
    
  }

  // safetyCheck(fn:any){
  //   try{
  //       return fn();
  //   }
  //   catch(e){
  //     return undefined
  //   }
  // }

}
