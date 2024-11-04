import { collection,getDocs,deleteDoc } from "firebase/firestore/lite";
import { addNewEmptyNote, creatingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";

describe('Pruebas en Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('startNewNote debe de crear una nueva nota en blanco', async () => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNote()(dispatch, getState);

        expect( dispatch ).toHaveBeenCalledWith( creatingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            body:'',
            title:'',
            id: expect.any( String),
            date: expect.any( Number )
        }) );
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body:'',
            title:'',
            id: expect.any( String),
            date: expect.any( Number )
        }) );

        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes`);
        const docs = await getDocs(collectionRef);
        // console.log(docs);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push( deleteDoc( doc.ref )));
        await Promise.all( deletePromises );

    });
}) 