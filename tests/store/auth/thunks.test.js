import { beforeEach, describe, expect, test, vitest } from "vitest";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../../src/store/auth/thunks";
import { checkCredentials, login, logout } from "../../../src/store/auth";
import { demoAuthState } from "../../fixtures/authFixture";
import { loginWithGoogle } from "../../../src/firebase/providers";

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

  test("startGoogleSignIn should invoke checkingCredentials and login - success", async () => {
    const loginResult = {
      ok: true,
      user: demoAuthState,
    };

    await loginWithGoogle.mockResolvedValue(loginResult);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginResult));
  });

  test("startGoogleSignIn should invoke checkingCredentials and logout - failure", async () => {
    const loginResult = {
      ok: false,
      errorMessage: "Invalid credentials",
    };

    await loginWithGoogle.mockResolvedValue(loginResult);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginResult));
  });
});
