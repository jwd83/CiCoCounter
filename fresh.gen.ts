// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/login.ts";
import * as $2 from "./routes/api/signup.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/logout.ts";
import * as $5 from "./routes/profile.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/login.ts": $1,
    "./routes/api/signup.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/logout.ts": $4,
    "./routes/profile.tsx": $5,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
