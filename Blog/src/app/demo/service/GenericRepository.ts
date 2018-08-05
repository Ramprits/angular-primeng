import { Observable } from "rxjs";
import { IGenericRepository } from "./IGenericRepository";
import { HttpClient } from "@angular/common/http";

export abstract class GenericRepository<T, ID>
    implements IGenericRepository<T, ID> {
    protected constructor(private http: HttpClient) {}

    save(t: T): Observable<T> {
        throw new Error("Method not implemented.");
    }

    update(id: ID, t: T): Observable<T> {
        throw new Error("Method not implemented.");
    }

    findOne(id: ID): Observable<T> {
        throw new Error("Method not implemented.");
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`assets/data/data.json`);
    }

    delete(id: ID): Observable<any> {
        throw new Error("Method not implemented.");
    }
}
