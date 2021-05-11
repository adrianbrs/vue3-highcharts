import { Ref } from "vue";
declare const vueHighcharts: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ObjectConstructor;
        required: true;
    };
    redrawOnUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    oneToOneUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    animateOnUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    chartRef: Ref<null>;
    chart: Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    options: Record<string, any>;
    redrawOnUpdate: boolean;
    oneToOneUpdate: boolean;
    animateOnUpdate: boolean;
} & {}>, {
    type: string;
    redrawOnUpdate: boolean;
    oneToOneUpdate: boolean;
    animateOnUpdate: boolean;
}>;
export default vueHighcharts;
