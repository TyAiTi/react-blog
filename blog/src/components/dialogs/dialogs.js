import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styleDia = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styleDia)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});




export default function DiaLogs() {
  const [openDia, setOpen] = React.useState(false);
  const [username, setUserName] = useState("")
  const handleOpenDia = () => {
    setOpen(true);
  };
  const handleCloseDia = () => {
    setOpen(false);
  };

  return (
    <div>
      <button variant="outlined" color="primary" onClick={handleOpenDia}>
        Open dialog
      </button>

      <Dialog onClose={handleCloseDia}  open={openDia}>
        <DialogTitle  onClose={handleCloseDia}>
          Video AI
        </DialogTitle>

          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <input type= "text" onChange={(e)=> setUserName(e.target.value)} />
      </Dialog>
    </div>
  );
}
