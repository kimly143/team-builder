import React from 'react';

const TeamMemberList = (props) => {
	
	return (
		<div className="member">
			<h2>{props.name}</h2>
			<div className="name">
				Name: {props.name}
			</div>
            <div className="email">
				Email: {props.email}
			</div>
            <div className="role">
				Role: {props.role}
			</div>

			{/* {stars.map((star) => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))} */}
		</div>
	);
};

export default TeamMemberList;
