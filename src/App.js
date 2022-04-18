import './App.css'
import Hero from './components/hero/Hero'

const heroes = [
	{
		nameHero: 'Hulk',
		heroPower:
			'Суперсила,Суперскорость,Неуязвимость и исцеляющий фактор,Бессмертие итд',
		urlHero:
			'https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg',
		textHero:
			'Халк (англ. Hulk), настоящее имя доктор Ро́берт Брюс Бе́ннер (англ. Dr. Robert Bruce Banner) — супергерой комиксов издательства Marvel Comics  Халк был создан Стэном Ли и Джеком Кирби, он впервые появился в комиксе «Невероятный Халк» #1 (май 1962 года). С тех пор он стал одним из самых узнаваемых персонажей.',
	},
	{
		nameHero: 'Spider-Man',
		heroPower:
			'Интелект,Суперсила,Суперскорость,  исцеляющий фактор,Паутина итд',
		urlHero:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/600x900',
		textHero:
			'Челове́к-пау́к (англ. Spider-Man), настоящее имя Пи́тер Па́ркер (англ. Peter Parker) — супергерой, появляющийся в комиксах издательства Marvel Comics, созданный Стэном Ли и Стивом Дитко. С момента своего первого появления на страницах комикса Amazing Fantasy № 15 (рус. Удивительная фантазия, август 1962) он стал одним из самых популярных супергероев. ',
	},
	{
		nameHero: 'Doctor-Strange',
		heroPower: 'Интеллект,Магия,одарённый хирург,  итд',
		urlHero:
			'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/3e1144b7157b89b9bd34f408e609be4e/960x540',
		textHero:
			'Доктор Стивен Винсент Стрэндж (англ. Dr. Stephen Vincent Strange, более известный как Доктор Стрэндж (англ. Doctor Strange)) — супергерой, появляющийся в американских комиксах издательства Marvel Comics. Доктор Стрэндж исполняет обязанности Верховного мага Земли и является главным защитником Земли от магических и мистических угроз.   ',
	},
]
function App() {
	return (
		<div className='App'>
			<Hero data={heroes} />
		</div>
	)
}

export default App
