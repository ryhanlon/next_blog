import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter }from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
	const {slug, image, title, content} = props.post;
	const imagePath = `/images/posts/${slug}/${image}`;

	const customRenderers = {
		p(paragraph) {
			const {node} = paragraph;
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image
							src={image.properties.src}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const {className, children} = code;
			const language = className.split('-')[1]; // className is something like language-js => We need the 'js' part here
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={children}np
					/>
			);
		}
	}

			return (
				<article className={classes.content}>
					<PostHeader title={title} image={imagePath}/>
					<ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
				</article>
			);
		}

		export default PostContent;

// https://github.com/mschwarzmueller/nextjs-course-code/compare/3b99cd0...a9fb64b#diff-3db12f592d8426efcf0708bcecc9d9a283394c9089879adcb7bdca47ac060ce8R38