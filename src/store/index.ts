import { createContext, useContext } from "react";

import user from "./user";
import counter from "./counter";
import dashboard from "./dashboard";
import loginStore from "./login.store";

class RootStore {
  //组合
  userStore = user;
  counter = counter;
  dashboardStore = dashboard;
  loginStore = new loginStore();
}

const store = new RootStore();

const context = createContext(store);

export default function useStore() {
  return useContext(context);
}
