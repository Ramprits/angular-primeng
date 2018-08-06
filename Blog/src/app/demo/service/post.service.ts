import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPost, PostModel } from "../domain/IPost";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PostService {
    posts: PostModel[] = [];
    postSubject = new Subject<PostModel[]>();

    constructor(private http: HttpClient) {}

    GetPosts() {
        return this.http
            .get<{ message: string; posts: IPost[] }>(
                `http://blogapi-env.xwqegbpr6v.us-east-1.elasticbeanstalk.com/api/posts`
            )
            .subscribe(postData => {
                (this.posts = postData.posts), console.log(postData.message);
                this.postSubject.next([...this.posts]);
            });
    }

    GePostListner() {
        return this.postSubject.asObservable();
    }

    addPost(name: string, email: string, body: string, image?: File) {
        const postData = new FormData();
        postData.append("name", name);
        postData.append("email", email);
        postData.append("body", body);
        postData.append("image", image, name);

        console.log(postData);
        return this.http
            .post<{ message: string; posts: PostModel }>(
                "http://localhost:4000/api/posts",
                postData
            )
            .subscribe(response => {
                const postDatas: PostModel = {
                    name: name,
                    email: email,
                    body: body
                };
                this.posts.push(postDatas);
                this.postSubject.next([...this.posts]);
            });
    }
}
