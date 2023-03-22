import './App.css';
import React, { useState } from 'react';




function CohortEditDashboard() {
  // Define an array with the days of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Define a state variable to keep track of the selected days
  const [selectedDays, setSelectedDays] = useState([]);

  // Event handler function to handle button clicks and update the selectedDays state
  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div>
      <form>
        <h1>Edit Cohort</h1>
        <p>Enter new cohort details</p>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" name="startDate" />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" name="endDate" />
        </label>
        <br />
        <label>
          Work days:
          <div id="days-container">
            {daysOfWeek.map(day => (
              <button key={day} className={selectedDays.includes(day) ? 'selected' : ''} onClick={() => handleDayClick(day)} type="button">{day}</button>
            ))}
          </div>
        </label>
        <br />
        <label>
          Expectations:
          <input type="date" name="expectationDate" />
        </label>
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default CohortEditDashboard;