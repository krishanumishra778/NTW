import React from 'react'

export const CalendarComponent = ({ selectedDate, onDateChange, closeCalendar }) => {
    return (
        <div>
            <h2>Select a date:</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={onDateChange}
            />
        </div>
    );
};

export default CalendarComponent;

