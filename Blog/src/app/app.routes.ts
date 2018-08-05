import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SampleDemoComponent } from "./demo/view/sampledemo.component";
import { FormsDemoComponent } from "./demo/view/formsdemo.component";
import { DataDemoComponent } from "./demo/view/datademo.component";
import { PanelsDemoComponent } from "./demo/view/panelsdemo.component";
import { OverlaysDemoComponent } from "./demo/view/overlaysdemo.component";
import { MenusDemoComponent } from "./demo/view/menusdemo.component";
import { MessagesDemoComponent } from "./demo/view/messagesdemo.component";
import { ChartsDemoComponent } from "./demo/view/chartsdemo.component";
import { FileDemoComponent } from "./demo/view/filedemo.component";
import { MiscDemoComponent } from "./demo/view/miscdemo.component";
import { DocumentationComponent } from "./demo/view/documentation.component";
import { PostComponent } from "./demo/view/post/post.component";
import { CreatePostComponent } from "./demo/view/post/create-post.component";
import { EmployeeComponent } from "./demo/view/employee/employee.component";
import { CreateEmployeeComponent } from "./demo/view/employee/create-employee/create-employee.component";

export const routes: Routes = [
    { path: "", component: SampleDemoComponent },
    { path: "forms", component: FormsDemoComponent },
    { path: "posts", component: PostComponent },
    { path: "posts/create", component: CreatePostComponent },
    { path: "data", component: DataDemoComponent },
    { path: "panels", component: PanelsDemoComponent },
    { path: "overlays", component: OverlaysDemoComponent },
    { path: "menus", component: MenusDemoComponent },
    { path: "messages", component: MessagesDemoComponent },
    { path: "charts", component: ChartsDemoComponent },
    { path: "file", component: FileDemoComponent },
    {
        path: "employees",
        loadChildren: "../app/demo/view/employee/employee.module#EmployeeModule"
    },
    { path: "documentation", component: DocumentationComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
