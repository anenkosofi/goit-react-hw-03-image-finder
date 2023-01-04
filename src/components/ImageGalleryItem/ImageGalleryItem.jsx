import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  item: { largeImageURL, webformatURL, tags },
  onClick,
}) {
  return (
    <GalleryItem onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
