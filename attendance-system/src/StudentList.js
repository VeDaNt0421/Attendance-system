import React from 'react';



function StudentList({ attendance, onToggleAttendance }) {
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    { id: 4, name: 'Student 4' },
    { id: 5, name: 'Student 5' },
    { id: 6, name: 'Student 6' },
    { id: 7, name: 'Student 7' },
    { id: 8, name: 'Student 8' },
    { id: 9, name: 'Student 9' },
    { id: 10, name: 'Student 10' }
  ];

  return (
    <div className="student-list">
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <input
              type="checkbox"
              checked={attendance.includes(student.id)}
              onChange={() => onToggleAttendance(student.id)}
            />
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

