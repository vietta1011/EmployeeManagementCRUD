import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  id: string | undefined;
  employee: Employee = new Employee;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id!).subscribe(data => {
      this.employee = data;
    })
  }

}
