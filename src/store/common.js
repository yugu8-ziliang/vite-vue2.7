import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    editCommodityData: {},
    addNewrequestData: {},
    addSalesCommodityData: {},
    homePanelList: [],
  }),

  actions: {
    handleEditCommodityData: (state, data) => {
      state.editCommodityData = data;
    },
    handleAddNewrequestData: (state, data) => {
      state.addNewrequestData = data;
    },
    handleAddSalesCommodityData: (state, data) => {
      state.addSalesCommodityData = data;
    },
    handleSetIndexPanelSort: (state, data) => {
      state.indexPanelList = data;
    },
  },
});
