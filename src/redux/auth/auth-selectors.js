// const getIsAuthenticated = state => Boolean(state.auth.token);
const getIsAuthenticated = state => state.auth.token

const getUsermail = state => state.auth.user.email;

 const authSelectors = {
  getIsAuthenticated,
  getUsermail,
};

export default authSelectors;