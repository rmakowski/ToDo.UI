import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import App from "./App.vue";
import "./assets/global.css";
import router from "./router";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(VueLoading, {
	color: "#0d1117",
	backgroundColor: "#949da7",
});
app.mount("#app");
