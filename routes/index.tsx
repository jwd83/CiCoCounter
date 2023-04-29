import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { Logout } from "../components/Logout.tsx";
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
            Here's what's new today {data.name}!
          </div>
          <MealList />
          <AddMealForm />
          <Logout />
        </>
      )}
    </div>
  );
}

function Login() {
  return (
    <form method="post" action="/api/login">
      <h2 class="text-4xl mb-8">Login</h2>
      <div class="mb-2">
        🧑Username
        <input
          type="text"
          name="username"
          className="rounded ml-4 mr-4 bg-red-100 text-2xl"
        />
      </div>
      <div class="mb-4">
        🔑Password
        <input
          type="password"
          name="password"
          className="rounded ml-4 mr-4 bg-red-100 text-2xl"
        />
      </div>
      <div>
        <button
          type="submit"
          class="rounded bg-red-300 p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function MealList() {
  return (
    <div
      class="bg-green-200 rounded"
      style="width: 300px; text-align: center; margin:auto;"
    >
      <div class="text-2xl">Calorie Intake</div>
    </div>
  );
}

function AddMealForm() {
  return (
    <div
      class="bg-red-200 rounded"
      style="width: 300px; text-align: center; margin:auto;"
    >
      <div class="text-2xl">Add Meal</div>
    </div>
  );
}
