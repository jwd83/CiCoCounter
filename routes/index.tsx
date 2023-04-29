import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { Logout } from "../components/Logout.tsx";
import { WelcomeHome } from "../components/WelcomeHome.tsx";
import { Login } from "../components/Login.tsx";
import { MealList } from "../components/MealList.tsx";
import { AddMealForm } from "../components/AddMealForm.tsx";

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
    <div class="text-center">
      <h1 class="text-6xl mb-8">
        <a href="/">CiCoCounter</a>
      </h1>

      {
        /* <div class="mb-4">
        You currently {data.isAllowed ? "are" : "are not"} logged in.
      </div> */
      }

      {!data.isAllowed ? <Login /> : (
        <>
          <WelcomeHome />
          <div class="text-2xl">
            Here are your stats for today {data.name}!
          </div>
          <MealList />
          <AddMealForm />
          <Logout />
        </>
      )}
    </div>
  );
}
