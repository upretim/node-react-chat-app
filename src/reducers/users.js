import * as types from './../constants/ActionTypes';
const initialState = [];
const users = (state =initialState, action)=>{
    switch (action.type) {
        case types.USER_LIST:
            return action.users  
        case types.ADD_USER:
            return state.concat({
                name: action.name,
                id: action.id
            });
        default:
            return state;
    }
}

export default users;