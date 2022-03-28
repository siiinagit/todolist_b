import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useTodoContext } from "../Context/todosContext";

const CleanButton = styled(Button)({
  marginLeft: "5px",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ebf8ff",
  },
  "& ::placeholder": {
    color: "#2faceb",
  },
});

const Form = () => {
  const { input, handleInput, handleSubmit } = useTodoContext();
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={10} md={11}>
          <CustomTextField
            sx={{
              marginLeft: "7px",
              input: { color: "#f1f2ed", fontSize: "3 rem" },
            }}
            variant="standard"
            label="enter the to-do.."
            required
            InputLabelProps={{ required: false }}
            type="search"
            fullWidth
            placeholder="enter todo's here"
            value={input}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <CleanButton type="submit">
            <Typography
              sx={{ paddingTop: "15px", color: "#11122e" }}
              variant="button"
            >
              <AddIcon />
            </Typography>
          </CleanButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
