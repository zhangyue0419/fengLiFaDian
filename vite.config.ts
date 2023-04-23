import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
// import os from 'os'

// function getNetWorkIp() {
//   // 打开host
//   let needHost = ""
//   try {
//     const network = os.networkInterfaces()

//     for (const dev in network) {
//       const iface = network[dev]
//       for (let i = 0; i < iface.length; i++) {
//         const alias = iface[i]
//         if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
//           needHost = alias.address
//         }
//       }
//     }
//   } catch (error) {
//     needHost = "http://localhost"
//   }
//   return needHost
// }
// const IP = getNetWorkIp()

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};
const alias = [
  {
    find: "@",
    replacement: pathResolve("src"),
  },
  {
    find: "assets",
    replacement: pathResolve("src/assets"),
  },
  {
    find: "components",
    replacement: pathResolve("src/components"),
  },
  {
    find: "views",
    replacement: pathResolve("src/views"),
  },
  {
    find: "utils",
    replacement: pathResolve("src/utils"),
  },
];

export default defineConfig({
  // base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  // 需安装 npm install -D unplugin-vue-components unplugin-auto-import
  plugins: [vue()],
  resolve: {
    alias,
    extensions: [".vue", ".js", ".json"],
  },
  // 8月更新，全局引入less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    open: true,
    port: 8080,
    host: '0.0.0.0',
    https: false,
  },
  build: {
    outDir: "dist",
    // 9月更新
    assetsDir: "assetsImg", //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    // 10月更新
    minify: "terser", // 混淆器，terser 构建后文件体积更小，'terser' | 'esbuild'
    // chunkSizeWarningLimit: 1500, //chunk 大小警告的限制，默认500KB
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      // output: {
      //   // 最小化拆分包
      //   manualChunks(id: any) {
      //     if (id.includes('node_modules')) {
      //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
      //     }
      //   },
      //   chunkFileNames: 'js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名，[name]表示文件名,[hash]表示该文件内容hash值
      // }
    },
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
      // 10月更新
      output: {
        comments: true, // 去掉注释内容
      },
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
});
