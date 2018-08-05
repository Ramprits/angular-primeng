import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuItem } from "primeng/components/common/api";
import { IPost, PostModel } from "../../domain/IPost";
import { Subscription } from "rxjs";
import { PostService } from "../../service/post.service";

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit, OnDestroy {
    breadcrumbItems: MenuItem[];
    defaultImageUrl = "assets/images/default.png";
    homeIcon: { icon: string };
    posts: PostModel[];
    postSubscription: Subscription;

    constructor(private postService: PostService) {
        this.homeIcon = { icon: "pi pi-home" };
        this.breadcrumbItems = [{ label: "Post" }, { label: "Lionel Messi" }];
    }

    ngOnInit() {
        this.postService.GetPosts();
        this.postSubscription = this.postService
            .GePostListner()
            .subscribe((post: PostModel[]) => {
                this.posts = post;
                console.log(this.posts);
            });
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
