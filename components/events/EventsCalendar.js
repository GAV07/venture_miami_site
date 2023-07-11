import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventCard from '../events/EventCard';
import EventModal from '../events/EventModal';
import { events } from '../../pages/api/eventsData';

const EventCalendar = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventCardsRef = useRef(null);

    const handleEventClick = (eventInfo) => {
        setSelectedEvent(eventInfo.event.id);
    };

    const handleWindowResize = () => {
        if (eventCardsRef.current) {
            const currentDate = new Date();
            const closestDateCard = Array.from(eventCardsRef.current.children).reduce(
                (closestCard, card) => {
                    const cardDate = new Date(card.dataset.date);
                    return cardDate >= currentDate && cardDate < new Date(closestCard.dataset.date)
                        ? card
                        : closestCard;
                }
            );
            if (closestDateCard) {
                closestDateCard.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let eventCards = events.map((event) => {
        return (
            <EventCard
                key={event.id}
                title={event.title}
                time={event.start}
                date={event.end}
                data-date={event.start} // Add data-date attribute for comparison
            />
        );
    });

    return (
        <div className="pt-28">
            <h1 className="text-center mb-10 text-white font-bold text-[50px]">Events Calendar</h1>
            <div className="hidden md:block bg-white w-1/2 h-1/2 m-auto rounded-lg shadow-lg p-4">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        right: 'prev,next today',
                        center: 'title',
                        left: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    events={events}
                    eventClick={handleEventClick}
                    handleWindowResize={true}
                />
                {selectedEvent && (
                    <EventModal
                        title={events[selectedEvent].title}
                        time={events[selectedEvent].start}
                        date={events[selectedEvent].end}
                        description={events[selectedEvent].description}
                        closeModal={() => {
                            setSelectedEvent(null);
                        }}
                    />
                )}
            </div>
            <div
                className="block w-4/5 h-1/2 m-auto rounded-lg flexColumn justify-center items-center space-y-7 shadow-lg md:hidden"
                ref={eventCardsRef} // Set ref for event cards container
            >
                {eventCards}
            </div>
        </div>
    );
};

export default EventCalendar;
