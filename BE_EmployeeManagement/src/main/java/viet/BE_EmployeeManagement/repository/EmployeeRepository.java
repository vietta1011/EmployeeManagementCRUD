package viet.BE_EmployeeManagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import viet.BE_EmployeeManagement.model.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
}
