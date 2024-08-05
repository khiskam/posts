"use client";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useErrorStore } from "@/store/ErrorStore";

const MessageProvider = () => {
  const { message, clearMessage } = useErrorStore(
    ({ message, clearMessage }) => ({ message, clearMessage })
  );

  const onClose = () => {
    clearMessage();
  };

  if (!message) {
    return null;
  }

  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageProvider;
