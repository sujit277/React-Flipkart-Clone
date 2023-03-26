const initialState = [];
const AddIntoCart = (state = initialState, action) => {
  if (action.type === "AddProduct") {
    return state.concat(action.payload);
  } else if (action.type === "EmptyProduct") {
    state = [];
    return state;
  } else if (action.type === "EmptyProductById") {
    state = state.filter((element) => {
      if (element.id !== action.payload) {
        var result = state;
      }
      return result;
    });
    return state;
  } else {
    return state;
  }
};

export default AddIntoCart;
