<template>
  <div>
    <!-- <logo :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="new-el-menu--sidebar" :default-active="activeMenu" :collapse="collapse" unique-opened
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="hamburger" @click="toggleSideBar">
      <i :class="collapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"
        style="color: rgba(1, 6, 33, 0.75); font-size: 22px; line-height: 66px"></i>
    </div>
  </div>
</template>

<script>
// import { useAppStore } from "@/store/app";
import { usePermissionStore } from "@/store/permission";
import { mapActions, mapState } from "pinia";
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
import { useAppStore } from "@/store/app";
export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState(usePermissionStore, ["routes"]),
    ...mapState(useAppStore, ["collapse"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  methods: {
    ...mapActions(useAppStore, ["toggleSideBar"]),
  },
};
</script>

<style scoped lang="scss">
.hamburger {
  width: 22px;
  height: 66px;
  background: #ffffff;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
