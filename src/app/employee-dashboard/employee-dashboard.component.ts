import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dash board.model';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  // formValue !: FormGroup;
  // employeeModelObj : EmployeeModel = new EmployeeModel();
  constructor(private service: ApiService) { }
valueList:any
  ngOnInit(): void {
    

this.service.getmethod().subscribe(data=>{
this.valueList=data
})
  }


post(data:any){
  this.service.postmethod(data).subscribe(result=>{
    console.log(result)
  })

}

}
