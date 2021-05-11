import { App } from "vue";
import Vue3Highcharts from "./vue3-highcharts";

const install = (app: App) => {
  app.component(Vue3Highcharts.name, Vue3Highcharts);
};

export default { ...Vue3Highcharts, install };
