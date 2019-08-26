import React, {createRef } from 'react';
import PropTypes from 'prop-types';

const addMessage = (props)=> {
    let input;
    const ref = createRef();
        return(
            <section id="new-message">
                <input onKeyPress= { (e)=>{
                    if(e.key==='Enter'){
                        props.dispatch(input.value, 'Manoj');
                        input.value = '';

                    }
                }
                }
                type="text"
                ref = {
                    (node)=>{
                    input = node;
                    }
                }
                
                />
            </section>
        )
}
addMessage.propTypes  = {
    dispatch: PropTypes.func.isRequired
}

export default addMessage;