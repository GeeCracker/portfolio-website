import React from 'react'

const ContactCard = ({ timing = 150, offset }) => {

    const style = {
        position: 'absolute',
        transition: `transform ${timing}ms`,
        backgroundColor: '#FFA5AB',
        height: '100vh',
        width: '100vw',
    };

    return (
        <div style={style}>
            Test
        </div>
    );
};

export default ContactCard;