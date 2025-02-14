class Post {
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }
}

export default Post;
