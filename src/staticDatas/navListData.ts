// 图标list [PieChartOutlined,SearchOutlined]< />
// 侧边导航
const navList = [
  {
    label: "总览",
    value: 0,
    url: "/",
    icons: "PieChartOutlined",
    children: null
  },
  {
    label: "关于",
    value: 1,
    icons: "SearchOutlined",
    children: [
      {
        label: "关于我们",
        value: 1.1,
        url: "/about"
      }
    ]
  },
  {
    label: "模块",
    value: 2,
    icons: "SearchOutlined",
    children: [
      {
        label: "TODOList",
        value: 2.1,
        url: "/todoList"
      }
    ]
  }
];
// 头部导航
const topNavList = [
  { label: "总览", value: 0, url: "/" },
  {
    label: "关于",
    value: 1,
    children: [
      {
        label: "关于我们",
        value: 1.1,
        url: "/about"
      }
    ]
  }
];
export { navList, topNavList };
