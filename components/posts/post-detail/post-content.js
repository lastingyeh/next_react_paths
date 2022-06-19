import ReactMarkdown from 'react-markdown';

import classes from './post-content.module.css';
import PostHeader from './post-header';

function PostContent({ post }) {
	const { slug, image, title, content } = post;
	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={imagePath} />
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
