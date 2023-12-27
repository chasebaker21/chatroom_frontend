import chatReducer from "./chat/chatReducer";
import {combineReducers, createStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    chat: chatReducer
});

const store = createStore(rootReducer);

export default store;