import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { FormEventHandler, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 1,
  p: 4,
  borderRadius: 3,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("1", newTitle);
    console.log("1", newTask);
  };

  return (
    <Box sx={{ mt: 1, border: 1, borderColor: "primary.main" }}>
      <Button onClick={handleOpen}>Create</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmitTask}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create New To-Do
            </Typography>
            <TextField
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              fullWidth
              sx={{ top: 20 }}
              id="title"
              label="Title"
              variant="outlined"
            />

            <TextField
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              fullWidth
              sx={{ top: 20, mt: 2 }}
              id="content"
              label="Content"
              variant="outlined"
            />

            <Button
              type="submit"
              sx={{ top: "30%", left: "90%" }}
              size="medium"
              variant="contained"
              color="success"
            >
              Save
            </Button>
            <Button
              sx={{ top: "30%", left: "66%" }}
              size="medium"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Modal>
    </Box>
  );
}
