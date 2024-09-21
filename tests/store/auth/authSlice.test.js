import { describe, expect, test } from "vitest";
import {
  authSlice,
  checkCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoAuthState,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixture";

describe("authSlice tests", () => {
  test("should return the initial state", () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("should handle login action", () => {
    const state = authSlice.reducer(initialState, login(demoAuthState));
    expect(state).toEqual({
      status: "authenticated",
      uid: demoAuthState.uid,
      email: demoAuthState.email,
      displayName: demoAuthState.displayName,
      photoURL: demoAuthState.photoURL,
      errorMessage: demoAuthState.errorMessage,
    });
  });

  test("should handle logout action without error message", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      ...notAuthenticatedState,
      errorMessage: undefined,
    });
  });

  test("should handle logout action with error message", () => {
    const errorMessage = "Incorrect credentials";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    expect(state).toEqual({
      ...notAuthenticatedState,
      errorMessage,
    });
  });

  test("should change state to checking", () => {
    const state = authSlice.reducer(authenticatedState, checkCredentials());
    expect(state.status).toBe("checking");
  });
});
