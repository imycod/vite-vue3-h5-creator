export default function useDrawer() {
  const state = reactive({
    visible: false,
    title: "",
  });

  const setState = (newState = {}) => {
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
  };

  const close = () => {
    setState({
      visible: false,
      title: "",
    });
  };
  return {
    state,
    close,
    setState,
  };
}
