import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

    newsSub: Subscription;
    news: any[];

    constructor(private _news: NewsService) {
    }

    ngOnInit() {
        this._news.getNews();
        this.newsSub = this._news.getNewsListner().subscribe((data: any[]) => {
            this.news = data;
        });

    }

    ngOnDestroy() {
        this.newsSub.unsubscribe();
    }
}
