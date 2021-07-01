import Image from 'next/image';

import classes from './hero.module.css';

function Hero(props) {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src="/images/site/becca.png" alt='An image of Rebecca.' width={300} height={300}/>
			</div>
			<h1>Hi, I'm Rebecca.</h1>
			<p>
				I blog about web and mobile app development, writing stories and songs, and teaching English.
			</p>
		</section>
	);
}

export default Hero;