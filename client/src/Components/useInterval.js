import React, {useEffect, useRef} from 'react';


// Dictates the interval of refresh of pieces falling
// Delay can be shortened as levels increase
// Using useEffect should help with overall timing and stability

export function useInterval(callback, delay) {

    const callbackRef = useRef();

    useEffect( ()=> {
        callbackRef.current = callback;
    }, [callback]);

    useEffect( ()=> {
        const interval = setInterval(()=> callbackRef.current(), delay);
        return ()=> clearInterval(interval);
    }, [delay]);

}