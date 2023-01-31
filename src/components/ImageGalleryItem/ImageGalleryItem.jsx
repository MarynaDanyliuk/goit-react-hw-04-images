import PropTypes from 'prop-types';

import {
  GalleryItem,
  GalleryImage,
} from '../ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  id,
  showImage,
}) => {
  return (
    <GalleryItem
      key={id}
      onClick={() => showImage({ largeImageURL, webformatURL, id })}
    >
      <GalleryImage src={largeImageURL} srcSet={webformatURL} alt="picture" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.node,
  webformatURL: PropTypes.node,
  id: PropTypes.number,
  showImage: PropTypes.func.isRequired,
};
