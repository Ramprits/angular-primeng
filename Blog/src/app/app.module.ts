import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutes } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppSideBarComponent } from "./app.sidebar.component";

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

import { CarService } from "./demo/service/carservice";
import { CountryService } from "./demo/service/countryservice";
import { EventService } from "./demo/service/eventservice";
import { NodeService } from "./demo/service/nodeservice";
import { PostComponent } from "./demo/view/post/post.component";
import { MessageService } from "primeng/api";
import { CreatePostComponent } from "./demo/view/post/create-post.component";
import { NewsComponent } from "./demo/view/news/news.component";
import { PrimengModule } from "./demo/shared/primeng/primeng.module";

@NgModule({
    declarations: [
        AppComponent,
        AppTopBarComponent,
        AppSideBarComponent,
        SampleDemoComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        ChartsDemoComponent,
        FileDemoComponent,
        MiscDemoComponent,
        DocumentationComponent,
        PostComponent,
        CreatePostComponent,
        NewsComponent
    ],
    imports: [BrowserModule, AppRoutes, BrowserAnimationsModule, PrimengModule],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService,
        CountryService,
        EventService,
        MessageService,
        NodeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
