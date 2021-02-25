import React from 'react'

const Boop = ({ timing = 150, image, hoverimg }) => {

    const [isBooped, setIsBooped] = React.useState(false);

    const style = {
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
            ? `translate(0px, 0px)`
            : `translate(0px, 30px)`,
        transition: `transform ${timing}ms`,
        backgroundColor: 'transparent',
        height: '40vh',
        borderWidth: 1,
    };

    React.useEffect(() => {

        if (!isBooped) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped, timing]);

    const trigger = () => {
        setIsBooped(true);
    };

    return (
        <div onMouseEnter={trigger} style={style}>
            { isBooped ? 
                <img src={hoverimg} alt="nav icon"/> : 
                <img src={image} alt="nav icon" /> 
            }
        </div>
    );
};

export default Boop;