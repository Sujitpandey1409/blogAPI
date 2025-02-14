import request from "supertest";
import app from "../src/app.js";
import { expect } from "chai";

describe("Blog API Tests", () => {
    it("GET /posts should return an empty array initially", async () => {
        const res = await request(app).get("/posts");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([]);
    });

    it("POST /posts should return 400 if required fields are missing", async () => {
        const res = await request(app).post("/posts").send({
            author: "John Doe"
        });
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message").that.equals("Title and content are required");
    });

    it("POST /posts should create a post when valid data is provided", async () => {
        const res = await request(app).post("/posts").send({
            title: "Test Post",
            content: "This is a test post",
            author: "John Doe",
        });
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property("id");
    });

    it("PUT /posts/:id should return 404 if post not found", async () => {
        const res = await request(app).put("/posts/999").send({
            title: "Updated Title"
        });
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message").that.equals("Post not found");
    });

    it("PUT /posts/:id should return 400 if no fields are provided", async () => {
        const res = await request(app).put("/posts/1").send({});
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property("message").that.equals("At least one field (title, content, or author) is required for update");
    });

    it("DELETE /posts/:id should return 404 if post does not exist", async () => {
        const res = await request(app).delete("/posts/999");
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property("message").that.equals("Post not found");
    });
});
