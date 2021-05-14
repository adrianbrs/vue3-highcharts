/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
import { defineComponent, h, ref, onMounted, onUnmounted, watch, toRefs, Ref } from "vue";
import Highcharts from "highcharts";
import { copyObject } from './utils'

const vueHighcharts = defineComponent({
  name: "VueHighchart",
  props: {
    type: {
      type: String,
      default: "chart"
    },

    options: {
      type: Object,
      required: true
    },

    redrawOnUpdate: {
      type: Boolean,
      default: true
    },

    oneToOneUpdate: {
      type: Boolean,
      default: true
    },

    animateOnUpdate: {
      type: Boolean,
      default: true
    },

    deepCopyOnUpdate: {
      type: Boolean,
      default: true
    }
  },

  setup(props, { emit }) {
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

    const chartRef = ref(null);
    const chart = ref(null);

    const { options } = toRefs(props);

    if (options.value && (Highcharts as any)[props.type]) {
      watch(
        options,
        newValue => {
          if (chart.value) {
            (chart.value as any).update(
              copyObject(newValue, props.deepCopyOnUpdate),
              props.redrawOnUpdate,
              props.oneToOneUpdate,
              props.animateOnUpdate
            );
            emit("updated");
          }
        },
        { deep: true }
      );

      onMounted(() => {
        const opts = copyObject(options.value, true); // Always use a deep copy to generate a chart
        chart.value = (Highcharts as any)[props.type](chartRef.value, opts, () => {
          emit("rendered");
        });
      });

      onUnmounted(() => {
        if (chart.value) (chart.value as any).destroy();
        emit("destroyed");
      });
    } else if (!props.options) {
      console.warn('The "options" parameter is required.');

      // Check if is running in browser context and throw warning
    } else if (isBrowser) {
      console.warn(`${props.type} is not a valid highcharts type or has not been imported`);
    }

    // Rather than returning a render function here. We'll return the chart ref and highcharts
    // instance so there exposed.
    return {
      chartRef,
      chart
    };
  },

  render() {
    return h("div", {
      class: "vue-highcharts",
      ref: "chartRef"
    });
  }
});

export default vueHighcharts;
