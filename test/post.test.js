import request from "supertest";
import app from "../src/app.js"; // Import the existing app instance
import { expect } from "chai";

describe("Blog API Tests", () => {
    it("GET /posts should return an empty array initially", async () => {
        const res = await request(app).get("/posts");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([]);
    });

    it("POST /posts should create a post", async () => {
        const res = await request(app).post("/posts").send({
            title: "Test Post",
            content: "This is a test post",
            author: "John Doe",
        });
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property("id");
    });
});
