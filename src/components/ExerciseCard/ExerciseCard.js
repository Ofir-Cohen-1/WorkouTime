import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      ExerciseCard
    </Link>
  );
};

export default ExerciseCard;
