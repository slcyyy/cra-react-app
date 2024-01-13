import { createContext, useContext } from "react";

import user from "./user";
import counter from "./counter";

class RootStore {
  //组合
  userStore = user;
  counter = counter;
}

const store = new RootStore();

const context = createContext(store);

export default function useStore() {
  return useContext(context);
}
