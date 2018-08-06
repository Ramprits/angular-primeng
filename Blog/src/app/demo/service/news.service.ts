import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";

const BACKEN_URL =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3e882095547745c9a17929e5e269ea8d";

@Injectable({
    providedIn: "root"
})
export class NewsService {
    news: any[];
    newsSub = new Subject<any[]>();

    constructor(private http: HttpClient) {}

    getNews() {
        return this.http
            .get<{ status: string; totalResults: number; news: any }>(
                BACKEN_URL
            )
            .subscribe(data => {
                // @ts-ignore
                this.news = data;
                this.newsSub.next([...this.news]);
            });
    }

    getNewsListner() {
        return this.newsSub.asObservable();
    }
}
