import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: "10px auto" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , cursor:'default'}}>
           My To-Do's
          </Typography>
          <Link to="/">
            <Button sx={{ color: "#84f542" }}>Active</Button>
          </Link>
          <Link to="/deleted">
            <Button sx={{ color: "#a61925" }}>Deleted</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
