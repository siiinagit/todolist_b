import { Container, Box, Grid } from "@mui/material";
import ActiveTodos from "../Components/ActiveTodos";
import Form from "../Components/Form";
import Header from "../Components/Header";

const Home = () => {
  return (
    <Container component="div" maxWidth="xl">
      <Box
        sx={{
          maxWidth: "900px",
          backgroundColor: "#305da6",
          margin: "0 auto",
          borderRadius: "5px",
          marginTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Header title={"Active"} />
          </Grid>
          <Grid item xs={12}>
            <Form />
          </Grid>

          <Grid item xs={12}>
            <ActiveTodos />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
