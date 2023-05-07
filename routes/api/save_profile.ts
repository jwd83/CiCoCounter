import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { Profile } from "$app/utils/types.ts";
import { saveProfile } from "$app/utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    // check if the user is logged in
    const cookies = getCookies(req.headers);

    if (cookies.auth === undefined) {
      return new Response(null, {
        status: 403,
      });
    }

    // user is logged in, prepare to store their meal
    const form = await req.formData();
    const headers = new Headers();
    const user_id = cookies.auth.toString();
    const profile: Profile = {
      sex: (form.get("sex")?.toString() || ""),
      height: (parseInt(form.get("height")?.toString() || "0")),
      weight: (parseInt(form.get("weight")?.toString() || "0")),
      age: (parseInt(form.get("age")?.toString() || "0")),
      tdee: (parseInt(form.get("tdee")?.toString() || "0")),
    };

    // store the meal
    await saveProfile(profile, user_id);

    headers.set("location", "/profile");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
