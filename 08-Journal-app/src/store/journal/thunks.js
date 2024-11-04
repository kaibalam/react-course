import { collection, doc, setDoc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, creatingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(creatingNewNote());
        // uid
        const { uid } = getState().auth;
        // const { isSaving } = getState().journal;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocRes = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        // console.log({newDoc, setDocRes});
        // console.log(setDocRes);
        //! dispatch
        //!

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNOtes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(note));
    }
}

export const startUploadinFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        // await fileUpload( files[0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));

    }
}