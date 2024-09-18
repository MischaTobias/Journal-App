import { Grid2, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      alignItems="center"
      container
      justifyContent="center"
      spacing={0}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ md: 6 }}
        sx={{
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid2>
    </Grid2>
  );
};
