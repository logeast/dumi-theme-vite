import { defineConfig } from "dumi";

export default defineConfig({
  // mfsu: false,
  base: "/dumi-theme-vite/",
  publicPath: "/dumi-theme-vite/",
  themeConfig: {
    name: "Dumpress",
  },
  locales: [
    { id: "en-US", name: "English" },
    { id: "zh-CN", name: "中文" },
  ],
});
