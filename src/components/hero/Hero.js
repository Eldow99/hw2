import React from 'react'
import HeroInfo from '../heroInfo/HeroInfo'
import HeroPower from '../heroPower/HeroPower'
import HeroText from '../heroText/HeroText'
import Card from '../ui/Card'
import './Hero.css'
const Hero = (props) => {
	return (
		<div className='heroes'>
			{props.data.map((el, id) => (
				<Card key={id}>
					<HeroInfo name={el.nameHero} url={el.urlHero} />
					<HeroPower power={el.heroPower} />
					<HeroText text={el.textHero} />
				</Card>
			))}
		</div>
	)
}

export default Hero
