import { createApp } from "vue";
import App from "./App.vue";
import directive from "./utils/directive";

createApp(App).use(directive).mount("#app");
