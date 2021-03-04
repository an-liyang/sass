<template>
  <div class="layout">
    <!-- 页面lay布局 -->
    <a-layout style="height:100%">
      <!-- 头部 -->
      <header>
        <a-layout-header>
          <v-headerTop></v-headerTop>
        </a-layout-header>
      </header>
      <a-layout>
        <!-- 导航 -->
        <nav>
          <a-layout-sider class="tl">
            <v-leftnavbar></v-leftnavbar>
          </a-layout-sider>
        </nav>
        <!-- 内容区 -->
        <a-layout-content class="pd20 tl">
          <router-view />
          <!-- <div class="tc ">
            Copyright © 2004-2030 EP Inc, All Rights Reserved.
            北京比特易湃信息技术有限公司 版权所有
          </div> -->
          <!-- 底部 -->
          <!-- <footer>
            <a-layout-footer>
              
            </a-layout-footer>
          </footer> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import leftnavbar from "./leftnavbar";
import headerTop from "./headerTop";

export default {
  name: "layout",
  components: {
    "v-leftnavbar": leftnavbar,
    "v-headerTop": headerTop
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plr50 {
  margin: $w20 50px;
  border: 1px solid $border;
}
.layout {
  min-width: 800px;
  height: inherit;
}
</style>
<style lang="scss">
.layout {
  .ant-layout-sider {
    height: 100%;
  }
  .leftnavbar {
    height: 100%;
    ul {
      height: 100%;
    }
  }
}
</style>
