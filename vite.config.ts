import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import AutoImport from "unplugin-auto-import/vite";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VantResolver } from "@vant/auto-import-resolver";
import postcsspxtoviewport from "postcss-px-to-viewport";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [
    vue(),
    vueSetupExtend(), 
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      defaultExportByFilename: false,
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router", "pinia"],
      dirs: ["./src/hooks/**", "./src/utils/**"],
      dts: "./auto-imports.d.ts", 
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),
  ],
  // 简写
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postcsspxtoviewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ig-", "el-", "van-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/^((?!\/src\/views\/h5\/).)*$/],
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  },
  build: {
    minify: true,
    outDir: "dist", // 打包输出目录
    chunkSizeWarningLimit: 1500, // 代码分包阈值
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].[hash].js`,
        chunkFileNames: `assets/js/[name].[hash].js`,
        assetFileNames: `assets/[ext]/[name].[hash].[ext]`,
        compact: true,
        manualChunks: {
          // vue: ["vue", "vue-router", "pinia"],
          vue: ["vue"],
          // echarts: ["echarts"],
          "element-plus": ["element-plus"],
          vant: ["vant"],
        },
      },
    },
    sourcemap: false,
  },
});
