import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'Consulta médica',
    start: new Date(2024, 3, 21, 10, 0), // año, mes, día, horas, minutos
    end: new Date(2024, 3, 21, 11, 0),
    allDay: false,
  },
  {
    title: 'Revisión de seguimiento',
    start: new Date(2024, 3, 22, 14, 0),
    end: new Date(2024, 3, 22, 15, 0),
    allDay: false,
  }
];

function Appointment() {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default Appointment;
