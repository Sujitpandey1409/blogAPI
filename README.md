# blogAPI
📝 Blog API
A simple RESTful API for managing blog posts using Node.js and Express.js.

🚀 Getting Started
1️⃣ Clone the Repository

git clone <repository-url>
cd blog-api

2️⃣ Install Dependencies

npm install

3️⃣ Run the Server

npm start    # Runs using Node.js
npm run dev  # Runs using Nodemon (for development)
By default, the server runs on http://localhost:5000.

📌 API Endpoints
Method	Endpoint	Description
GET	/posts	Get all blog posts
GET	/posts/:id	Get a single post by ID
POST	/posts	Create a new post
PUT	/posts/:id	Update an existing post by ID
DELETE	/posts/:id	Delete a post by ID
🛠 Usage & Examples
✅ Get All Posts

Request:

curl -X GET http://localhost:5000/posts
Response:

[]

✅ Create a New Post
Request:

curl -X POST http://localhost:5000/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Post", "content": "Hello, World!", "author": "John Doe"}'
Response:

{
  "id": 1,
  "title": "My First Post",
  "content": "Hello, World!",
  "author": "John Doe"
}
✅ Update a Post
Request:

curl -X PUT http://localhost:5000/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Post", "content": "New content!", "author": "John Doe"}'
Response:


{
  "id": 1,
  "title": "Updated Post",
  "content": "New content!",
  "author": "John Doe"
}
✅ Delete a Post
Request:

curl -X DELETE http://localhost:5000/posts/1
Response:


{ "message": "Post deleted successfully" }
🛡 Validation & Error Handling
Ensures title and content fields are required for creating/updating a post.
Returns proper HTTP status codes for errors.
🔬 Running Tests
To run tests using Mocha, Chai, and Supertest:


npm test