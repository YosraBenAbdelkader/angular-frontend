import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmpolyeeService } from '../empolyee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute , private employeeService : EmpolyeeService) { }
 id : number;
 employee: Employee;

  ngOnInit(): void {
    this.employee= new Employee();
    this.id= this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee= data;
    })
  }

}
