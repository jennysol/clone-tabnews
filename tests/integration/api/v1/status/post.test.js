import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

test("POST to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status", {
    method: "POST",
  });
  expect(response.status).toBe(405);

  const responseBody = await response.json();

  expect(responseBody).toEqual({
    name: "MethodNotAllowedError",
    message: "Method not allowed for this point.",
    action: "Check valid HTTP method",
    status_code: 405,
  });
});
