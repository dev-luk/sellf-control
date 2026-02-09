import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { HashRouter } from "react-router-dom";

<HashRouter>
  {/* suas rotas */}
</HashRouter>


export default defineConfig({
  plugins: [react()],
  base: "/sellf-control/",
});
