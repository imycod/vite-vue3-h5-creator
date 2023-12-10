/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import notification from "@/uicomponents/notification/index.vue";
import { describe, expect, test, it } from "vitest";

describe("notification.vue", () => {
  test("renders the correct style for error", () => {
    const wrapper = mount(notification, {
      props: {
        type: "error",
        message: "Error message",
      },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });

  it("renders the correct style for success", () => {
    const wrapper = mount(notification, {
      props: {
        type: "success",
        message: "success message",
      },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--success"])
    );
  });

  it("renders the correct style for info", () => {
    const wrapper = mount(notification, {
      props: {
        type: "info",
        message: "info message",
      },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--info"])
    );
  });

  test("slides down when message is not empty", () => {
    const message = "success";
    const wrapper = mount(notification, {
      props: { message },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--slide"])
    );
  });

  test("slides down when message is empty", () => {
    const message = "";
    const wrapper = mount(notification, {
      props: { message },
    });
    expect(wrapper.classes("notification--slide")).toBe(false);
  });

  it("当按钮被点击时", async () => {
    const wrapper = mount(notification, {
      props: {
        message: "success",
      },
      //   data() {
      //     return {
      //       clicked: false,
      //     };
      //   },
    });
    const closeButton = wrapper.find("button");
    await closeButton.trigger("click");
    // https://test-utils.vuejs.org/api/#emitted
    expect(wrapper.emitted()).toHaveProperty("clear-notification");
  });

  it("当message不是空时是否能渲染正确", () => {
    const message = "success";
    const wrapper = mount(notification, {
      props: {
        message,
      },
    });
    expect(wrapper.find("p").text()).toBe(message);
  });
});
