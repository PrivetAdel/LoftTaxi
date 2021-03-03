const initialState = {
  isLoggedIn: false,
  isLoaded: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload,
        isLoaded: true
      };
    
    default: 
      return state
  };
};