test("DELETE to api/v1/migrations sould return 405", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });

  expect(res.status).toBe(405);
});
