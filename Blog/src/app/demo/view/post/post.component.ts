import {Component, OnInit, OnDestroy} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';
import {PostService} from '../service/post.service';
import {IPost} from '../domain/IPost';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
    breadcrumbItems: MenuItem[];
    homeIcon: { icon: string };
    posts: IPost[];
    postSubscription: Subscription;

    constructor(private postService: PostService) {
        this.homeIcon = {icon: 'pi pi-home'};
        this.breadcrumbItems = [{label: 'Post'}, {label: 'Lionel Messi'}];
    }

    ngOnInit() {
        this.postService.GetPosts();
        this.postSubscription = this.postService
            .GePostListner()
            .subscribe((post: IPost[]) => {
                this.posts = post;
                console.log(this.posts);
            });
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
