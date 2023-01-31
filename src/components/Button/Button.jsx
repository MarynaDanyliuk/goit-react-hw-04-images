import PropTypes from 'prop-types';
import { ButtonLoadMore } from '../Button/Button.styled';

export const Button = ({ handelClick }) => {
  return <ButtonLoadMore onClick={handelClick}>Load more</ButtonLoadMore>;
};

Button.propTypes = {
  handelClick: PropTypes.func.isRequired,
};
