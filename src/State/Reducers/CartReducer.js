const initialState = [];
const AddIntoCart = (state = initialState, action) => {
    if (action.type === "AddProduct") {
        console.log(state);
        return state.concat(action.payload);
    }
    else if (action.type === "EmptyProduct") {
        state = [];
        return state;
    }
    else if (action.type === "EmptyProductById") {
        /* console.log(state);
        console.log(state[0].id);
        console.log(action.payload); */

        state = state.filter((element) => {
            if (element.id !== action.payload) {
                var result = state;
            }
            return result;
        })
        return state;
    }
    else {
        return state;
    }
}

export default AddIntoCart;