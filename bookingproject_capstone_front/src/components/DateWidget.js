import React from 'react';
import './DateWidget.css';

function DateWidget() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="date-widget">
      <h2>Today</h2>
      <p>{currentDate}</p>
    </div>
  );
}

export default DateWidget;