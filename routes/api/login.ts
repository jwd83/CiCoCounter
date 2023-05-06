import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();

    // check if the password is 16 numbers exactly
    const user_id = String(form.get("password") || "");
    let verified = false;

    verified = user_id.length === 16 && /^\d+$/.test(user_id);

    if (verified) {
      const headers = new Headers();
      // const username = String(form.get("username") || "anonymous");
      setCookie(headers, {
        name: "auth",
        value: user_id, // this should be a unique value for each session
        maxAge: 60 * 60 * 24 * 365, // 1 year
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
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};
