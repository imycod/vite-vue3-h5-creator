import { describe, expect, test, it } from "vitest";

import { config, mount, render, screen } from "@vue/test-utils";

import UIDialog from "../index.vue";
import ElementPlus from "element-plus";

describe("test the dialog", () => {
  it("passing body as slot", () => {
    const viewId = "viewId";
    render(UIDialog, {
      slots: {
        body: `<span id="slotTitle">11</span>`,
      },
      global: {
        plugins: [ElementPlus],
      },
    });
  });
});
