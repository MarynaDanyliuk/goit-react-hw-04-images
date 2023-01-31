import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from '../Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
    // this.setState({
    //   [name]: value,
    // });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // ________________________
    // const { onSubmit } = this.props;
    // this.props.onSubmit(this.state);
    onSubmit(query);
    setQuery(query);
    // _________________________
    // this.reset();
  };

  // const reset = () => {
  //   this.setState({ query: '' });
  // };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Label>Search</Label>
        </SearchFormButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
