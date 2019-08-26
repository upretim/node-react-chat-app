import * as Types from './../constants/ActionTypes';
import { types } from '@babel/core';

let nextMessageId = 0, nextUserId=0;

export const addMessage =(message, author)=>{
    return {
        type: Types.ADD_MESSAGE,
        id: nextMessageId++,
        message: message,
        author: author 
    }
}

export const addUser = (name) =>{
    return {
        type:  Types.ADD_USER,
        id: nextUserId++,
        name: name
    }
}

export const messageReceived =(message, author)=>{
    return {
        type:  Types.MESSAGE_RECEIVED,
        id: nextMessageId++,
        message: message,
        author: author 
    }
}

export const populateUsersList = (users)=>{
    return {
        type: Types.USER_LIST,
        users: users

    }
}