import React, { useEffect, useRef } from 'react'

export default function OutClick({children, onOutClick}) {
    const wrapperRef = useRef(null);
    useEffect(() => {
        const handleClick = (e) => {
            const {target} = e;
        
            if (!wrapperRef.current.contains(target) && !document.getElementById("__filestack-picker") && onOutClick) {
                onOutClick();
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])
    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    )
}
