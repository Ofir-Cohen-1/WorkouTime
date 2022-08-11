import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack gap="40px" alignItems="center">
        <Typography variant="h5" pb="40px" mt="20px">
          Made By an Enthusiastic Trainee
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
