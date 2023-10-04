import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchForm = () => {
  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Search" id="searchField" />
      </Box>
    </div>
  );
};

export default SearchForm;
