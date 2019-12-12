const initialState = {
    title: 'Car Features',
    editing: false
};

export const featureReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'UPDATE_FEATURES':
            return {
                ...state,
                title: action.payload,
                editing: false
                
            };
        case 'TOGGLE_EDITING':
            return {
                ...state,
                editing: !state.editing
            };
        default:
            return state;
    }
}