// 自定义验证器hook
export function useValidator() {
  // 验证器
  const apprasiveValidate = (rule, value) => {
    // 全部为0则为0，有一个为1则为1
    let flag = true;
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (value[key] != 0) {
        flag = true;
        break;
      }
      flag = false;
    }
    if (!flag) {
      return Promise.reject(rule.message);
    }
    return Promise.resolve();
  };
  const optionValidate = (rule, value) => {
    console.log(rule);
    if (value == "") {
      return Promise.reject(rule.message);
    }
    return Promise.resolve();
  };

  return {
    apprasiveValidate,
    optionValidate,
  };
}

// 亮点标签
export function useDynamicTag() {
  const inputValue = ref("");
  const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
  const inputVisible = ref(false);
  const InputRef = ref();

  const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
  };

  const showInput = () => {
    inputVisible.value = true;
    nextTick(() => {
      InputRef.value!.input!.focus();
    });
  };

  const handleInputConfirm = () => {
    if (inputValue.value) {
      dynamicTags.value.push(inputValue.value);
    }
    inputVisible.value = false;
    inputValue.value = "";
  };

  return {
    inputValue,
    dynamicTags,
    inputVisible,
    InputRef,
    handleClose,
    showInput,
    handleInputConfirm,
  };
}

export default function ({ wrapper, coreFormRef }) {
  function handleClose() {
    wrapper.close();
    alert(1)
  }
  function handleAddFinalEva() {
    coreFormRef.value.setState({
      isAddFinalEva: true,
    });
    // wrapper.close();
  }
  function handleExport() {
    wrapper.close();
  }

  return {
    handleClose,
    handleAddFinalEva,
    handleExport,
  };
}
