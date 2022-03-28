import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useTodoContext } from "../Context/todosContext";

const TodoCard = ({
  buttons,
  text,
  completed,
  edited,
  id,
  day,
  month,
  year,
  hours,
  minutes,
}) => {
  const { handleComplete, handleDelete, handleDeleteX, handleEdit , toActive} =
    useTodoContext();
  return (
    <Card
      sx={{
        width: "90%",
        backgroundColor: "rgb(213, 247, 247)",
        color: "#11122e",
      }}
      elevation={3}
    >
      <Grid container direction="column">
        <Grid item>
          <CardContent
            sx={{
              height: "2px",
              fontFamily: "Source Code pro , monos pace",
              cursor: "default",
              fontSize: ".78rem",
            }}
          >
            {edited ? "edited: " : completed ? "completed: " : "added: "}
            {day}/{month}/{year}. in {hours}h:{minutes}m
          </CardContent>
        </Grid>
        <Divider />
        <Grid item>
          <CardContent
            sx={{ height: "80px", overflowY: "auto", paddingTop: "3px" }}
          >
            <Typography
              sx={
                completed
                  ? {
                      color: "green",
                      fontFamily: "Barlow Condensed , sans-serif",
                      fontSize: "1.55rem",
                    }
                  : {
                      color: "black",
                      fontFamily: "Barlow Condensed , sans-serif",
                      fontSize: "1.55rem",
                    }
              }
            >
              {" "}
              {text}
            </Typography>
          </CardContent>
        </Grid>
        <Divider />
        <Grid item>
          <CardActions
            sx={{ height: "10px", display: "flex", justifyContent: "flex-end" }}
          >
            {buttons.includes("completed") && (
              <Button onClick={() => handleComplete(id)} color="success">
                <Tooltip title="Completed">
                  <DoneIcon />
                </Tooltip>
              </Button>
            )}
            {buttons.includes("edit") && (
              <Button onClick={() => handleEdit(id)}>
                <Tooltip title="Edit">
                  <EditIcon />
                </Tooltip>
              </Button>
            )}
            {buttons.includes("toActive") && (
              <Button onClick={() => toActive(id, text, completed, edited)}>
                <Tooltip title="To Active">
                  <FileUploadOutlinedIcon />
                </Tooltip>
              </Button>
            )}
            {buttons.includes("delete") && (
              <Button
                color="error"
                onClick={() => handleDelete(id, text, completed, edited)}
              >
                <Tooltip title="Delete">
                  <DeleteIcon />
                </Tooltip>
              </Button>
            )}
            {buttons.includes("deleteX") && (
              <Button color="error" onClick={() => handleDeleteX(id)}>
                <Tooltip title="Delete">
                  <DeleteIcon />
                </Tooltip>
              </Button>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TodoCard;
