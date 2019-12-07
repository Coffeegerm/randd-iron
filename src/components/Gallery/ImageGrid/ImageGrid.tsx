import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import { ImageInformation, TileData } from '../models';

import ImagePreview from './ImagePreview/ImagePreview';

const useStyles = makeStyles({
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'hidden'
  }
});

interface ImageGridProps {
  images: TileData[];
}

const ImageGrid = (props: ImageGridProps) => {
  const { gridList } = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  const [imagePreviewOpen, setImagePreviewOpen] = React.useState(false);
  const [imageInformation, setImageInformation] = React.useState({} as ImageInformation);

  const handleImagePreview = (tile: any) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    handleImagePreviewOpen();
    setImageInformation({ image: tile.img, imageTitle: tile.title } as ImageInformation);
  };

  const handleImagePreviewOpen = () => setImagePreviewOpen(!imagePreviewOpen);

  const { images } = props;

  return (
    <>
      <GridList cellHeight="auto" className={gridList} cols={24}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={matches ? 24 : tile.cols || 1} onClick={handleImagePreview(tile)}>
            <img src={tile.img} alt={tile.title} height={matches ? '300' : 'auto'} width={matches ? '300' : 'auto'} />
          </GridListTile>
        ))}
      </GridList>
      <ImagePreview open={imagePreviewOpen} imageInformation={imageInformation} handleClose={handleImagePreviewOpen} />
    </>
  );
};

export default ImageGrid;
