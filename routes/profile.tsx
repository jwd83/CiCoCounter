import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
// load components we need
import { Login } from "../components/Login.tsx";
import { Logout } from "../components/Logout.tsx";
import { WelcomeHome } from "../components/WelcomeHome.tsx";
import { Data, Meal } from "$app/utils/types.ts";
import { loadMeals } from "$app/utils/db.ts";
import { todaysDate } from "$app/utils/date.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookies = getCookies(req.headers);
    let meals: Meal[] = [];
    // if the user is logged in (has a cookie), load their meals
    if (cookies.auth !== undefined) {
      const _local_date = todaysDate();
      meals = await loadMeals(cookies.auth, _local_date);
      console.log(meals);
    }
    console.log(cookies);
    return ctx.render!({
      isAllowed: cookies.auth !== undefined,
      name: cookies.auth || "anonymous",
      meals: meals,
    });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      {!data.isAllowed ? <Login /> : (
        <>
          <WelcomeHome />
          <Logout />
        </>
      )}
    </>
  );
}
