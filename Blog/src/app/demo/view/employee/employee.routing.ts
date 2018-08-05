import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";

const routes: Routes = [
    {
        path: "",
        component: EmployeeComponent
    },
    {
        path: "create",
        component: CreateEmployeeComponent
    }
];

export const EmployeeRoutes = RouterModule.forChild(routes);
