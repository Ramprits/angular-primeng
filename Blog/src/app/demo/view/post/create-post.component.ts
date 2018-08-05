import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../../domain/IPost';
import {mimeType} from '../../shared/mime.type.validator';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html'
})
export class CreatePostComponent implements OnInit {
    postForm: FormGroup;
    imagePreview: string;

    constructor(private  postService: PostService) {
    }

    ngOnInit() {
        this.postForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
            body: new FormControl('', [Validators.required])
        });
    }

    onSave(postFormData: PostModel) {
        if (this.postForm.invalid) {
            return;
        }
        console.log(postFormData);
        this.postService.addPost(postFormData.name, postFormData.email, postFormData.body, postFormData.image);
    }

    onBasicUploadAuto(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.postForm.patchValue({image: file});
        this.postForm.get('image').updateValueAndValidity();

        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
        console.log(this.postForm);
    }
}
