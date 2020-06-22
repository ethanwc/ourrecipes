export interface asdf {
  count: number;
}

const counter = (state: asdf = {count: 0}, action: any) => {
  switch (action.type) {
    case 'INCREASE_VOTE':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_VOTE':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
