import React from 'react';
import PropTypes from 'prop-types';


const message =({message, author}) => {
        return(
            <p><i>{author} </i> {message}</p>
        )
}

message.propTypes  = {
    dispatch: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default message;
