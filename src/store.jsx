import { configureStore } from '@reduxjs/toolkit';
import rootreducer from './combined-reducers';

const store = configureStore({
  reducer: rootreducer
});

export default store;