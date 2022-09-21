import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";

import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(router);
app.use(Quasar);
app.mount("#app");
