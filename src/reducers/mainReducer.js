const mainReducer = (state={}, action) => {
    switch (action.type) {
        case "LOAD_DEFAULT_CHARACTER":
            console.log("Pasa por LOAD_DEFAULT_CHARACTER")
            return Object.assign({}, {...state, character: action.data})

        case "UPDATE_CHARACTER":
            console.log("REDUCER")
            console.log(action.data)
            return Object.assign({}, {...state, character : action.data})

        default:
            return state;
    }
};

export default mainReducer;