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
  const [newQuery, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    const newQuery = value;
    setQuery(newQuery);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(newQuery);
    setQuery(newQuery);
  };

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
          value={newQuery}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
