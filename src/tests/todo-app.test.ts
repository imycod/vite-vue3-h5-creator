import { describe, expect, test, it } from "vitest";

import { mount } from "@vue/test-utils";

import TodoApp from "@/views/todo-app/index.vue";

describe("todo-app.vue", () => {
  test("renders a todo", () => {
    const wrapper = mount(TodoApp);

    const todo = wrapper.get('[data-test="todo"]');

    expect(todo.text()).toBe("Learn Vue.js 3");
  });

  test("creates a todo", async () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  test("完成代办事项", async () => {
    const wrapper = mount(TodoApp);

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed');
  });
});


