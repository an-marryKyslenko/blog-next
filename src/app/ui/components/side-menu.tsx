import React from 'react'
import NavLinks from './nav-links'

const links = [
	{
		name: 'About',
		path: '/blog/about',
	},
	{
		name: 'Contact',
		path: '/blog/contact',
	},
	{
		name: 'Posts',
		path: '/blog/posts',
	},
]
const SideNav = () => {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
			<NavLinks />
			</div>
		</div>
)}

export default SideNav