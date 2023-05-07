import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";
import { authCookie } from "$app/utils/auth.ts";

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
      authCookie(headers, user_id, url);
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
