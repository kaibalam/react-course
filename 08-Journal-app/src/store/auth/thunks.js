import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        console.log('Se colocó el checking en true...')
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        console.log(ok);
        console.log(errorMessage);
        if (!ok) return dispatch(logout(errorMessage));
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        // console.log('startLoginWithEmailPassword ' + JSON.stringify(result));

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    }
}