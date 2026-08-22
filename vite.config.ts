import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const pagesBase = process.env.GITHUB_PAGES === "1" ? "/permitpilot/" : "/";

const productionCsp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "object-src 'none'",
].join("; ");

function htmlCsp(): Plugin {
  return {
    name: "html-csp",
    transformIndexHtml(html) {
      return html.replace(
        "<head>",
        `<head>\n    <meta http-equiv="Content-Security-Policy" content="${productionCsp}" />`,
      );
    },
  };
}

export default defineConfig(({ command }) => ({
  base: pagesBase,
  plugins: [react(), ...(command === "build" ? [htmlCsp()] : [])],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
}));
