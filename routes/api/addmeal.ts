import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    // check if the user is logged in
    const cookies = getCookies(req.headers);

    if (cookies.auth === undefined) {
      return new Response(null, {
        status: 403,
      });
    }

    // user is logged in, store their data
    const form = await req.formData();
    const headers = new Headers();
    const timestamp = Date.now().toString();
    const user_id = cookies.auth.toString();
    const kv = await Deno.openKv();

    console.log("KV = ");
    console.log(kv);

    // create our data object to store in the KV store
    const key = ["meals", user_id, timestamp];
    const value = {
      "user_id": cookies.auth,
      "timestamp": timestamp,
      "name": form.get("name"),
      "calories": form.get("calories"),
    };
    console.log(
      `key = ${key.toString()}, value = ${JSON.stringify(value)}`,
    );
    await kv.set(key, value);

    headers.set("location", "/");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
