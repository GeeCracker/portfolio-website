import React from 'react'

const WorkImage = ({ image, mouseX, mouseY, visible, height, width }) => {

    const style = {
        position: 'fixed',
        left: mouseX-(width+200),
        top: mouseY-(height/2),
        height: height,
        width: width,
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        opacity: visible ? 1 : 0,
        boxShadow: '-5px 5px 5px 0px #d9d9d9',
        zIndex: 2,
    };

    return (
        <div style={style} />
    );
};

export default WorkImage;