import React, { useState } from 'react';

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      // Close the active section if it's clicked again
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <ul className="space-y-2">
        <li className="border rounded-md p-2">
          <button
            className="flex justify-between w-full"
            onClick={() => toggleSection('home')}
          >
            Home
            <span className="text-xl">
              {activeSection === 'home' ? '-' : '+'}
            </span>
          </button>
          {activeSection === 'home' && (
            <div className="p-2">
              <p>This is the content for the Home section.</p>
              <ul className="list-disc pl-6">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          )}
        </li>
        {/* ... (Service and About sections) */}
      </ul>
    </div>
  );
};

export default Accordion;
