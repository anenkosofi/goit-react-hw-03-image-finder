import { IoSearchOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  Button,
  Label,
  Input,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <IoSearchOutline size={24} />
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
    </SearchBox>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
