import React from 'react';
import { useState, useEffect } from 'react';

import { Container } from '../App/App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { LoaderWatch } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import searchImages from 'apiServise/apiImages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [state, setState] = useState({
    loading: false,
    total: 0,
    showModal: false,
    imageDetails: null,
  });
  useEffect(() => {
    console.log('запускаем useEffect');
    if (query === '') {
      return;
    }
    // setQuery(query);
    // setImages([]);

    const data = searchImages(query, page);

    data
      .then(response => {
        console.log(response);
        setImages(images => [...images, ...response.hits]);
        setState({
          total: response.totalHits,
        });
      })
      .then(
        setState({
          loading: false,
        })
      )
      .catch(error => console.log('Error'));
  }, [query, page]);

  const onHandleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setState({
      loading: true,
    });
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(prevState => page + 1);
    console.log('click', page);
  };

  const showImage = ({ largeImageURL, webformatURL, id }) => {
    console.log('кликнули img');
    document.addEventListener('keydown', onToggleModal);

    setState({
      imageDetails: {
        largeImageURL,
        webformatURL,
        id,
      },
      showModal: true,
    });
  };

  const onToggleModal = ({ target, currentTarget, code }) => {
    console.log('кликнули toggle модального окна');

    if (target === currentTarget || code === 'Escape') {
      setState(({ showModal }) => ({
        showModal: !showModal,
      }));
    }

    document.removeEventListener('keydown', onToggleModal);
  };

  return (
    <Container>
      <Searchbar onSubmit={onHandleSubmit} />
      {state.loading && <LoaderWatch />}
      {images && <ImageGallery images={images} showImage={showImage} />}
      {Boolean(images.length) && <Button handelClick={onLoadMore} />}

      {state.showModal && (
        <Modal handleToggle={onToggleModal}>
          <ImageGalleryItem showImage={showImage} {...state.imageDetails} />
        </Modal>
      )}
    </Container>
  );
};
