import React, { useEffect, useState } from 'react'

function useClock() {
    const [time, setTime] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString()),
        1000
        );
        return () => {
            clearInterval(interval);
        }
    }, []);
    return time;
}

export default useClock
