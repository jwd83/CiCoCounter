// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/add_exercise.ts";
import * as $2 from "./routes/api/add_meal.ts";
import * as $3 from "./routes/api/login.ts";
import * as $4 from "./routes/api/save_profile.ts";
import * as $5 from "./routes/api/signup.ts";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/logout.ts";
import * as $8 from "./routes/profile.tsx";
import * as $$0 from "./islands/SignIn.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/add_exercise.ts": $1,
    "./routes/api/add_meal.ts": $2,
    "./routes/api/login.ts": $3,
    "./routes/api/save_profile.ts": $4,
    "./routes/api/signup.ts": $5,
    "./routes/index.tsx": $6,
    "./routes/logout.ts": $7,
    "./routes/profile.tsx": $8,
  },
  islands: {
    "./islands/SignIn.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
