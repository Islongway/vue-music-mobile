import type { Commit } from 'vuex'

interface testState {
  test: string,
  testId: string
}

// 复制编辑器提示的类型推导
export interface testInterface {
  state: testState;
  getters: {
    testId: (state: testState) => string;
  };
  mutations: {
    SETtest(state: testState, test: string): void;
  };
  actions: {
    gettest({ commit }: {
      commit: Commit;
    }): Promise<void>;
  }
}

const rettest: testInterface = {
  state: {
    test: "test1111",
    testId: "2222"
  } as testState,
  getters: {
    testId: (state: testState): string => {
      return state.testId
    }
  },
  mutations: {
    SETtest(state: testState, test: string): void {
      state.test = test
    }
  },
  actions: {
    async gettest({ commit }: { commit: Commit }): Promise<void> {
      commit('SETtest', 'test22')
    }
  }
}

export default rettest