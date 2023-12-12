
import { mount,createLocalVue } from "@vue/test-utils";

import middleware from "@/views/business3/middleware.vue";

import { describe, expect, test, it } from "vitest";

describe("middleware.vue", () => {
  test("内容是否渲染正确", () => {
    const wrapper = mount(middleware, {
      props: {
      },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });
})
