import React from 'react';

import { TopBarBtn } from './TopBar/TopBarBtn'
import { TopBar } from './TopBar'
import { TopBarContent } from './TopBar/TopBarContent'

export class Navbar extends React.Component {


	render() {
		return (
			<div>
				<TopBar
					fixed={ false } >
					<TopBarContent align={ "left" } >
						<h2> Agenda </h2>
					</TopBarContent>
				</TopBar>
			</div>
		);
	}
}
