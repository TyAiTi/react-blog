import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import ReactPlayer from 'react-player'
// const link2= 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&size=large&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'

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


export default function Videos(props){
    let {handleCloseDia, openDia, index, linkVideo} = props
    return(
        <div >
            <Dialog onClose={handleCloseDia}  open={openDia} >
                <DialogTitle  onClose={handleCloseDia}>
                Video {index+1}
                </DialogTitle >

                <ReactPlayer 
                  controls 
                  url={linkVideo} 
                  width='480px'
                  height='240px'
                  
                  onReady={ () => console.log('onReady callBack')}
                  onStart={ () => console.log('onStart callBack')}
                  onPause={ () => console.log('onPause callBack')}
                  onEnded={ () => console.log('onEnded callBack')}
                  onError={ () => console.log('onError callBack')}
                />
            </Dialog>
        </div>
    )
}