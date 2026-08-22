import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

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
  // Relative so assets work both at /permitpilot/ on github.io and at the
  // custom-domain apex once DNS exists.
  base: "./",
  plugins: [react(), ...(command === "build" ? [htmlCsp()] : [])],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
}));
