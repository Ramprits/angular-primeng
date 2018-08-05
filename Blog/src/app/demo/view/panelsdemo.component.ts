import {Component, OnInit} from '@angular/core';
import {GattService} from '../service/gatt.service';
import {GattModel} from '../domain/gattModel';

@Component({
    templateUrl: './panelsdemo.component.html'
})
export class PanelsDemoComponent implements OnInit {
    get gutt(): GattModel[] {
        return this._gutt;
    }

    set gutt(value: GattModel[]) {
        this._gutt = value;
    }


    private _gutt: GattModel[];
    private guttService: GattService;

    constructor(gattService: GattService) {
        this.guttService = gattService;
    }

    years = [2015, 2016, 2017, 2018, 2019, 2020];

    getYears(): number[] {
        const getyear = this.years;
        let numbers = [];
        for (let i = 1; i < 2; i++) {
           // @ts-ignore
            numbers = getyear[i];
        }
        return numbers;
    }

    getMonths(): string[] {
        const month = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        const month1 = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        let totalMonth = [];
        totalMonth = month.concat(month1);
        let moths = [];
        for (let i = 0; i < 2; i++) {
            moths = month;
        }

        return totalMonth;
    }

    ngOnInit(): void {


        this.guttService.findAll().subscribe(data => {
            this._gutt = data;

        }, ((error) => {
            console.error(error);
        }), (() => {
        }));
    }

}
