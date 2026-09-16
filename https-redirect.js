const ORIGIN = "https://skagwayshoreexcursions.com";

const STATIC_EXT =
  /\.(css|js|mjs|map|png|jpe?g|gif|webp|svg|ico|txt|xml|json|jsonc|woff2?|ttf|eot|pdf|webmanifest|md|sh|py|ts|tsx|toml)$/i;

const BLOCK_PREFIXES = [
  "/.git",
  "/app",
  "/components",
  "/lib",
  "/scripts",
  "/node_modules",
  "/.wrangler",
  "/package.json",
  "/package-lock.json",
  "/wrangler.jsonc",
  "/wrangler.toml",
  "/https-redirect.js",
  "/next.config.ts",
  "/tsconfig.json",
  "/eslint.config.mjs",
  "/postcss.config.mjs",
  "/CLAUDE.md",
  "/AGENTS.md",
  "/README.md",
];

const KNOWN_PAGES = new Set([
  "",
  "excursions",
  "port-guide",
  "one-day-in-skagway",
  "faq",
  "white-pass-railway-tours",
  "yukon-tours-from-skagway",
  "skagway-dog-sledding-tours",
  "helicopter-glacier-tours",
  "private-skagway-tours",
  "family-friendly-skagway-excursions",
  "tours/white-pass-summit-rail-and-bus",
  "tours/skagway-city-and-white-pass-summit",
  "tours/yukon-rail-and-bus-adventure",
  "tours/white-pass-summit-yukon-suspension-bridge",
  "tours/bennett-scenic-journey",
  "tours/summit-views-sled-dogs",
  "tours/helicopter-glacier-discovery",
  "tours/self-guided-jeep-to-yukon",
  "tours/scenic-waterfall-adventure",
  "tours/ocean-raft-adventure",
]);

function isBlocked(pathname) {
  const lower = pathname.toLowerCase();
  return BLOCK_PREFIXES.some(
    (p) => lower === p || lower.startsWith(`${p}/`) || lower.startsWith(p),
  );
}

function isStaticAsset(pathname) {
  return STATIC_EXT.test(pathname);
}

function pageKey(pathname) {
  let p = pathname || "/";
  try {
    p = decodeURIComponent(p);
  } catch {
    /* keep */
  }
  if (p.toLowerCase().endsWith(".html")) p = p.slice(0, -5);
  p = p.replace(/\/+$/, "");
  if (p.startsWith("/")) p = p.slice(1);
  return p;
}

function toCanonical(pathname, search) {
  let path = pathname || "/";
  try {
    path = decodeURIComponent(path);
  } catch {
    /* keep */
  }
  if (path.toLowerCase().endsWith(".html")) path = path.slice(0, -5);
  if (path !== "/" && !path.endsWith("/")) path = `${path}/`;
  return `${ORIGIN}${path}${search || ""}`;
}

async function notFound(env, request) {
  const assetRes = await env.ASSETS.fetch(
    new Request(`${ORIGIN}/__skagway_missing_path__/`, request),
  );
  const headers = new Headers(assetRes.headers);
  headers.delete("Location");
  headers.set("Cache-Control", "no-store");
  return new Response(assetRes.body, {
    status: 404,
    statusText: "Not Found",
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (isBlocked(url.pathname)) {
      return notFound(env, request);
    }

    const key = pageKey(url.pathname);
    const isHtmlExt = url.pathname.toLowerCase().endsWith(".html");
    const needsSlash =
      !isStaticAsset(url.pathname) &&
      url.pathname !== "/" &&
      (!url.pathname.endsWith("/") || isHtmlExt);

    if (url.protocol === "http:") {
      if (KNOWN_PAGES.has(key)) {
        return Response.redirect(toCanonical(url.pathname, url.search), 301);
      }
      return Response.redirect(`${ORIGIN}${url.pathname}${url.search}`, 301);
    }

    if (needsSlash && KNOWN_PAGES.has(key)) {
      return Response.redirect(toCanonical(url.pathname, url.search), 301);
    }

    if (needsSlash && !isStaticAsset(url.pathname)) {
      return notFound(env, request);
    }

    return env.ASSETS.fetch(request);
  },
};
