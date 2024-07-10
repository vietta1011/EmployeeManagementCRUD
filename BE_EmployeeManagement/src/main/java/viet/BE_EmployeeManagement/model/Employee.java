package viet.BE_EmployeeManagement.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "pitagon")
public class Employee {
    @Id
    private String id;

    private String firstName;

    private String lastName;

    private String emailId;
}
