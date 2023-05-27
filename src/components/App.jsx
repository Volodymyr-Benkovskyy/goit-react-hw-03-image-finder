import { Component } from 'react';
import getSearchedImgApi from '../services/imgApi';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import css from './App.module.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    imgSrc: '',
    isOpenModal: false,
    isLoading: false,
   
  };

setQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  pageLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState, snapshot) { 
    if (
      (prevState.query !== this.state.query && this.state.query !== '') ||
      prevState.page !== this.state.page
    ) {
      this.getSearched();
    }

    if (
      prevState.images.length !== this.state.images.length &&
      this.state.page !== 1
    ) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }

  getSearched = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await getSearchedImgApi(this.state.query, this.state.page);
      this.setState(prev => ({ images: [...prev.images, ...res.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  

 modalOpen = largeImageURL => {
    this.setState ({
      isOpenModal: true,
      imgSrc: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false, imgSrc: '' });
  };

 

  render() {
    const { images, isLoading, imgSrc, isOpenModal } = this.state;
    return (
      <div className={css.app}>
        <Searchbar setQuery={this.setQuery} query={this.state.query} />
        <ImageGallery images={images} modalOpen={this.modalOpen} />
        {isLoading && <Loader />}
        {images.length >= 12 && <Button onClick={this.pageLoad} />}
        {isOpenModal && (
          <Modal imgSrc={imgSrc} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
