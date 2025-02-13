const request = require("supertest");
const express = require("express");
const postRoutes = require("../src/app");
const { expect } = require("chai");

const app = express();
app.use(express.json());
app.use("/posts", postRoutes);

describe("Blog API Tests", () => {
    it("GET /posts should return an empty array initially", async () => {
        const res = await request(app).get("/posts");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it("POST /posts should create a post", async () => {
        const res = await request(app).post("/posts").send({
            title: "Test Post",
            content: "This is a test post",
            author: "John Doe",
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
    });
});
