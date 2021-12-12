import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../common/reducerTypes";

const sidebarReaducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};

export default sidebarReaducer;
