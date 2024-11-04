
export const TodoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Send Todo':
            return [...initialState, action.payload];
    
        default:
            return initialState;
    }
}
