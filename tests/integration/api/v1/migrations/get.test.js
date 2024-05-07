import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  const respondeBody = await response.json();

  expect(response.status).toBe(200);
  expect(Array.isArray(respondeBody)).toBe(true);
  expect(respondeBody.length).toBeGreaterThan(0);
});
