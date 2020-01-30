import { Dialog, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

import { ImageInformation } from '../../models';

interface ImagePreviewProps {
  imageInformation: ImageInformation;
  handleClose: () => void;
  open: boolean;
}

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  }
});

const ImagePreview = (props: ImagePreviewProps) => {
  const { image, imageTitle } = props.imageInformation;
  const { handleClose, open } = props;

  const { content } = useStyles();

  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title" fullWidth={true} maxWidth="lg">
        <DialogTitle id="max-width-dialog-title">{imageTitle}</DialogTitle>
        <DialogContent className={content}>
          <img src={image} alt={imageTitle} width={matches ? '200' : undefined} height={matches ? '200' : undefined} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ImagePreview;
