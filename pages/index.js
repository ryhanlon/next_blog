import {Fragment} from "react";

import Hero from '../components/home-page/hero';
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
		{
			slug: 'getting-started-with-nextjs',
			title: 'Getting Started with Nextjs',
			image: 'getting-started-nextjs.png',
			excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
			data: '2022-02-10'
		},
			{
			slug: 'getting-started-with-nextjs2',
			title: 'Getting Started with Nextjs2',
			image: 'getting-started-nextjs.png',
			excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
			data: '2022-02-10'
		},
			{
			slug: 'getting-started-with-nextjs3',
			title: 'Getting Started with Nextjs3',
			image: 'getting-started-nextjs.png',
			excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
			data: '2022-02-10'
		},
			{
			slug: 'getting-started-with-nextjs4',
			title: 'Getting Started with Nextjs4',
			image: 'getting-started-nextjs.png',
			excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
			data: '2022-02-10'
		},
	];

function HomePage() {
	return (
		<Fragment>
			<Hero/>
			<FeaturedPosts posts={DUMMY_POSTS}/>
		</Fragment>
	);
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Posts