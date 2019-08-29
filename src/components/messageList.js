import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';


const messageList =({messages}) => {
        return(
           <section id="messages-list">
               <ul>
                    {
                        messages.map(message=>{
                           return<li> <Message key={message.id} {...message}/> </li> 
                        })
                    }
               </ul>
           </section>
        )
}

messageList.propTypes  = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired

        })
    )
}

export default messageList;
