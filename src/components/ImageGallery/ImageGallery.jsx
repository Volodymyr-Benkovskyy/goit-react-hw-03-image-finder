import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'; 

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image, idx) => (
        <ImageGalleryItem key={idx} image={image} modalOpen={modalOpen} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired,
};
export default ImageGallery;
