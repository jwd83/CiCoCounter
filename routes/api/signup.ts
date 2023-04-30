import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);

    // generate a string of 16 random digits
    const user_id = Array.from(
      { length: 16 },
      () => Math.floor(Math.random() * 10),
    ).join("");

    const headers = new Headers();
    // const username = String(form.get("username") || "anonymous");
    setCookie(headers, {
      name: "auth",
      value: user_id, // this should be a unique value for each session
      maxAge: 120,
      sameSite: "Lax", // this is important to prevent CSRF attacks
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    headers.set("location", "/");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
