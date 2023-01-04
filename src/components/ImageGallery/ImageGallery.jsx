import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ items, onClick }) {
  return (
    <Gallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
