import { CommonState, TaskProps } from './interface';

const state: CommonState = {
  selectItem: {},
};

const mutations = {
  setSelectItem(states: CommonState, params: TaskProps) {
    states.selectItem = params;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
