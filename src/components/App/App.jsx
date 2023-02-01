import React from 'react';
import { useState, useEffect } from 'react';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
// import Modal from '../Modal/Modal';

// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import searchImages from 'apiServise/apiImages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);

  const [state, setState] = useState({
    loading: false,
    // total: 0,
    showModal: false,
    imageDetails: null,
  });
  useEffect(() => {
    console.log('запускаем useEffect');

    if (query === '') {
      return;
    }
    const data = searchImages(query, page);
    data
      .then(response => setImages(response.hits))
      .then(
        setState({
          loading: false,
        })
      )
      .catch(error => console.log('Error'));
  }, [query, page]);

  const onHandleSubmit = query => {
    setQuery(query);
    setPage(1);
    setState({
      loading: true,
    });
  };

  const onLoadMore = () => {
    setPage(prevState => page + 1);

    console.log('click', page);
  };

  return (
    <Container>
      <Searchbar onSubmit={onHandleSubmit} />
      {state.loading && <LoaderWatch />}
      {images && <ImageGallery images={images} />}
      {Boolean(images.length) && <Button handelClick={onLoadMore} />}
      {/* {Boolean(images.length) && images.length < total && (
        <Button handelClick={onLoadMore} />
      )} */}

      {/* {showModal && (
        <Modal handleToggle={() => onToggleModal()}>
          <ImageGalleryItem showImage={() => showImage()} />
        </Modal>
      )} */}
    </Container>
  );
};

// const { query, page } = state;
// fetchImages(query, page);
// setImages(({ images }) => ({
//   images: [...images, ...fetchImages(query, page)],
// }));

// const onLoadMore = () => {
//   setState(prevState => ({ page: prevState.page + 1 }));
//   // console.log(`После запроса, если все ок - наш объект`, this.state);
// };

// const showImage = ({ largeImageURL, webformatURL, id }) => {
//   console.log('кликнули img');

//   setState({
//     imageDetails: {
//       largeImageURL,
//       webformatURL,
//       id,
//     },
//     showModal: true,
//   });

// const onToggleModal = event => {
//   console.log('кликнули toggle модального окна');
//   setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };

// const { loading, showModal, total } = state;
// showImage = { showImage };
// function searchImages (query, page ) {
//   if (query === state.query) {
//     return;
//   }
//   return setState({ query, page: 1 });
// };

// useEffect(() => {
//   const { query, page } = state;
//   setState({
//     query: state.query,
//     page: state.page,
//   });
//   const data = searchImages(query, page);
// setState({ total: data.totalHits });
//   setState(({ images }) => ({ images: [...images, ...data.hits] }));
// }, []);

// componentDidUpdate(prevProps, prevState) {
//   const { query, page } = this.state;

//   if (prevState.query !== query || prevState.page !== page) {
//     if (query.trim() === '') {
//       this.setState({
//         images: [],
//         loading: true,
//       });
//       return;
//     }
//     this.fetchImages();
//   }
// }

// componentWillUnmount() {
//   window.removeEventListener('click', this.onToggleModal);
//   window.removeEventListener('click', this.showImage);
