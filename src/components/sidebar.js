import React from 'react';
import PropTypes from 'prop-types';

const sidebar = ({users})=> {
        return(
            <aside id="sidebar" className="sidebar">
                <ul>
                    {
                     users.map((user)=>{
                      return <li key={user.id}>{user.name}</li>
                     })
                    }
                </ul>

            </aside>
        )
}

sidebar.propTypes  = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default sidebar;