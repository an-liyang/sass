<template>
  <div class="headerTop">
    <a-row type="flex">
      <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="titles">
        <!-- <img
          alt="logo"
          src="https://2x.antdv.com/logo.svg?42c11bfdd0f3e3c36e0f89a94769e2f7"
          height="32"
        /> -->
        车后业务统一管理平台
      </a-col>
      <a-col :xs="0" :sm="0" :md="12" :lg="16" :xl="16" class="tr">
        您好，system
      </a-col>
    </a-row>
  </div>
</template>
<script>
// import { SearchOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  name: "headerTop",
  components: {
    // SearchOutlined
  },
  data() {
    return {
      searchData: "" //搜索内容
    };
  },
  setup() {
    // 数据
    const data = reactive({
      current: ["mail"]
    });
    // 路由跳转

    return {
      ...toRefs(data)
    };
  },
  methods: {
    onSearch() {
      console.log(111);
    }
  }
};
</script>
<style lang="scss">
.ant-layout-header {
  padding: 0 $w20;
}
</style>
<style scoped lang="scss">
.headerTop {
  color: $white;
  .titles {
    text-align: left;

    font-size: $max-size;
  }
}
</style>
