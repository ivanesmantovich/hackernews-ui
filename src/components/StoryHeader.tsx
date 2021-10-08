import { FC } from 'react';
import { StoryProps } from '../interfaces/StoryProps';

interface StoryHeaderProps {
	story: StoryProps;
}

export const StoryHeader: FC<StoryHeaderProps> = ({ story }) => {
	return (
		<div className="storyHeader">
			<div className="rank">{`${story.id}.`}</div>
			<div className="upvote"><i className="upvote fas fa-caret-up"></i></div>
			<div className="title">{story.title}</div>
			<div className="link"><a href="/">{`(${story.link})`}</a></div>
		</div>
	);
};
