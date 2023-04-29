import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
// load components we need
import { AddMealForm } from "../components/AddMealForm.tsx";
import { Login } from "../components/Login.tsx";
import { Logout } from "../components/Logout.tsx";
import { MealList } from "../components/MealList.tsx";
import { WelcomeHome } from "../components/WelcomeHome.tsx";

interface Data {
  isAllowed: boolean;
  name: string;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    console.log(cookies);
    return ctx.render!({
      isAllowed: cookies.auth !== undefined,
      name: cookies.auth || "anonymous",
    });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      {!data.isAllowed ? <Login /> : (
        <>
          <WelcomeHome />
          <div class="text-2xl">
            Here are your stats for today {data.name}!
          </div>
          <MealList />
          <AddMealForm />
          <a href="/profile">Edit My Profile</a>
          <Logout />
        </>
      )}
    </>
  );
}
