import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(
    `Server is running ${env.NODE_ENV} mode on http://localhost:${env.PORT}`,
  );
});
