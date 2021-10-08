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
			<div className="nickname">{`by ${story.nickname}`}</div>
			<Time time={story.time} />
			<span>|</span>
			<div className="flagButton">flag</div>
			<span>|</span>
			<div className="hideButton">hide</div>
			<span>|</span>
			<div className="comments">{`${story.comments} comments`}</div>
			<span>|</span>
			<div className="instapaperButton">instapaper</div>
			<span>|</span>
			<div className="pocketButton">save to pocket</div>
		</div>
	);
};
