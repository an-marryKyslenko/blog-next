import React from 'react'
import NavLinks from './nav-links'

const SideNav = () => {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
			<NavLinks />
			</div>
		</div>
)}

export default SideNav