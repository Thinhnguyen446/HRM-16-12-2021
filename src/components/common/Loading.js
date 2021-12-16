import React from 'react'
import {Spinner} from "react-bootstrap"

function Loading(style,
    variant = "primary",
    size = "sm",
    animation = "border", ) {
    return (
      < Spinner
            variant={variant}
            animation={animation}
            size={size}
        /> 
    ) 
}

export default Loading;
