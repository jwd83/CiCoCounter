// https://fresh.deno.dev/docs/concepts/app-wrapper

import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>CiCoCounter :: A Calorie Counter</title>
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body class="text-center">
        <h1 class="text-6xl mb-4 mt-2">
          <a href="/">⚖️CiCoCounter🏋️</a>
        </h1>
        <h2 class="text-2xl mb-4">
          The anonymous Calorie In, Calorie Out Counter
        </h2>

        <Component />

        <a href="https://fresh.deno.dev/">
          <img
            src="https://fresh.deno.dev/fresh-badge.svg"
            class="m-auto mt-10"
            style="width: 175px; height: auto;"
          />
        </a>
        <a href="https://github.com/jwd83/cicocounter">
          <img
            src="/github-mark.png"
            class="m-auto mt-4"
            style="width: 50px; height: auto;"
          />
        </a>
      </body>
    </html>
  );
}
