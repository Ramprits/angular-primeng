import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeRoutes } from "./employee.routing";
import { PrimengModule } from "../../shared/primeng/primeng.module";

@NgModule({
    imports: [CommonModule, PrimengModule, EmployeeRoutes],
    declarations: [EmployeeComponent, CreateEmployeeComponent]
})
export class EmployeeModule {}
