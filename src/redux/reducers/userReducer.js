
const userReducer = (state = { userData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, userData: action.data, loading: false, errors: null };
    case 'LOGOUT':
      localStorage.clear();

      return { ...state, userData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default userReducer;