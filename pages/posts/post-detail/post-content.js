import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
	slug: 'getting-started-with-nextjs',
	title: 'Getting Started with Nextjs',
	image: 'getting-started-nextjs.png',
	date: '2022-02-10',
	content: '#This is a first post'
}


function PostContent() {
	const { slug, image, title, content } = DUMMY_POST;
	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={imagePath}/>
			{content}
		</article>
	);
}

export default PostContent;