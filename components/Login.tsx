export function Login() {
  return (
    <div class="bg-gray-400 rounded-xl m-auto" style="width: 400px">
      <form method="post" action="/api/login">
        <h2 class="text-4xl mb-4 pt-4">Login</h2>
        <div class="mb-4 text-2xl">
          🔑 Account #
        </div>
        <div class="mb-2">
          <input
            type="password"
            name="password"
            class="rounded ml-4 mr-4 bg-blue-100 text-2xl p-2"
            autofocus
          />
        </div>
        <div class="pb-2">
          <button
            type="submit"
            class="rounded-xl hover:bg-green-300 bg-green-200 p-2 border(green-500 2) m-2"
          >
            Login
          </button>
          or
          <a
            href="/api/signup"
            class="rounded-xl hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) m-2"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
