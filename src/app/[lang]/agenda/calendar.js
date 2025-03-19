// components/GoogleCalendar.js

import React from 'react';

const GoogleCalendar = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=restarenanegra%40gmail.com&ctz=Atlantic%2FCanary&mode=AGENDA"
        style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
