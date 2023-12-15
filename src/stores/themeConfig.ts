import { defineStore } from "pinia";

export const useThemeConfig = defineStore("themeConfig", {
  state: (): ThemeConfigState => ({
    themeConfig: {
      layout: "defaults",
      animation: 'slide-right',
    },
  }),
});
