
export const updateTime = () => {
    return {
      type: 'UPDATE_TIME',
      payload: new Date().toLocaleTimeString()
    };
  };
  