import { FC } from 'react';
import { StoryProps } from '../interfaces/StoryProps';
import { StoryHeader } from './StoryHeader';
import { StoryFooter } from './StoryFooter';

interface StoryListItemProps {
	story: StoryProps;
}

export const StoryListItem: FC<StoryListItemProps> = ({ story }) => {
	return (
		<div className="storyListItem">
			<StoryHeader story={story} />
			<StoryFooter story={story} />
		</div>
	);
};
