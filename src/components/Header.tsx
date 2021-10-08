import { FC } from 'react';

interface HeaderProps {
	siteTitle: string;
}

export const Header: FC<HeaderProps> = ({ siteTitle }) => {
	return (
		<div className="header">
            <div><img className='logo' src="./hnLogo.jpg" alt="logo" /></div>
			<div><a className='headerTitle' href="/">{siteTitle}</a></div>
			<div><a href="/">new</a></div>
			<span>|</span>
			<div><a href="/">threads</a></div>
			<span>|</span>
			<div><a href="/">comments</a></div>
			<span>|</span>
			<div><a href="/">show</a></div>
			<span>|</span>
			<div><a href="/">ask</a></div>
			<span>|</span>
			<div><a href="/">jobs</a></div>
			<span>|</span>
			<div><a href="/">submit</a></div>
		</div>
	);
};
