import { setCookie } from "std/http/cookie.ts";

export function authCookie(headers: Headers, user_id: string, url: URL) {
  setCookie(headers, {
    name: "auth",
    value: user_id, // this should be a unique value for each session
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "Lax", // this is important to prevent CSRF attacks
    domain: url.hostname,
    path: "/",
    secure: true,
  });
}
