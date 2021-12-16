import React from 'react'
import PropTypes from 'prop-types'
import useClock from '../hooks/useClock'

function Clock(props) {
    const time = useClock();
    return <div>{time}</div>
}

Clock.propTypes = {

}

export default Clock

