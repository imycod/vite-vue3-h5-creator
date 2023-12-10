import { createApp } from "vue";
import Notification from "@/uicomponents/notification/index.vue";

function createNotification(options: any) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp(Notification, options);
  const vm = app.mount(div);

  // console.log("vm---", vm);
  // const notification = vm.$children[0];
  // return {
  //   notification,
  //   destroy() {
  //     vm.$destroy();
  //     document.body.removeChild(div);
  //   },
  // };
}

function createSuccess(options: any) {
  return createNotification({
    ...options,
    type: "success",
  });
}

export default function useNotice() {
  return {
    success: createSuccess,
  };
}
