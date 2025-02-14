import Post from "../models/Post.js";

// Temporary data storage (Array)
let posts = [];

// GET all posts
export const getAllPosts = (req, res) => {
    res.status(200).json(posts);
};

// GET a single post by ID
export const getPostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
};

// CREATE a new post
export const createPost = (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: "Title, content, and author are required" });
    }

    const newPost = new Post(posts.length + 1, title, content, author);
    posts.push(newPost);
    res.status(201).json(newPost);
};

// UPDATE an existing post
export const updatePost = (req, res) => {
    const { title, content, author } = req.body;
    const post = posts.find(p => p.id === parseInt(req.params.id));

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    res.status(200).json(post);
};

// DELETE a post
export const deletePost = (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

    if (postIndex === -1) return res.status(404).json({ message: "Post not found" });

    posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted successfully" });
};
