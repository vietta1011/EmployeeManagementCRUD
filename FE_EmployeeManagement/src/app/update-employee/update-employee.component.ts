import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  id!: string;
  employee!: Employee;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router
  ) {}

  onSubmit(){
    this.updateEmployee();
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    },
    error => console.log(error));
  }
}
