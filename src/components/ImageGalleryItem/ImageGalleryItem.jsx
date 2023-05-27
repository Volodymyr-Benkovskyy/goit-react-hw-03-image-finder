import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'; 


const ImageGalleryItem = ({  modalOpen, image }) => {
  const {webformatURL, largeImageURL} = image;
  return (
    <li className= {css.galleryItem} onClick={() => modalOpen(largeImageURL)}>
      <img className= {css.galleryItemImage} src={webformatURL} alt={largeImageURL} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  modalOpen: PropTypes.func.isRequired,
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),

}
export default ImageGalleryItem;