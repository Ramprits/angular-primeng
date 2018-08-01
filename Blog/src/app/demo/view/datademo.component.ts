import { Component, OnInit } from "@angular/core";
import { CarService } from "../service/carservice";

@Component({
    templateUrl: "./datademo.component.html"
})
export class DataDemoComponent implements OnInit {
    cars: any[];
    constructor(private carService: CarService) {}
    ngOnInit(): void {
        setTimeout(() => {
            this.carService
                .getCarsSmall()
                .then(data => {
                    this.cars = data;
                })
                .catch(err => {
                    console.error(err);
                });
        }, 0);
    }
}
