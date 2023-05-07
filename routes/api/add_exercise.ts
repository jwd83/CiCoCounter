import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { Meal } from "$app/utils/types.ts";
import { saveMeal } from "$app/utils/db.ts";

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
    const meal: Meal = {
      name: (form.get("name")?.toString() || ""),
      calories: parseInt(form.get("calories")?.toString() || "0"),
    };

    // store the meal
    await saveMeal(meal, user_id);

    headers.set("location", "/");
    return new Response(null, {
      status: 303, // "See Other"
      headers,
    });
  },
};
