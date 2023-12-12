/**
 * @description: 监听路由变化，滚动条恢复
 * @param {type} path 哪个页面
 * 触发条件： 视图必须keepAlive,大的视图不能销毁
 */

const useCacheScroll = (path = "") => {
  const route = useRoute();
  const scrollRef = ref<HTMLElement | null>(null);
  let scrollTop = 0;

  // 监听path
  watch(
    () => route.path,
    (val) => {
      // 获取searchListRef的滚动值
      // if (val.includes(path)) {
        nextTick(() => {
          scrollRef.value!.scrollTop = scrollTop;
        });
      // }
    }
  );
  
  // 路由跳转之前的钩子
  onBeforeRouteLeave((to, from, next) => {
    // 获取searchListRef的滚动值
    scrollTop = scrollRef.value!.scrollTop;
    next();
  });

  const toTop = () => {
    scrollRef.value!.scrollTop = 0;
  };

  return {
    scrollRef,
    toTop,
  };
};

export { useCacheScroll };
