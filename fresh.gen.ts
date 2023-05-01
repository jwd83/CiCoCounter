// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/addmeal.ts";
import * as $2 from "./routes/api/login.ts";
import * as $3 from "./routes/api/signup.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/logout.ts";
import * as $6 from "./routes/profile.tsx";
import * as $7 from "./routes/welcome.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/addmeal.ts": $1,
    "./routes/api/login.ts": $2,
    "./routes/api/signup.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/logout.ts": $5,
    "./routes/profile.tsx": $6,
    "./routes/welcome.tsx": $7,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
