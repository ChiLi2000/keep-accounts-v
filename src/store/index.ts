import Vue from "vue";
import Vuex from "vuex";
import createId from "@/lib/createId";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tagList: [],
    createTagError: null
  } as RootState,
  mutations: {
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      );
      store.commit("createTag", {name: "餐饮 ", value: "餐饮"});
      store.commit("createTag", {name: "购物", value: "购物"});
      store.commit("createTag", {name: "服饰美容", value: "服饰美容"});
      store.commit("createTag", {name: "交通 ", value: "交通"});
      store.commit("createTag", {name: "住房缴费", value: "住房缴费"});
      store.commit("createTag", {name: "生活服务", value: "生活服务"});
      store.commit("createTag", {name: "学习", value: "学习"});
      store.commit("createTag", {name: "娱乐 ", value: "娱乐"});
      store.commit("createTag", {name: "运动", value: "运动"});
      store.commit("createTag", {name: "旅游", value: "旅游"});
      store.commit("createTag", {name: "酒店", value: "酒店"});
      store.commit("createTag", {name: "医疗 ", value: "医疗"});
      store.commit("createTag", {name: "宠物", value: "宠物"});
      store.commit("createTag", {name: "人情", value: "人情"});
      store.commit("createTag", {name: "红包", value: "红包"});
      store.commit("createTag", {name: "转账", value: "转账"});
      store.commit("createTag", {name: "其它", value: "其它"});
    },

    createTag(state, payload: { name: string; value: string }) {
      const {name, value} = payload;
      state.createTagError = null;
      const names = state.tagList.map((item) => item.name);
      if (!name) {
        state.createTagError = new Error("tag name null");
        return;
      } else if (name.length > 4) {
        state.createTagError = new Error("tag name lengthOver");
        return;
      } else if (names.indexOf(name) >= 0) {
        state.createTagError = new Error("tag name duplicated");
        return;
      }
      state.tagList.push({id: createId(), genre: "-", name, value});
      store.commit("saveTags");
    },


    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    }
  },
});

export default store;
