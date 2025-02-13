import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // jsxImportSource: '@emotion/react',
      tsDecorators: true,
      // plugins: [["@swc/plugin-styled-components", {}]]
    }),
  ],
  server: {
    port: 3006,
    open: true,
  },
});
