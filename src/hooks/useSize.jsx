import { useState, useEffect } from 'react';

const useSize = () => {
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleDimension = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleDimension);
        return () => {window.removeEventListener('resize', handleDimension)};
    }, []);
    return dimension;
};

export default useSize;
