import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo-2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack gap="40px" alignItems="flex-end" px="10px">
        <Typography variant="h5" pb="40px" mt="20px">
          Made By an Enthusiastic Trainee
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
