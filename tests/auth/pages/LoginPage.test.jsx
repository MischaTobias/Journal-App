import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

describe("<LoginPage /> tests", () => {
  test("renders the login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
  });
});
