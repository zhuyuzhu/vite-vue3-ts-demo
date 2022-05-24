import { App, DirectiveBinding, Events, VNode } from "vue";
const handler = (event: any, binding: DirectiveBinding, vnode: VNode) => {
  if ((event.ctrlKey || event.metaKey) && event.keyCode === 13) {
    binding.value(event);
  }
};
function directive(app: App) {
  app.directive("meta-ctrl-enter", {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value;
    },
  });
  app.directive("meta-ctrl-enter", {
    beforeMount(el, binding, vnode) {
      el.addEventListener("keydown", (event: any) =>
        handler(event, binding, vnode)
      );
    },
    unmounted(el, binding, vnode) {
      el.removeEventListener("keydown", (event: any) =>
        handler(event, binding, vnode)
      );
    },
  });
}

export default {
  install: directive,
};
