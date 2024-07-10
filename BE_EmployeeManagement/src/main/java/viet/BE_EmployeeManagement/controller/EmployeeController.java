package viet.BE_EmployeeManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import viet.BE_EmployeeManagement.exception.ResourceNotFoundException;
import viet.BE_EmployeeManagement.model.Employee;
import viet.BE_EmployeeManagement.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    // Lấy tất cả employee
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    // Tạo mới 1 employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // Tìm 1 employee bằng id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable String id){
        // Kiểm tra xem có tồn tại id không
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " + id));
        return ResponseEntity.ok(employee);
    }

    // Cập nhật 1 employee bằng id
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee employeeDetails){
        // Kiểm tra xem có tồn tại id không
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " + id));

        // Nếu tồn tại id đó thì set lại các field theo body mình nhập vào
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        // Tạo một biến mới để lưu dữ liệu của employee sau khi lưu vào cơ sở dữ liệu
        Employee updateEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updateEmployee);
    }

    // Xóa 1 employee bằng id
    @DeleteMapping("/employees/{id}")
    public  ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable String id){
        // Kiểm tra xem có tồn tại id không
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
