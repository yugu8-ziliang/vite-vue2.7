<template>
  <div id="tags-view-container" class="tags-view-container" :style="collapse ? 'width: calc(100% - 39px);margin: 15px -8px 0 1.5px;' : ''
    ">
    <div class="leftIcon" @click="leftIcon()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <scroll-pane ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
      <router-link v-for="tag in visitedViews" ref="tag" :key="tag.path" :to="{
        path: tag.path,
        query: tag.query,
        fullPath: tag.fullPath,
      }" :class="isActive(tag) ? 'active' : ''" class="tags-view-item"
        @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent.native="openMenu(tag, $event)">
        {{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <div class="rightIcon" @click="rightIcon()">
      <i class="el-icon-arrow-right"></i>
    </div>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭
      </li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from "./ScrollPane.vue";
import path from "path";
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/app";
import { useTabStore } from "@/store/tab";
import { usePermissionStore } from "@/store/permission";
export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [],
    };
  },
  computed: {
    ...mapState(useAppStore, ["collapse"]),
    ...mapState(useTabStore, ["visitedViews"]),
    ...mapState(usePermissionStore, ["routes"]),
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
    this.beforeUnload();
  },
  methods: {
    ...mapActions(useTabStore, [
      "addView",
      "addVisitedView",
      "updateVisitedView",
      "delCachedView",
      "delView",
      "delOthersViews",
      "delAllViews",
    ]),
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes));
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.addVisitedView(tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.addView(this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.updateVisitedView(this.$route);
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      this.delCachedView(view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + fullPath,
          });
        });
      });
    },
    closeSelectedTag(view) {
      this.delView(view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view);
        }
      });
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      this.delOthersViews(this.selectedTag).then(() => {
        this.moveToCurrentTag();
      });
    },
    closeAllTags(view) {
      this.delAllViews().then(({ visitedViews }) => {
        if (this.affixTags.some((tag) => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView.fullPath);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "Dashboard") {
          // to reload home page
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetWidth = this.$el.offsetWidth; // container width
      const maxLeft = offsetWidth - menuMinWidth; // left boundary
      const left = e.clientX - offsetLeft + 15; // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }

      this.top = e.clientY;
      this.visible = true;
      this.selectedTag = tag;
    },
    leftIcon() {
      let viewList = this.visitedViews;
      if (viewList.length > 0) {
        let index = 0;
        viewList.forEach((el, i) => {
          if (el.path == this.$route.path) {
            index = i;
          }
        });
        if (index != 0) {
          let params = viewList[index - 1];
          this.$router.push({ path: params.fullPath });
        }
      }
    },
    rightIcon() {
      let viewList = this.visitedViews;
      if (viewList.length > 0) {
        let index = 0;
        viewList.forEach((el, i) => {
          if (el.path == this.$route.path) {
            index = i;
          }
        });

        if (index + 1 != viewList.length) {
          let params = viewList[index + 1];
          this.$router.push({ path: params.fullPath });
        }
      }
    },
    closeMenu() {
      this.visible = false;
    },
    handleScroll() {
      this.closeMenu();
    },
    beforeUnload() {
      // 监听页面刷新
      window.addEventListener("beforeunload", () => {
        // visitedViews数据结构太复杂无法直接JSON.stringify处理，先转换需要的数据
        let tabViews = this.visitedViews.map((item) => {
          return {
            fullPath: item.fullPath,
            hash: item.hash,
            meta: { ...item.meta },
            name: item.name,
            params: { ...item.params },
            path: item.path,
            query: { ...item.query },
            title: item.title,
          };
        });
        sessionStorage.setItem("tabViews", JSON.stringify(tabViews));
      });
      // 页面初始化加载判断缓存中是否有数据
      let oldViews = JSON.parse(sessionStorage.getItem("tabViews")) || [];
      if (oldViews.length > 0) {
        // this.visitedViews = oldViews;
        const tabStore = useTabStore();
        tabStore.setVisitedViews(oldViews);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 32px;
  width: calc(100% - 17px);
  background: #fff;
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  margin: 20px 24px 0 2px;

  display: flex;
  align-items: center;

  .leftIcon,
  .rightIcon {
    padding: 9px 5px 6px;
    color: #000000;
    font-size: 20px;
    cursor: pointer;

    &.active,
    &:hover {
      color: var(--color-primary);
    }
  }

  .tags-view-wrapper {
    height: 100%;

    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      color: rgba(1, 6, 33, 0.9);
      background: #fff;
      padding: 0 12px;
      font-size: 13px;
      margin-left: 2px;
      margin-right: 2px;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.15);
      border-radius: 2px;
      box-sizing: border-box;

      //   &::after {
      //     position: absolute;
      //     bottom: 0;
      //     left: 0;
      //     width: 0;
      //     height: 2px;
      //     content: "";
      //     background-color: var(--default-color);
      //     transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
      //       color 0.1s, font-size 0s;
      //   }
      &.active,
      &:hover {
        // background-color: var(--default-shallow-color);
        color: var(--color-primary);
        border-color: currentColor;

        &::after {
          width: 100%;
        }

        .el-icon-close {
          width: 16px;
        }
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      vertical-align: 2px;
      transform: scale(0.9);

      //   overflow: hidden;
      &:before {
        transform: scale(0.9);
        display: inline-block;
        vertical-align: -2px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
