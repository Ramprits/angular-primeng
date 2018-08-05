import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../service/employee.service";
import { Employee } from "../../domain/employee.model";
import { Subscription } from "rxjs";

@Component({
    selector: "app-employee",
    templateUrl: "./employee.component.html",
    styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
    employees: Employee[] = [];
    employeeSub: Subscription;
    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.GetEmployees();
        this.employeeSub = this.employeeService.GetEmployeeListner().subscribe(
            (employee: Employee[]) => {
                this.employees = employee;
            },
            error => {
                console.log(error);
            }
        );
    }
}
