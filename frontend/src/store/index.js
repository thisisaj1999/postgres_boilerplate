import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { collapseSlice } from "./slices/collapse";
import { allUsersSlice } from "./slices/allUsers";

export const useCollapseStore = create(devtools((state) => collapseSlice(state), {name : "Collapse Store"}))
export const useAllUsersStore = create(devtools((state) => allUsersSlice(state), {name : "All User Store"}))

