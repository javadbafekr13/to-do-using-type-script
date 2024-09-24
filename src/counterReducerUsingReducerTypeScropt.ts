
import {add} from './counterSampleUsingTs';
import {dec} from './counterSampleUsingTs';
import {decresmentTS,incresmentTs} from "./counterSampleUsingTs";
export default counterReducer;

type CounterState = {
  countForReducer: number;
  count2ForReducer: number;
  };
  
  type CounterAction =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'increment2' }
    | { type: 'decrement2' };
  
    export const initialState: CounterState = {
    countForReducer: 0,
    count2ForReducer: 0,
  };
  
  function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
      case 'increment':
        return { ...state, countForReducer: state.countForReducer + 1 };
      case 'decrement':
        return { ...state, countForReducer: state.countForReducer - 1 };
      case 'increment2':
        return { ...state, count2ForReducer: incresmentTs(state.count2ForReducer) };
      case 'decrement2':
        return { ...state, count2ForReducer: decresmentTS(state.count2ForReducer) };
      default:
        return state;
    }
  }
  