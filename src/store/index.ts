import Vue from "vue";
import Vuex from "vuex";
import {createId, createIdR} from "@/lib/createId";
import clone from "@/lib/clone";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tagList: [],
    createTagError: null,
    recordList: [],
    createRecordError: null
  } as RootState,
  mutations: {
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      );
      store.commit("createTag", {genre:"-",name: "餐饮 ", value: "餐饮"});
      store.commit("createTag", {genre:"-",name: "购物", value: "购物"});
      store.commit("createTag", {genre:"-",name: "服饰美容", value: "服饰美容"});
      store.commit("createTag", {genre:"-",name: "交通 ", value: "交通"});
      store.commit("createTag", {genre:"-",name: "住房缴费", value: "住房缴费"});
      store.commit("createTag", {genre:"-",name: "生活服务", value: "生活服务"});
      store.commit("createTag", {genre:"-",name: "学习", value: "学习"});
      store.commit("createTag", {genre:"-",name: "娱乐 ", value: "娱乐"});
      store.commit("createTag", {genre:"-",name: "运动", value: "运动"});
      store.commit("createTag", {genre:"-",name: "旅游", value: "旅游"});
      store.commit("createTag", {genre:"-",name: "酒店", value: "酒店"});
      store.commit("createTag", {genre:"-",name: "医疗 ", value: "医疗"});
      store.commit("createTag", {genre:"-",name: "宠物", value: "宠物"});
      store.commit("createTag", {genre:"-",name: "人情", value: "人情"});
      store.commit("createTag", {genre:"-",name: "红包", value: "红包"});
      store.commit("createTag", {genre:"-",name: "转账", value: "转账"});
      store.commit("createTag", {genre:"-",name: "其它", value: "其它"});
      store.commit("createTag", {genre:"+",name: "退款", value: "退款"});
      store.commit("createTag", {genre:"+",name: "工资 ", value: "工资"});
      store.commit("createTag", {genre:"+",name: "转账", value: "转账"});
      store.commit("createTag", {genre:"+",name: "人情", value: "人情"});
      store.commit("createTag", {genre:"+",name: "其它", value: "其它"});
    },

    createTag(state, payload: { genre: string;name: string; value: string }) {
      const {genre,name, value} = payload;
      state.createTagError = null;
      const names = state.tagList.filter(t => t.genre === genre).map(t => t.name);
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
      state.tagList.push({id: createId(), genre, name, value});
      store.commit("saveTags");
    },

    deleteTag(state, id: number) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit("saveTags");
    },

    updateTag(state, payload: { id: number; name: string }) {
      const {id, name} = payload;
      state.createTagError = null;
      const idList = state.tagList.map((item => item.id));
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (!name) {
          state.createTagError = new Error("tag name null");
          return;
        } else if (names.indexOf(name) >= 0) {
          state.createTagError = new Error("tag name duplicated");
          return;
        } else {
          const tag = state.tagList.filter((item => item.id === id))[0];
          tag.name = name;
          store.commit("saveTags");
        }
      }
    },

    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },

    fetchRecord(state){
      state.recordList = JSON.parse(window.localStorage.getItem("recordList") || "[]") as RecordItem[];
    },

    saveRecord(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));
    },

    createRecord(state, newRecord: newRecordItem) {
      const record = {...newRecord, idR: createIdR()};
      const cloneRecord = clone(record);
      state.recordList.push(cloneRecord);
      store.commit("saveRecord");

    },

  },
});

export default store;
