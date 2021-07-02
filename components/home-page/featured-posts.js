import classes from './featured-posts.module.css';

import PostsGrid from "../posts/posts-grid";

function FeaturedPosts(props) {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid />
		</section>
	);
}

export default FeaturedPosts;