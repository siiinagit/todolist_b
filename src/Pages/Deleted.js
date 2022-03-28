import { Container, Box, Grid } from "@mui/material";
import DeletedTodos from "../Components/DeletedTodos";
import Header from "../Components/Header";

const Deleted = () => {
  return (
    <Container component="div" maxWidth="xl">
      <Box
        sx={{
          maxWidth: "900px",
          backgroundColor: "#5492b8",
          margin: "0 auto",
          borderRadius: "5px",
          marginTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Header title={"Deleted"} />
          </Grid>
          <Grid item xs={12}>
            <DeletedTodos />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Deleted;
