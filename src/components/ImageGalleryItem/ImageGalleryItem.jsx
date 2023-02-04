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
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number,
  showImage: PropTypes.func.isRequired,
};
