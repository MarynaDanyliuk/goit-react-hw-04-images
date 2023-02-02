import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { Gallery } from '../ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images, showImage }) => {
  return (
    <Gallery>
      {images.map(({ largeImageURL, webformatURL, id }) => (
        <ImageGalleryItem
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          key={id}
          showImage={() => showImage({ largeImageURL, webformatURL, id })}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.node,
      webformatURL: PropTypes.node,
      id: PropTypes.number,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
