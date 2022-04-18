import React from 'react'
import './HeroPower.css'
const HeroPower = (props) => {
	return (
		<div className='power'>
			<h3>Способности: </h3>
			{props.power}
		</div>
	)
}

export default HeroPower
