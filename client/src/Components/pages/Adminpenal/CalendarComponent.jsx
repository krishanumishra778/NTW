import React from 'react'

export const CalendarComponent = ({ selectedDate, onDateChange, }) => {
    return (
        <div className="">
            <input
                className=""
                type="date"
                value={selectedDate}
                onChange={onDateChange}
            />
        </div>
    );
};

export default CalendarComponent;

