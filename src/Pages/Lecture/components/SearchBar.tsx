import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  const openDialogHandler = () => {
    setOpen(true);
  };
  const closeDialogHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        onClick={openDialogHandler}
        sx={{
          border: "1px solid #6c63ff",
          borderRadius: "7px",
          color: "#6c63ff",
          width: 300,
          height: 42,
        }}
      >
        Search any course
      </Button>
      <Dialog
        open={open}
        sx={{
          ".MuiDialog-paper": {
            width: "600px",
            color: "rgba(255,255, 255, 0.7)",
            backgroundColor: "#424890",
          },
        }}
        onClose={closeDialogHandler}
      >
        <DialogTitle>Search Feeds</DialogTitle>
        <DialogContent>
          <TextField
            label={"search"}
            name={"search"}
            variant={"outlined"}
            type={"text"}
            sx={{
              width: "100%",
              height: "100%",
              marginBottom: "none",
              border: "1px solid #6c63ff",
              color: "rgba(255,255, 255, 0.7)",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={closeDialogHandler}
            sx={{
              border: "1px solid #6c63ff",
              color: "#6c63ff",
              width: 70,
              height: 40,
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={closeDialogHandler}
            sx={{
              border: "1px solid #6c63ff",
              backgroundColor: "#6c63ff",
              width: 130,
              height: 40,
            }}
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SearchBar;
