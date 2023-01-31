import React from 'react';

import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from '../Searchbar/Searchbar.styled';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // ________________________
    const { onSubmit } = this.props;
    // this.props.onSubmit(this.state);
    onSubmit({ ...this.state });
    // _________________________
    // this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Label>Search</Label>
          </SearchFormButton>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
