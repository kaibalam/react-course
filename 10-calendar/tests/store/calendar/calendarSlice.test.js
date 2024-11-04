import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvent, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice', () => {


    test('debe de regresar el estado por defecto', () => {

        const state = calendarSlice.getInitialState();
        // console.log(state)
        // console.log(initialState.initialState)
        expect(state).toEqual(initialState);
    })

    test('onSetActiveEvent debe de activar el event', () => {

        const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);

    })

    test('onAddNewEvent debe de agregar el evento ', () => {

        const newEvent = {
            id: '3',
            start: new Date('2024-10-13 00:00:00'),
            end: new Date('2024-10-13 23:00:00'),
            title: 'Cumpleaños de Ady',
            notes: 'Hay que comprar pastel'
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent]);

    })

    test('onUpdateEvent debe de actualizar el evento', () => {

        const updatedEvent = {
            id: '1',
            title: 'Cumpleaños del Jefe',
            notes: 'Albuna nota',
            start: new Date('2022-10-21 13:00:00'),
            end: new Date('2022-10-21 15:00:00'),
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
        expect(state.events).toContain(updatedEvent);

    })

    test('onDeleteEvent debe de borrar el evento activo', () => {
        //calendarWitchActiveEventSate
        
        const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent());
        expect( state.events ).not.toContain( events[0]);
        expect( state.activeEvent ).toBe( null );
    })

    test('onLoadEvent debe de establecer los eventos', () => {
        //initialState
        const state = calendarSlice.reducer( initialState, onLoadEvent( events ));
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );
        
        const newState = calendarSlice.reducer( initialState, onLoadEvent( events ));
        expect( state.events.length ).toBe( events.length );
    })

    test('onLogoutCalendar debe de limpiar el estado', () => {
        //calendarWitchActiveEventSate
        const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );

    })

})