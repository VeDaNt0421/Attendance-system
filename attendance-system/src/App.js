import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import StudentList from './StudentList';
import SubmitButton from './SubmitButton';
import './App.css';
import './styles/studentlist.css';


function App() {
  const [attendance, setAttendance] = useState([]);

  const handleToggleAttendance = (studentId) => {
    // Toggle the attendance status of a student
    setAttendance(prevAttendance => {
      const updatedAttendance = [...prevAttendance];
      const studentIndex = updatedAttendance.indexOf(studentId);
      
      if (studentIndex === -1) {
        updatedAttendance.push(studentId);
      } else {
        updatedAttendance.splice(studentIndex, 1);
      }
      
      return updatedAttendance;
    });
  };

  return (
    <div className="app">
      <HeaderBar className="header" />
      <StudentList
        className="student-list"
        attendance={attendance}
        onToggleAttendance={handleToggleAttendance}
      />
      <SubmitButton className="submit-button" />
    </div>
  );
}

export default App;

