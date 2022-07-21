import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import "./BodyPart.css";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItem="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #ff2625",
              backgroundColor: "#fff",
            }
          : ""
      }
    >
      <img src={Icon} alt="dumbbell" className="body-part-icon" />
    </Stack>
  );
};

export default BodyPart;
