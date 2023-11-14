export const collapseSlice = (set) => ({
    collapseSidebar : false,
    collapseHandler : () => set((state) => ({collapseSidebar : !state.collapseSidebar}))
})