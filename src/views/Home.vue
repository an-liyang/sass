<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="m20">
      <YuiButton @click="handleClick()">自定义全局按钮</YuiButton>
    </div>
    <div class="m20">
      <YuiSelect></YuiSelect>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

import { message } from "ant-design-vue";
export default defineComponent({
  name: "ToDoList",
  components: {
    HelloWorld
  },
  setup(prop, ctx) {
    console.log(prop, ctx);
    function handleClick() {
      message.success({
        content: "这是一个全局按钮组件",
        duration: 1
      });
    }

    return {
      handleClick
    };
  }
});
</script>
