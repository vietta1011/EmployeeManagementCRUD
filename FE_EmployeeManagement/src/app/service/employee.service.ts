import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:1011/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  // Vì lấy toàn bộ nên không cần truyền đối
  // Get toàn bộ nên đăng kí lấy 1 mảng employee cho vào 1 mảng object chứa các thông tin của employee
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // Tạo mới 1 employee nên truyền đối là 1 kiểu employee
  // Tạo 1 employee nên chỉ cần đăng kí 1 object employee mới
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  // Lấy ra 1 employee nên truyền đối là 1 id để tìm
  // Get 1 employee nên chỉ cần đăng kí lấy 1 employee
  getEmployeeById(id: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  // Update thông tin cho 1 employee nên cần tìm id và truyền dữ liệu mới vào employee
  // Update thông tin 1 employee nên chỉ cần đăng kí 1 object
  updateEmployee(id: string, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  // Xóa 1 employee nên truyền đối là 1 id để xóa
  // Xóa 1 employee nên chỉ cần đăng kí 1 object employee
  deleteEmployee(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
