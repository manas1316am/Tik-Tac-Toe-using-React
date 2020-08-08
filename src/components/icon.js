import React from "react";
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';
import { Fade } from 'react-animation-components';
import { Transform, Loop } from 'react-animation-components'

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return (
                <div >
                <Loop in iterations={5.5}>
                <Fade in>
                <FaRegCircle style={{fontSize:"50px"}} className="icons" />
                </Fade>
                </Loop>
                </div>
            )
        case 'cross':
            return (
                <div>
                <Loop in iterations={5.5}>
                <Transform enterTransform="rotate(90deg)" in>
                <FaTimes style={{fontSize:"50px"}} className="icons" />
                </Transform>
                </Loop>
                </div>
            )
        default:
            return (
                <div>
                <FaPen className="icons" />
                </div>
            )

    }
}

export default Icon;