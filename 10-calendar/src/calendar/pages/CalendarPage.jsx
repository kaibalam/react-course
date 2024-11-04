import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";

import { localizer, getMessagesES } from '../../helpers/';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';


export const CalendarPage = () => {


  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents  } = useCalendarStore();
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventeStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent =  ( user.uid === event.user._id ) || ( user.uid === event.user.id);
    const style = {

      backgroundColor:  isMyEvent ? '#347cf7': '#465660',
      borderRadius: '3px',
      opacity: 0.8,
      color: 'white'

    }

    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    openDateModal();

  }

  const onSelect = ( event ) => {
    setActiveEvent( event );
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
  }

  useEffect(() => {
    startLoadingEvents();
  }, [])
  

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventeStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
