import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  container: {
    width: "300px",
    height: "95vh",
    marginTop: 2,
    borderRadius: 5,
    backgroundColor: "#202144",
  },
  titleContainer: {
    padding: 2,
  },
  title: {
    fontSize: 36,
    color: "#ffffff",
    fontWeight: "bold",
  },
};

const SideBar = () => {
  return (
    <Paper sx={style.container}>
      <Box sx={style.titleContainer}>
        <Typography sx={style.title}>React tutorial</Typography>
      </Box>
    </Paper>
  );
};

export default SideBar;
