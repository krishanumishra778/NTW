import React, { useEffect } from 'react';

const Graph = () => {
  const data = [50, 75, 100, 80, 120, 90, 60, 110, 70, 95, 130, 85];

  useEffect(() => {
    const bars = document.querySelectorAll('.graph-bar');
    bars.forEach((bar, index) => {
      bar.style.height = `${data[index]}px`;
    });
  }, []); // Ensure this effect runs once when the component mounts

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
       <div>

    <div className="w-full h-40 bg-white shadow-lg rounded-md p-4">
      <div className="text-xl font-semibold">Monthly Sales</div>
      <div className="grid grid-cols-2 gap-4">
        {months.map((month, index) => (
            <div className="p-2" key={month}>
            <div className={`w-16 h-${data[index]} bg-blue-500 relative graph-bar`}>
              <div className="h-0 bg-blue-700"></div>
            </div>
            <p className="text-center mt-2">{month}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="w-full h-40 bg-white shadow-lg rounded-md p-4">
      <div className="text-xl font-semibold">Monthly Sales</div>
      <div className="grid grid-cols-2 gap-4">
        {months.map((month, index) => (
            <div className="p-2" key={month}>
            <div className={`w-16 h-${data[index]} bg-blue-500 relative graph-bar`}>
              <div className="h-0 bg-blue-700"></div>
            </div>
            <p className="text-center mt-2">{month}</p>
          </div>
        ))}
        </div>   
      </div>
      <div className="w-full h-40 bg-white shadow-lg rounded-md p-4">
      <div className="text-xl font-semibold">Monthly Sales</div>
      <div className="grid grid-cols-2 gap-4">
        {months.map((month, index) => (
            <div className="p-2" key={month}>
            <div className={`w-16 h-${data[index]} bg-blue-500 relative graph-bar`}>
              <div className="h-0 bg-blue-700"></div>
            </div>
            <p className="text-center mt-2">{month}</p>
          </div>
        ))}
        </div>   
      </div>
    </div>

    
  );
};

export default Graph;
