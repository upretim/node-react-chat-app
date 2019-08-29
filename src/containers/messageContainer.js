import {connect} from 'react-redux';
import React, {Component} from 'react';
import AddMessageComponent from './../components/addMessage';
import {addMessage} from './../actions/index';
import message from '../components/message';

const mapDispatchToProps = (dispatch)=> ({
    dispatch: (message, author)=>{
        dispatch(addMessage(message,author));
    }
})

export default connect(null,mapDispatchToProps, null )(AddMessageComponent);