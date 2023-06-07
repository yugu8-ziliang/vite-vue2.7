import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", {
  state: () => ({
    visitedViews: [],
    cachedViews: [],
  }),

  actions: {
    setVisitedViews(views) {
      this.visitedViews = views;
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        })
      );
    },
    delVisitedView(view) {
      const { path } = view;
      this.visitedViews = this.visitedViews.filter(
        (view) => view.path === path
      );
      //   for (const [i, v] of this.visitedViews.entries()) {
      //     if (v.path === view.path) {
      //       this.visitedViews.splice(i, 1);
      //       break;
      //     }
      //   }
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        this.cachedViews.push(view.name);
      }
    },
    delCachedView(view) {
      const index = state.cachedViews.indexOf(view.name);
      if (index > -1) state.cachedViews.splice(index, 1);
    },
    addView(view) {
      this.addVisitedView(view);
      this.addCachedView(view);
    },
    delOthersVisitedViews: (view) => {
      return new Promise((resolve) => {
        this.visitedViews = state.visitedViews.filter(
          (v) => v.meta.affix || v.path === view.path
        );
        resolve([...this.visitedViews]);
      });
    },
    delOthersCachedViews: (view) => {
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(view.name);
        if (index > -1) {
          this.cachedViews = this.cachedViews.slice(index, index + 1);
        } else {
          this.cachedViews = [];
        }
        resolve([...this.cachedViews]);
      });
    },

    delAllVisitedViews: () => {
      // keep affix tags
      const affixTags = this.visitedViews.filter((tag) => tag.meta.affix);
      this.visitedViews = affixTags;
    },

    delAllCachedViews: (state) => {
      this.cachedViews = [];
    },
    delAllViews() {
      return new Promise((resolve) => {
        this.delAllVisitedViews();

        this.delAllCachedViews();
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews],
        });
      });
    },
    updateVisitedView: (view) => {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
  },
});
