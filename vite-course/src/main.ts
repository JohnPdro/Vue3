import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css"

const autoImportModules = import.meta.globEager("./autoImports/*js");

createApp(App).mount("#app");
