import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./route";
import { useRouter } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
