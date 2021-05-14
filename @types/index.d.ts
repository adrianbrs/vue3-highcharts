import { App } from "vue";
declare const _default: {
    install: (app: App<any>) => void;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
    setup?: ((this: void, props: Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, ctx: import("vue").SetupContext<Record<string, any>>) => void | import("vue").RenderFunction | {
        chartRef: import("vue").Ref<null>;
        chart: import("vue").Ref<null>;
    } | Promise<{
        chartRef: import("vue").Ref<null>;
        chart: import("vue").Ref<null>;
    }>) | undefined;
    name: string;
    template?: string | object | undefined;
    render?: Function | undefined;
    components?: Record<string, import("vue").Component<any, any, any, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions>> | undefined;
    directives?: Record<string, import("vue").Directive<any, any>> | undefined;
    inheritAttrs?: boolean | undefined;
    emits?: (Record<string, any> & ThisType<void>) | (string[] & ThisType<void>) | undefined;
    expose?: string[] | undefined;
    serverPrefetch?(): Promise<any>;
    call: (<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A) => void) & ((this: unknown, ...args: unknown[]) => never);
    __defaults?: {
        type: string;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } | undefined;
    data?: ((this: import("vue").ComponentPublicInstance<Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, {}, {}, import("vue").MethodOptions, {}, Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, false, import("vue").ComponentOptionsBase<Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, {}, {}, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}>>, vm: import("vue").ComponentPublicInstance<Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, {}, {}, import("vue").MethodOptions, {}, Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, false, import("vue").ComponentOptionsBase<Readonly<{
        type: string;
        options: Record<string, any>;
        redrawOnUpdate: boolean;
        oneToOneUpdate: boolean;
        animateOnUpdate: boolean;
        deepCopyOnUpdate: boolean;
    } & {}>, {}, {}, {}, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}>>) => unknown) | undefined;
    computed?: {} | undefined;
    methods?: {} | undefined;
    watch?: Record<string, string | import("vue").WatchCallback<any, any> | ({
        handler: string | import("vue").WatchCallback<any, any>;
    } & import("vue").WatchOptions<boolean>) | (string | import("vue").WatchCallback<any, any> | ({
        handler: string | import("vue").WatchCallback<any, any>;
    } & import("vue").WatchOptions<boolean>))[]> | undefined;
    provide?: Function | Record<string, unknown> | undefined;
    inject?: string[] | Record<string | symbol, string | symbol | {
        from?: string | symbol | undefined;
        default?: unknown;
    }> | undefined;
    mixins?: import("vue").ComponentOptionsMixin[] | undefined;
    extends?: import("vue").ComponentOptionsMixin | undefined;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    beforeDestroy?(): void;
    beforeUnmount?(): void;
    destroyed?(): void;
    unmounted?(): void;
    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | undefined;
    delimiters?: [string, string] | undefined;
    __differentiator?: undefined;
    __file?: string | undefined;
    key?: string | number | undefined;
    ref?: string | import("vue").Ref<any> | ((ref: object | null, refs: Record<string, any>) => void) | undefined;
    onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    class?: unknown;
    style?: unknown;
};
export default _default;
