import {ADD_MESSAGE} from "../actions/actionTypes";

const initialState = {
    messages: []
};

const chatReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        default:
            return state;
    }
};

export default chatReducer;