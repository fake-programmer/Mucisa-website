import React from 'react';
import '../CSS-styling/upcomingEvents.css';



// Helper function: format date to { month, day }
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short' };
  return {
    month: date.toLocaleDateString(undefined, options),
    day: date.getDate(),
  };
};

const eventsData = [
  {
    id: 1,
    date: '2025-07-15',
    startTime: '14:00',
    endTime: '17:00',
    venue: 'Grand Hall, City Center',
    description: 'Join us for an exciting afternoon of talks, networking, and refreshments.',
  },
  {
    id: 2,
    date: '2025-07-22',
    startTime: '09:00',
    endTime: '12:00',
    venue: 'Community Park Amphitheater',
    description: 'Outdoor workshop focusing on sustainable gardening and urban farming.',
  },
  {
    id: 3,
    date: '2025-08-01',
    startTime: '18:30',
    endTime: '21:00',
    venue: 'Downtown Conference Center',
    description: 'Evening seminar on the latest trends in technology and innovation.',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="events-section" aria-label="Upcoming Events">
      <h2 className="events-section__title">Upcoming Events</h2>
      <div className="events-list">
        {eventsData.map(({ id, date, startTime, endTime, venue, description }) => {
          const { month, day } = formatDate(date);
          return (
            <article key={id} className="event-card" tabIndex="0" aria-labelledby={`event-title-${id}`}>
              <div className="event-date" aria-label={`Date: ${month} ${day}`}>
                <div className="event-date__month">{month}</div>
                <div className="event-date__day">{day}</div>
              </div>
              <div className="event-details">
                <div className="event-time-venue">
                    <span>|</span>
                  <time dateTime={`${date}T${startTime}`} aria-label={`Starts at ${startTime}`}>
                    {startTime}
                  </time>
                  <span>–</span>
                  <time dateTime={`${date}T${endTime}`} aria-label={`Ends at ${endTime}`}>
                    {endTime}
                  </time>
                  <span> | {venue}</span>
                </div>
                <p id={`event-title-${id}`} className="event-description">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
