import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember/TeamMember';
import TeamMemberList from './components/TeamMemberList/TeamMemberList';

function App() {
	const kim = { name: 'kim', email: 'kbf+test@gmail.com', role: 'teamlead' };
	const buck = { name: 'the Buck', email: 'thebuck+test@gmail.com', role: 'team get it done' };
	const [ teamMember, setTeamMember ] = useState([ kim, buck ]);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<TeamMember {...kim} />
					<TeamMemberList />
					<code>src/App.js</code>
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
