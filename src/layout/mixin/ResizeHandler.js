import { useAppStore } from "@/store/app";

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      const appStore = useAppStore();
      if (this.device === "mobile" && !collapse) {
        appStore.closeSideBar();
      }
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    const appStore = useAppStore();
    if (isMobile) {
      appStore.closeSideBar();
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        const appStore = useAppStore();
        appStore.setDevice(isMobile ? "mobile" : "desktop");

        if (isMobile) {
          appStore.closeSideBar();
        }
      }
    },
  },
};
