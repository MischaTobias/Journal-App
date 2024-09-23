import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import {
  startEmailAndPasswordSignIn,
  startGoogleSignIn,
} from "../../store/auth";

const initialForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm(initialForm);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startEmailAndPasswordSignIn(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        aria-label="login-form"
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="correo@google.com"
              type="email"
              variant="outlined"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="password"
              name="password"
              placeholder="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2
            size={{ xs: 12 }}
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1 }}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                type="submit"
                sx={{ height: 45, borderRadius: "8px" }}
              >
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                aria-label="google-btn"
                onClick={onGoogleSignIn}
                sx={{ height: 45, borderRadius: "8px" }}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Link color="inherit" component={RouterLink} to="/auth/register">
              Create an account
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
