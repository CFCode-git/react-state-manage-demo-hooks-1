const PageBReducer = {
  pageBAdd: (state, action) => {
    return { ...state, BCount: state.BCount + action.payload.num };
  },
  pageBSubtract: (state, action) => {
    return { ...state, BCount: state.BCount - action.payload.num };
  },
};

export default PageBReducer;
