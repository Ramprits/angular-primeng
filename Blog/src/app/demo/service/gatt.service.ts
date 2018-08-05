import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericRepository} from './GenericRepository';
import {GattModel} from '../domain/gattModel';

@Injectable({
    providedIn: 'root'
})
export class GattService extends GenericRepository<GattModel, number> {

    constructor(http: HttpClient) {
        super(http);
    }

}
