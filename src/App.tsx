import './App.css';
import { StoryList } from './components/StoryList';
import { StoryProps } from './interfaces/StoryProps';
import { Header } from './components/Header';

const stories: StoryProps[] = [];

stories.push({
	id: 1,
	nickname: 'WillyWonka',
	title: 'Willy Wonka makes the best chocolate out there',
	link: 'justbelievemebro.org',
	points: 10000,
	time: '2021-03-28',
	comments: 20,
},{
	id: 2,
	nickname: 'Dave',
	title: 'Pure React',
	link: 'purereact.com',
	points: 6700,
	time: '2020-03-28',
	comments: 50,
},{
	id: 3,
	nickname: 'SquareEnixManager',
	title: 'FF XIV servers are down',
	link: 'ffxiv.com',
	points: 200,
	time: '2021-04-28',
	comments: 300,
});

function App() {
	return (
		<div className="App">
			<Header siteTitle='Hacker News'/>
			<StoryList stories={stories} />
		</div>
	);
}

export default App;
