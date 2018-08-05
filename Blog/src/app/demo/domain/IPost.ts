export interface IPost {
    name;
    email;
    body;
    image;
    createdDate?;
}

export class PostModel {
    constructor(public name: string, public email: string, public body: string, public image?: File) {
    }
}
