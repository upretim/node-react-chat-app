import * as types from './../constants/ActionTypes';
const initialState = [];
const messages = (state =initialState, action)=>{
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat({
                id: action.id,
                author: action.author,
                message: action.message
            });   
        default:
            return state;
    }
}

export default messages;