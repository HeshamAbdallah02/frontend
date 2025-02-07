import React from 'react';

const HomePageSidebar = ({ activeSection, onSectionChange }) => {
  const sections = [
    { name: 'Header', id: 'header' },
    { name: 'Hero Section', id: 'hero' },
    { name: 'Upcoming Events', id: 'events' },
    { name: 'Mission & Vision', id: 'mission' },
    { name: 'Statistics', id: 'stats' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Sponsors & Partners', id: 'sponsors' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Footer', id: 'footer' }
  ];

  return (
    <div className="w-64 bg-white h-full border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Page Sections</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-[#81C99C]/10 text-[#81C99C]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HomePageSidebar;