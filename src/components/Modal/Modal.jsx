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

// const [showModal, setModal] = useState(false);
// useEffect(() => {
//   console.log('запускаем useEffect');
//   handleToggle(showModal);
// }, [showModal]);

// const handleToggle = ({ target, currentTarget, code }) => {
//   console.log('кликнули toggle модального окна');
//   if (target === currentTarget || code === 'Escape') {
//     setModal(true);
//   }
// };
// ___________________________________________________________
// componentDidMount() {
//   document.addEventListener('keydown', this.handleToggle);
// }

// componentWillUnmount() {
//   document.removeEventListener('keydown', this.handleToggle);
// }

// const handleToggle = ({ target, currentTarget, code }) => {
//   if (target === currentTarget || code === 'Escape') {
//     this.props.handleToggle(this.state);
//   }
// };

// const { children } = this.props;

// export default Modal;
