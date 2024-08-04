import './MovablePoint.css'
import React, {useState, useRef, useEffect} from 'react'
import MovablePointInternal from './MovablePointInternal'

const MovablePoint = ({point_position_x, point_position_y, pointCallBack, axis, bounds='parent', constrain='none', y_is_down=false } ) => {


    // Machinery to store width and height of region
    const [size, setSize] = useState({width:0, height:0})
    const ref = useRef(null)
  
    // Compute width of this component
    useEffect(() => {
        setSize({width:ref.current.offsetParent.clientWidth, height:ref.current.offsetParent.clientHeight})
    })

    return (
        <div className="movable-point-container-internal" ref={ref} >
                <MovablePointInternal point_position_x={point_position_x} point_position_y={point_position_y} pointCallBack={pointCallBack} 
                                                    axis={axis} bounds={bounds} constrain={constrain} y_is_down={y_is_down} parentSize={size}/>

        </div>
    )
}

export default MovablePoint