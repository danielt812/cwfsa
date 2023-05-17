import { useState, useEffect } from 'react';
import studentsJSON from './students.json';
import StudentCard from './components/StudentCard';
import './App.scss';

const handleClick = (student) => {
  console.log(student)
}

function App() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
    console.log(studentsJSON, 'before')
    let favoriteSort = studentsJSON.sort((a, b) => {
      console.log(a.favorite, b.favorite)
      return (a.favorite === b.favorite) ? 0 : a ? -1 : 1;
    });
    console.log(favoriteSort, 'here')
		setStudents(favoriteSort);
	}, [students.id]);

	return (
		<>
			{students.map((student) => {
				return (
					<StudentCard
            handleClick={() => handleClick(student)}
						key={student.id}
						firstName={student.firstName}
						lastName={student.lastName}
					/>
				);
			})}
		</>
	);
}

export default App;
