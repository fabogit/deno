import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const port = 5000;
const router = new Router();

router.get("api/v1/activities", ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "activities",
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on: http://localhost:${port}`);
await app.listen({ port });
