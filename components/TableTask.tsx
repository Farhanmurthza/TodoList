import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton } from "@mui/material";
import { ITasks } from "@/public/tasks";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface TableTaskProps {
  tasks: ITasks[];
}

const TableTask: React.FC<TableTaskProps> = ({ tasks }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        p: 1,
        m: 1,
        gap: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        mx: "auto",
        width: 1000,
      }}
    >
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <Accordion sx={{ width: 1000 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{task.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{task.text}</Typography>
              <Box sx={{ display: "flex" }}>
                <IconButton  sx={{ ml: 110 }}>
                  <ModeEditIcon onClick={handleOpen} sx={{ color: "green" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Box>
            </AccordionDetails>
          </Accordion>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default TableTask;
