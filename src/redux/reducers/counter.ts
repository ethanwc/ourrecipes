import { Counter, INCREASE_COUNT, DECREASE_COUNT } from "../types/counter";

const initialState: Counter = {
  count: 0
}

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
