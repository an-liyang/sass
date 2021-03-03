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
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @openChange="onOpenChange"
    >
      <template v-for="item in list" :key="item.url">
        <template v-if="!item.children">
          <a-menu-item :key="item.url" @click="chagePage">
            <component :is="item.icons"></component>
            <span>{{ item.label }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <a-sub-menu :key="item.value">
            <template #title>
              <component :is="item.icons"></component>
              <span>{{ item.label }}</span>
            </template>
            <a-menu-item
              v-for="item2 in item.children"
              :key="item2.url"
              @click="chagePage"
            >
              <span>{{ item2.label }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { SearchOutlined, PieChartOutlined } from "@ant-design/icons-vue";

import { navList } from "@/staticDatas/navListData.ts";
import { toRefs, reactive, getCurrentInstance } from "vue";
export default {
  name: "leftnavbar",
  components: {
    SearchOutlined,
    PieChartOutlined
  },
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
      openKeys: ["/Home"],
      selectedKeys: ["/Home"],
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
    }
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    //   console.log(this.collapsed);

    //   this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    // }
  }
};
</script>
<style scoped lang="scss">
.leftnavbar {
  // width: 265px;
  // max-width: 400px;
}
</style>
