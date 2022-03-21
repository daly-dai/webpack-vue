import Vue from "vue";
import App from "./App.vue";

import "./styles/index.scss";
import { add } from "./tools/add.js";

console.log(add(1, 2));
console.log("我是main.js");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
