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
        <h1 class="text-6xl mb-2">
          <a href="/">🏋️CiCoCounter⚖️</a>
        </h1>
        <h2 class="text-2xl mb-4">
          The anonymous Calorie In, Calorie Out counter
        </h2>

        <Component />
      </body>
    </html>
  );
}
