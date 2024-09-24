
const timeReducer = (state = { currentTime: new Date().toLocaleTimeString() }, action) => {
    switch (action.type) {
      case 'UPDATE_TIME':
        return {
          ...state,
          currentTime: action.payload
        };
      default:
        return state;
    }
  };
  
  export default timeReducer;
  