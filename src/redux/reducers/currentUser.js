const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR_USERNAME':
      return {
        ...state,
        user: {},
        loggedIn: false,
        erorrMessage: 'User Name Should not be blank',
      };
    case 'ERROR_PASSWORD':
      return {
        ...state,
        user: {},
        loggedIn: false,
        erorrMessage: 'Password Should not be blank',
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        erorrMessage: '',
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
        erorrMessage: '',
      };
    default:
      return state;
  }
};

export default currentUser;
