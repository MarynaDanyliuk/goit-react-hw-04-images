import React from 'react';

import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { ModalOverlay, ModalView } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, handleToggle }) => {
  return createPortal(
    <ModalOverlay onClick={handleToggle}>
      <ModalView>{children}</ModalView>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
