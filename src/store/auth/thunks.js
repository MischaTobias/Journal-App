import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPassword,
} from "../../firebase/providers";
import { clearNotesOnLogout } from "../journal/journalSlice";
import { checkCredentials, login, logout } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    await dispatch(checkCredentials());
    const result = await loginWithGoogle();

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startRegisteringUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!result.ok) return dispatch(logout(result));
    console.log(result);

    dispatch(login(result));
  };
};

export const startEmailAndPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await loginWithEmailAndPassword({
      email,
      password,
    });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesOnLogout());
    dispatch(logout({}));
  };
};
