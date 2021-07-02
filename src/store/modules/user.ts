/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2021-07-02 14:18:33
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-02 17:42:11
 */
import type { Commit } from 'vuex'
export interface userState {
  user: string,
  userId: string
}

// 复制编辑器提示的类型推导
export interface userInterface {
  state: userState;
  getters: {
    userId: (state: userState) => string;
  };
  mutations: {
    SETUSER(state: userState, user: string): void;
  };
  actions: {
    getUser({ commit }: {
      commit: Commit;
    }): Promise<void>;
  }
}

export default {
  state: {
    user: "vmuisc",
    userId: "110000"
  } as userState,
  getters: {
    userId: (state: userState): string => {
      return state.userId
    }
  },
  mutations: {
    SETUSER(state: userState, user: string): void {
      state.user = user
    }
  },
  actions: {
    async getUser({ commit }: { commit: Commit }): Promise<void> {
      commit('SETUSER', 'vmoile')
    }
  }
} as userInterface