import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
import Loader from "../Loader/Loader";
import "./SimilarExercises.css";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Box sx={{mb:"70px"}}>
        <Typography variant="h3" mb={4}>
          Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{ p: "4px", position: "relative" }}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h3" mb={4} >
          Exercises that use the same equipment
        </Typography>
        <Stack direction="row" sx={{ p: "4px", position: "relative" }}>
          {equipmentExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
