import Post from "../models/Post.js";

// Temporary data storage (Array)
let posts = [];

// GET all posts
export const getAllPosts = (req, res) => {
    res.status(200).json(posts);
};

// GET a single post by ID
export const getPostById = (req, res) => {
    try {
        const post = posts.find(p => p.id === parseInt(req.params.id));
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// CREATE a new post
export const createPost = (req, res) => {
    try {
        const { title, content, author } = req.body;

        // Validation: Check if required fields are provided
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const newPost = new Post(posts.length + 1, title, content, author);
        posts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// UPDATE an existing post
export const updatePost = (req, res) => {
    try {
        const { title, content, author } = req.body;
        const post = posts.find(p => p.id === parseInt(req.params.id));

        if (!post) return res.status(404).json({ message: "Post not found" });

        // Validation: Ensure at least one field is provided
        if (!title && !content && !author) {
            return res.status(400).json({ message: "At least one field (title, content, or author) is required for update" });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        post.author = author || post.author;
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// DELETE a post
export const deletePost = (req, res) => {
    try {
        const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

        if (postIndex === -1) return res.status(404).json({ message: "Post not found" });

        posts.splice(postIndex, 1);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
