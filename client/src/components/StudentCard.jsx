import ProfileSVG from '../svgs/profileSVG';
import StarSVG from '../svgs/starSVG';
import './scss/StudentCard.scss';

export default function StudentCard(props) {
	return (
		<div className='student-card-container'>
			<ProfileSVG
				size={80}
				handleClick={props.handleClick}
			/>
			<div className='student-card-details'>
        <div className="student-card-name">
        {props.firstName} {props.lastName}
        </div>
        <div className="student-card-favorite">
          <StarSVG size={40} />
        </div>
			</div>
		</div>
	);
}
