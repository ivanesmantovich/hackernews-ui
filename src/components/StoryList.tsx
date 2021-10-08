import { FC } from 'react';
import { StoryProps } from '../interfaces/StoryProps';
import { StoryListItem } from './StoryListItem';

interface StoryListProps {
	stories: StoryProps[];
}

export const StoryList: FC<StoryListProps> = ({ stories }) => {
	return (
		<div className="storyList">
			{stories.map((story) => {
				return <StoryListItem story={story} key={story.id} />;
			})}
		</div>
	);
};
