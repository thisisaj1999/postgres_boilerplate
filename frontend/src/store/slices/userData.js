export const userSlice = (set) => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: "",
    
    collapseHandler : () => set((state) => ({collapseSidebar : !state.collapseSidebar}))
})