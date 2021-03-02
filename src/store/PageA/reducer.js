const PageAReducer = {
  pageAAdd: (state, action) => {
    return { ...state, ACount: state.ACount + action.payload.num };
  },
  pageASubtract: (state, action) => {
    return { ...state, ACount: state.ACount - action.payload.num };
  },
};

export default PageAReducer;
