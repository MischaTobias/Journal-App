import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach, vitest } from "vitest";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../fixtures/authFixture";
import { authSlice } from "../../../src/store/auth";

const mockStartGoogleSignIn = vitest.fn();
const mockStartEmailAndPasswordSignIn = vitest.fn();

vitest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startEmailAndPasswordSignIn:
    ({ email, password }) =>
    () =>
      mockStartEmailAndPasswordSignIn({ email, password }),
}));

vitest.mock("react-redux", async () => ({
  ...(await vitest.importActual("react-redux")),
  useDispatch: () => {
    return (fn) => fn();
  },
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: { auth: notAuthenticatedState },
});

describe("<LoginPage /> tests", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    cleanup();
  });

  test("renders the login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("google button should invoke startGoogleSignIn function", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleButton = screen.getByLabelText("google-btn");

    fireEvent.click(googleButton);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test("submit should invoke startEmailAndPasswordSignIn", () => {
    const email = "correo@google.com";
    const password = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Email" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByLabelText("password");
    fireEvent.change(passwordField, {
      target: { name: "password", value: password },
    });

    const loginForm = screen.getByLabelText("login-form");
    fireEvent.submit(loginForm);

    expect(mockStartEmailAndPasswordSignIn).toHaveBeenCalledWith({
      email,
      password,
    });
  });
});
