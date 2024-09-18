import { CircularProgress, Grid2 } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid2
      alignItems="center"
      container
      justifyContent="center"
      spacing={0}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2 direction="row" justifyContent="center">
        <CircularProgress color="warning" />
      </Grid2>
    </Grid2>
  );
};
