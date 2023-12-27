import {ADD_MESSAGE} from './actionTypes';

export const addMessage = (message: any) => ({
    type: ADD_MESSAGE,
    payload: message
});