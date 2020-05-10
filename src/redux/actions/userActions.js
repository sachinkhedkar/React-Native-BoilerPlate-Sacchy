const setUserData = userObj => {
  switch (userObj) {
    case userObj.userName === '':
      return {
        type: 'ERROR_USERNAME',
        payload: userObj,
      };
    case userObj.password === '':
      return {
        type: 'ERROR_PASSWORD',
        payload: userObj,
      };
    default:
      return {
        type: 'SET_USER',
        payload: userObj,
      };
  }
};

const setUser = userObj => async dispatch => {
  try {
    const data = userObj;
    dispatch(setUserData(data));
  } catch (err) {
    console.log('error', err);
  }
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export default {
  setUser,
  logOut,
};
