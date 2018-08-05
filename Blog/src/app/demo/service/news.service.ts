import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../../environments/environment';

const url = environment.newsApiUrl;

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    news: any[];
    newsSub = new Subject<any[]>();

    constructor(private http: HttpClient) {
    }

    getNews() {
        return this.http.get<{ status: string; totalResults: number; news: any }>(url).subscribe((data) => {
            // @ts-ignore
            this.news = data;
            this.newsSub.next([...this.news]);
        });
    }

    getNewsListner() {
        return this.newsSub.asObservable();
    }
}
