import React from 'react';
import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { ModalOverlay, ModalView } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  useEffect(() => {
    console.log('запускаем useEffect');
  });
  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleToggle);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleToggle);
  // }

  const handleToggle = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.handleToggle(this.state);
    }
  };

  // const { children } = this.props;

  return createPortal(
    <ModalOverlay onClick={() => handleToggle()}>
      <ModalView>{children}</ModalView>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
