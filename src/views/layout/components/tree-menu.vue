<template>
  <div>
    <template v-for="(m, i) in data">
      <el-submenu :index="m.id"
                  :key="i"
                  v-if="m.type === '0'">
        <template slot="title">
          <i :class="m.icon"></i>
          <span slot="title">{{ m.menuName }}</span>
        </template>
        <tree-menu :data="m.childList"> </tree-menu>
      </el-submenu>
      <el-menu-item :index="m.path"
                    :key="i"
                    v-else-if="m.type === '1'">
        <i :class="m.icon"></i>
        <span slot="title"> {{
        m.menuName
      }}</span></el-menu-item>
    </template>
  </div>
</template>
<style lang="scss">
/*隐藏文字*/
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>

<script>
export default {
  props: ["data"],
  name: "treeMenu",
  data () {
    return {};
  },
  created () { },
};
</script>
