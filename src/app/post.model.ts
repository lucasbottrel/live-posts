export class Post {
    constructor(
        public title: string,
        public description: string,
        public imagePath: string,
        public auther: string,
        public dateTimeCreated: Date
    ){}
}