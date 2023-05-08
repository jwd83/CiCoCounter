import { useState } from "preact/hooks";

export default function SignIn() {
  const [disabled, setDisabled] = useState(true);

  // check if the value entered is 16 characters long
  function verifyLength(event: any) {
    if (event.target.value.length === 16) {
      // TODO: check that all characters are numbers

      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <div class="bg-gray-400 rounded-xl m-auto" style="width: 400px">
      <form method="post" action="/api/login">
        <h2 class="text-4xl mb-4 pt-4">Sign In</h2>
        <div class="mb-4 text-2xl">
          Please Enter Your<br />
          🔑 Account #
        </div>
        <div class="mb-2">
          <input
            id="password"
            type="text"
            name="password"
            maxLength={16}
            class="rounded ml-4 mr-4 bg-blue-100 text-3xl p-2 text-center border-4"
            onInput={verifyLength}
            autocomplete="password"
            autofocus
            style="width: 325px;"
          />
        </div>
        <div class="pb-2">
          <button
            type="submit"
            class="rounded-xl hover:bg-green-300 bg-green-200 p-2 border(green-500 2) m-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={disabled}
          >
            Sign In
          </button>
          or
          <a
            href="/api/signup"
            class="rounded-xl hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) m-2"
          >
            Free &amp; Instant Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
