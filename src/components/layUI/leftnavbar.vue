/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
  <div class="leftnavbar">
    <!-- <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <SearchOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button> -->
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <a-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span><a-icon type="appstore" /><span>Navigation Three</span></span>
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span><a-icon type="setting" /><span>Navigation Four</span></span>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
// import { SearchOutlined, PieChartOutlined } from "@ant-design/icons-vue";

import { navList } from "@/staticDatas/navListData.ts";
import { toRefs, reactive, getCurrentInstance } from "vue";
export default {
  name: "leftnavbar",
  // components: {
  //   SearchOutlined,
  //   PieChartOutlined
  // },
  setup() {
    // console.log(pros, context);
    // console.log(navList);
    const { ctx } = getCurrentInstance();
    function chagePage({ key }) {
      // ctx.$message.success({
      //   content: "请求成功"
      // });
      ctx.$router.push(key);
    }
    // 响应式变量集合
    const data = reactive({
      collapsed: false
    });
    return {
      ...toRefs(data),
      chagePage
    };
  },
  data() {
    return {
      list: navList,
      rootSubmenuKeys: navList,
      openKeys: ["/home"],
      current: 1,
      preOpenKeys: [1]
    };
  },

  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal;
    }
  },
  created() {
    // this.$router.push("/Introduction");
  },
  methods: {
    onOpenChange(openKeys) {
      console.log(openKeys);
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      for (const item of this.rootSubmenuKeys) {
        if (item.url == latestOpenKey) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      }
    },
    handleClick(e) {
      console.log("click ", e);
      this.current = e.key;
    }
  }
};
</script>
<style scoped lang="scss">
.leftnavbar {
  // width: 265px;
  // max-width: 400px;
}
</style>
