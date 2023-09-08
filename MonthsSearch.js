import React, { useState } from 'react';

function MonthDropdown() {
  const [selectedMonth, setSelectedMonth] = useState('March');

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div>
     
      <select
        id="month"
        name="month"
        value={selectedMonth}
        onChange={handleMonthChange}
      >

      <option value=""></option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    
    </div>
  );
}

export default MonthDropdown;
