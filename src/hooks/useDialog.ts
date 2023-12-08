import { ref, reactive } from "vue";

export default function useDialog() {
  const state = reactive({
    visible: false,
    title: "",
  });
  const close = () => {
    setState({
      visible: false,
      title: "",
    });
  };
  const setState = (newState) => {
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
  };
  return {
    state,
    close,
    setState,
  };
}
