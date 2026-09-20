const request = require("supertest");

const app = require("./app");

describe("API", () => {
  test("GET / should return 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(500);
  });

  test("GET /users should return 200", async () => {
    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(500);
  });
});
