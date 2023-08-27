import React, { useState } from 'react';
import './styles/submitbutton.css';

function SubmitButton() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate sending data to server
    // For now, just set the submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="submit-button">
      <button onClick={handleSubmit}>
        {submitted ? 'Attendance Submitted' : 'Submit Attendance'}
      </button>
    </div>
  );
}

export default SubmitButton;


