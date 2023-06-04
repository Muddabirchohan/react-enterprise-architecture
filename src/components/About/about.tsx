import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Button, Modal } from "antd";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    id: "",
  });

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEventsArray = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEventsArray);
    setSelectedEvent(null);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleEventClick = (item) => {
    setIsModalOpen(true);
    setNewEvent({
      title: "",
      start: "",
      end: "",
      id: ""
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // myEventsList.push(newEvent);

    const newEvents = {
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      id: Math.random(),
    };
    setEvents([...events, newEvents]);

    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  console.log("selected event", selectedEvent);

  const createEventModal = () => {
    if (!isModalOpen) return;

    return (
      <Modal open={isModalOpen} onCancel={handleCloseModal}>
        <h2>Create Event</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Start:
            <input
              type="datetime-local"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            End:
            <input
              type="datetime-local"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Create</button>
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </form>
      </Modal>
    );
  };

  const eventCreatedModal = () => {
    if(selectedEvent){
      return  <div>
        {/* <Modal open={true}> */}
          <h2>Edit Event</h2>
          <form onSubmit={() => handleUpdateEvent(selectedEvent)}>
            <label>
              Title:
              <input
                type="text"
                value={selectedEvent.title}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    title: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Start:
              <input
                type="datetime-local"
                value={moment(selectedEvent.start).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    start: moment(e.target.value).toDate(),
                  })
                }
              />
            </label>
            <br />
            <label>
              End:
              <input
                type="datetime-local"
                value={moment(selectedEvent.end).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    end: moment(e.target.value).toDate(),
                  })
                }
              />
            </label>
            <br />
            <button type="submit">Save Changes</button>
          </form>
          {/* </Modal> */}
        </div>
      
    }
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleEventClick}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        style={{ height: 550 }} // add a fixed height
      />


      {createEventModal()}
      {eventCreatedModal()}

    </div>
  );
};

export default MyCalendar;
