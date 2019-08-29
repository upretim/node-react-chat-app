import React, {createRef } from 'react';
import PropTypes from 'prop-types';

const addMessage = (props)=> {
    let input;
    
    const handleKeyPress = (e)=>{
        console.log(' key code is ', e.keyCode +' key is ', e.key)
        if(e.key==="Enter"){
            console.log(' key code is ', e.keyCode +' key is ', e.key)
            props.dispatch(input.value, 'Manoj');
            input.value = '';

        }
    }
    const ref = createRef();
        return(
            <section id="new-message">
                <input onKeyPress= { handleKeyPress}
                type="text"
                ref = { (node)=> {input = node;} }               
                />
            </section>
        )
}
addMessage.propTypes  = {
    dispatch: PropTypes.func.isRequired
}

export default addMessage;