export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "123ABC",
  email: "demo@example.com",
  displayName: "Demo user",
  photoURL: "https://example.com/demo.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoAuthState = {
  uid: "123ABC",
  email: "demo@example.com",
  displayName: "Demo user",
  photoURL: "https://example.com/demo.jpg",
  errorMessage: null,
};
