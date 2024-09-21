import { beforeEach, describe, expect, test, vitest } from "vitest";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startRegisteringUserWithEmailPassword,
  startEmailAndPasswordSignIn,
  startLogout,
} from "../../../src/store/auth/thunks";
import { checkCredentials, login, logout } from "../../../src/store/auth";
import { demoAuthState } from "../../fixtures/authFixture";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPassword,
} from "../../../src/firebase/providers";
import { clearNotesOnLogout } from "../../../src/store/journal/journalSlice";

vitest.mock("../../../src/firebase/providers");

describe("authThunks tests", () => {
  const dispatch = vitest.fn();

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  test("should invoke checkCredentials", async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
  });

  test("startGoogleSignIn should invoke checkCredentials and login - success", async () => {
    const loginResult = {
      ok: true,
      user: demoAuthState,
    };

    await loginWithGoogle.mockResolvedValue(loginResult);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginResult));
  });

  test("startGoogleSignIn should invoke checkCredentials and logout - failure", async () => {
    const loginResult = {
      ok: false,
      errorMessage: "Invalid credentials",
    };

    await loginWithGoogle.mockResolvedValue(loginResult);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginResult));
  });

  test("startRegisteringUserWithEmailPassword should invoke checkCredentials and login - success", async () => {
    const registerResult = {
      ok: true,
      ...demoAuthState,
    };
    const formData = {
      email: demoAuthState.email,
      password: demoAuthState.password,
      displayName: demoAuthState.displayName,
    };

    await registerUserWithEmailPassword.mockResolvedValue(registerResult);
    await startRegisteringUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(registerResult));
  });

  test("startRegisteringUserWithEmailPassword should invoke checkCredentials and logout - failure", async () => {
    const registerResult = {
      ok: false,
      errorMessage: "Invalid credentials",
    };
    const formData = {
      email: demoAuthState.email,
      password: demoAuthState.password,
      displayName: demoAuthState.displayName,
    };

    await registerUserWithEmailPassword.mockResolvedValue(registerResult);
    await startRegisteringUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(registerResult));
  });

  test("startEmailAndPasswordSignIn should invoke checkCredentials and login - success", async () => {
    const loginResult = {
      ok: true,
      ...demoAuthState,
    };
    const formData = {
      email: demoAuthState.email,
      password: demoAuthState.password,
    };

    await loginWithEmailAndPassword.mockResolvedValue(loginResult);
    await startEmailAndPasswordSignIn(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginResult));
  });

  test("startEmailAndPasswordSignIn should invoke checkCredentials and logout - failure", async () => {
    const loginResult = {
      ok: false,
      errorMessage: "Invalid credentials",
    };
    const formData = {
      email: demoAuthState.email,
      password: demoAuthState.password,
    };

    await loginWithEmailAndPassword.mockResolvedValue(loginResult);
    await startEmailAndPasswordSignIn(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginResult));
  });

  test("startLogout should invoke logoutFirebase, clearNotesOnLogout and logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesOnLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({}));
  });
});
