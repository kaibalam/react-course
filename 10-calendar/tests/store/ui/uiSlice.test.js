const { uiSlice, onOpenDateModal, onCLoseDateModal } = require("../../../src/store/ui/uiSlice")

describe('Pruebas en el uiSlice', () => {

    test('debe regresar el estado por defecto', () => {

        expect(uiSlice.getInitialState()).toEqual( { isDateModalOpen: false });

    })
    
    test('debe de cambiar el isDateModalOpen correctamen te', () => { 
        
        let state = uiSlice.getInitialState();

        state = uiSlice.reducer( state, onOpenDateModal() );
        expect( state.isDateModalOpen ).toBeTruthy();
        
        state = uiSlice.reducer( state, onCLoseDateModal() );
        expect( state.isDateModalOpen ).toBeFalsy();

     })

})