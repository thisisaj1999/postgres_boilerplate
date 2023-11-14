import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { collapseSlice } from "./slices/collapse";

export const useCollapseStore = create(devtools((state) => collapseSlice(state), {name : "Collapse Store"}))

