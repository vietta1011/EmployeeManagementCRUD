import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: string | undefined){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: string | undefined){
    this.employeeService.deleteEmployee(id!).subscribe(data => {
      this.getEmployee();
    })
  }

  employeeDetail(id: string | undefined){
    this.router.navigate(['employee-details', id]);
  }
}
