<template>
  <el-aside width="auto">
    <el-menu :router="true"
             class="el-menu-vertical"
             background-color=" rgb(48, 56, 86)"
             text-color="#fff"
             active-text-color="#ffd046"
             :collapse="isCollapse">
      <tree-menu :data="menuList"></tree-menu>
    </el-menu>
  </el-aside>
</template>
<script>
import treeMenu from "@/views/layout/components/tree-menu.vue";

export default {
  components: {
    treeMenu,
  },
  computed: {
    menuList () {

      return this.$store.state.dynamicRoutes;
    }
  },
  props: ['isCollapse'],
  data () {
    return {
      // menuList: [
      //   {
      //     id: "1",
      //     menuName: "首页",
      //     icon: "el-icon-platform-eleme",
      //     type: "1",
      //     path: "/home",
      //   },
      //   {
      //     id: "2",
      //     menuName: "系统管理",
      //     icon: "el-icon-s-tools",
      //     type: "0",
      //     childList: [
      //       {
      //         id: "3",
      //         menuName: "用户管理",
      //         icon: "el-icon-user-solid",
      //         type: "1",
      //         path: "/system/user",
      //       },
      //       {
      //         id: "4",
      //         menuName: "角色管理",
      //         icon: "el-icon-s-custom",
      //         type: "1",
      //         path: "/system/role",
      //       },
      //       {
      //         id: "5",
      //         menuName: "菜单管理",
      //         icon: "el-icon-s-custom",
      //         type: "1",
      //         path: "/system/menu",
      //       },
      //     ],
      //   },
      // ],
    }
  }

}
</script>