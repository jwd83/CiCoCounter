import { Handlers } from "$fresh/server.ts";
import { authCookie } from "$app/utils/auth.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);

    // generate a string of 16 random digits
    const user_id = Array.from(
      { length: 16 },
      () => Math.floor(Math.random() * 10),
    ).join("");

    const headers = new Headers();

    // set the cookie
    authCookie(headers, user_id, url);

    headers.set("location", "/");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
