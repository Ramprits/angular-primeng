import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { Car } from '../domain/car';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './sampledemo.component.html'
})
export class SampleDemoComponent implements OnInit {

    checkboxValues: string[] = [];

    citiesListbox: SelectItem[];

    selectedCity: any;

    homeIcon: MenuItem;

    breadcrumbItems: MenuItem[];

    sourceCars: Car[];

    targetCars: Car[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.homeIcon = { icon: 'pi pi-home' };
        this.breadcrumbItems = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ];

        this.citiesListbox = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];

        this.carService.getCarsMedium().then(cars => this.sourceCars = cars);
    }
}
