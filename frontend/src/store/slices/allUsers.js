
export const allUsersSlice = (set) => ({
	usersData: [],
	updateUser : {},
	setUsersData: (State) => set((store) => ({ usersData: State})),
	setUpdateUserData: (State) => set((store) => ({ updateUser: State})),
	resetUpdateUserData : (State) => set(store => ({updateUser: {}}))
});
    