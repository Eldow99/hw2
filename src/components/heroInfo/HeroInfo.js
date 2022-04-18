import React from 'react'
import './HeroInfo.css'
const HeroInfo = (props) => {
	console.log(props)
	return (
		<div>
			<h2>{props.name}</h2>
			<img src={props.url} />
		</div>
	)
}

export default HeroInfo
