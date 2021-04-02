export const getIsAuth = (state) => state.auth.isAuth

export const getUserData = (state) => ({email: state.auth.email})
