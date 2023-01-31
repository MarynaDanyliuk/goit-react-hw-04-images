import React from 'react';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
import Modal from '../Modal/Modal';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { searchImages } from 'apiServise/apiImages';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
    showModal: false,
    imageDetails: null,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      if (query.trim() === '') {
        this.setState({
          images: [],
          loading: true,
        });
        return;
      }
      this.fetchImages();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onToggleModal);
    window.removeEventListener('click', this.showImage);
  }

  onToggleModal = event => {
    console.log('кликнули toggle модального окна');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { query, page } = this.state;

      const data = await searchImages(query, page);
      this.setState({ total: data.totalHits });
      // console.log(data);

      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState('Error');
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ query }) => {
    if (query === this.state.query) {
      return;
    }

    this.setState({ query, images: [], page: 1 });
    // console.log(`до запроса наш объект`, this.state);
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(`После запроса, если все ок - наш объект`, this.state);
  };

  showImage = ({ largeImageURL, webformatURL, id }) => {
    console.log('кликнули img');

    this.setState({
      imageDetails: {
        largeImageURL,
        webformatURL,
        id,
      },
      showModal: true,
    });
  };

  render() {
    const { images, loading, showModal, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.searchImages} />
        {loading && <LoaderWatch />}
        {images && <ImageGallery images={images} showImage={this.showImage} />}
        {Boolean(images.length) && images.length < total && (
          <Button handelClick={this.onLoadMore} />
        )}

        {showModal && (
          <Modal handleToggle={() => this.onToggleModal()}>
            <ImageGalleryItem
              showImage={() => this.showImage()}
              {...this.state.imageDetails}
            />
          </Modal>
        )}
      </Container>
    );
  }
}
