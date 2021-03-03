<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="m20">
      <YuiButton @click="handleClick()">自定义全局按钮</YuiButton>
    </div>
    <div class="m20">
      <YuiButton @click="getShiList()">ToDoList</YuiButton>
    </div>
    <div class="m20">
      <YuiSelect></YuiSelect>
    </div>
  </div>
</template>

<script lang="ts">
import instance from "@/api/index";
import { defineComponent, reactive, toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "ToDoList",
  components: {
    HelloWorld
  },
  setup(prop, ctx) {
    console.log(prop, ctx);
    const { push } = useRouter();
    function handleClick() {
      message.success({
        content: "这是一个全局按钮组件",
        duration: 1
      });
    }
    // 响应式变量
    const data = reactive({
      formInline: {
        sqlDateEsType: "beta",
        sqlContext: "",
        sqlRoundType: undefined,
        dateBaseName: undefined,
        tableName: undefined,
        limite: 100
      }
    });
    // 获取实例
    const getShiList = () => {
      instance.getSqlIp(data.formInline).then(res => {
        console.log(res);
        if (res.status) {
          message.success({
            content: res.data.msg,
            duration: 1
          });
        } else {
          message.warning(res.origin.msg);
        }
      });
    };
    function handlList() {
      push("/todoList");
    }

    return {
      handleClick,
      handlList,
      getShiList,
      ...toRefs(data)
    };
  }
});
</script>
