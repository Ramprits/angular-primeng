import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../../../service/employee.service";
import { mimeType } from "../../../shared/mime.type.validator";
import { Employee } from "../../../domain/employee.model";
import { SelectItem } from "primeng/components/common/selectitem";

@Component({
    selector: "app-create-employee",
    templateUrl: "./create-employee.component.html",
    styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
    employeeForm: FormGroup;
    genders: SelectItem[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeForm = new FormGroup({
            firstName: new FormControl(null, {
                validators: [Validators.required]
            }),
            lastName: new FormControl(null, {
                validators: [Validators.required]
            }),
            gender: new FormControl(null, {
                validators: [Validators.required]
            }),
            email: new FormControl(null, {
                validators: [Validators.required, Validators.email]
            }),
            contact: new FormControl(null, {
                validators: [Validators.required]
            }),
            image: new FormControl(null, {
                validators: [Validators.required],
                asyncValidators: [mimeType]
            }),
            createdDt: new FormControl(new Date("dd/mm/yyyy"))
        });
        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
        this.genders.push({label:'Female', value:'Female'});
    }

    onSubmit(employeeFormData: Employee) {}
}
