import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  ngOnInit(): void {
  }

  constructor(private employeeService: EmployeeService, private router: Router) {}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
