import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
    const cookies = getCookies(req.headers);
    const headers = new Headers();

    // open the deno KV data store

    // get the current timestamp
    let data = {
      "user_id": cookies.auth,
      "timestamp": Date.now(),
      "meal": form.get("meal"),
      "calories": form.get("calories"),
    };

    headers.set("location", "/");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
