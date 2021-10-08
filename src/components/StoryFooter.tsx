import { FC } from 'react';
import { StoryProps } from '../interfaces/StoryProps';
import { Time } from './Time';

interface StoryFooterProps {
	story: StoryProps;
}

export const StoryFooter: FC<StoryFooterProps> = ({ story }) => {
	return (
		<div className="storyFooter">
			<div className="points">{`${story.points} points`}</div>
			{`by`}
			<div className="nickname">{<a href="/">{`${story.nickname}`}</a>}</div>
			<Time time={story.time} />
			<span>|</span>
			<div className="flagButton">
				<a href="/">flag</a>
			</div>
			<span>|</span>
			<div className="hideButton">
				<a href="/">hide</a>
			</div>
			<span>|</span>
			<div className="comments">
				<a href="/">{`${story.comments} comments`}</a>
			</div>
			<span>|</span>
			<div className="instapaperButton">
				<a href="/">instapaper</a>
			</div>
			<span>|</span>
			<div className="pocketButton">
				<a href="/">save to pocket</a>
			</div>
		</div>
	);
};
