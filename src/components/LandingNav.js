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
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '20vw',
        height: '40vh',
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
        </div>
    );
};

export default Boop;