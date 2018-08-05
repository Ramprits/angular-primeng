export class Employee {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public email: string,
        public contact: string,
        public image: File,
        public createdDt?: Date
    ) {}
}
