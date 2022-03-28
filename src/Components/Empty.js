import { Typography } from "@mui/material";
import React from "react";

const Empty = ({ txt }) => {
  return (
    <Typography variant="h6">
      {txt.includes("active") && <div>No active to-do's . add some ! </div>}
      {txt.includes("deleted") && <div>No deleted to-do's. </div>}
    </Typography>
  );
};

export default Empty;
