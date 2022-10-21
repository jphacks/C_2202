import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";

const MyDialog = (props) => {
  const { onClose, title, message, confirm } = props;

  return (
    <Dialog open onClose={() => onClose("close")}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ color: "black" }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose("ok")}>OK</Button>
        {confirm ? (
          <Button onClick={() => onClose("cancel")}>Cancel</Button>
        ) : (
          <></>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
