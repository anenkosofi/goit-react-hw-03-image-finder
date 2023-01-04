import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  Button,
  Label,
  Input,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
