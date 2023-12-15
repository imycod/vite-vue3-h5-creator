import { defineStore } from "pinia";

export const useCommon = defineStore("common", {
  state: () => ({
    // 部门树
    deptList: [],
  }),
  getters: {
    getDeptList: (state) => state.deptList,
  },
  actions: {
    setDeptList(dept) {
      this.deptList = dept;
    },
  },
});
