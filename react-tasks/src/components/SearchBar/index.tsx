import React, { ChangeEvent } from 'react';
import { setStorage, getStorage } from 'localStorage';

import { ISearchBarState } from './types';

class SearchBar extends React.Component<Record<string, string>, ISearchBarState> {
  constructor(props: Record<string, string>) {
    super(props);
  }

  componentDidMount() {
    const value = getStorage();
    if (!value) return;
    if (value) this.setState({ value: value });
  }

  componentWillUnmount() {
    if (!this.state) return;
    const value = this.state.value;
    setStorage(value);
  }

  handleChange(e: ChangeEvent) {
    const searchInput = e.target as HTMLInputElement;
    this.setState({ value: searchInput.value });
    setStorage(searchInput.value);
  }

  handleSearchSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && this.state.value) {
      console.log('fuck');
    }
  }

  render() {
    return (
      <input
        className="search-bar"
        name="search"
        type="search"
        placeholder="search..."
        onKeyUp={(e) => this.handleSearchSubmit(e)}
        onChange={(e) => this.handleChange(e)}
        value={this.state ? this.state.value : ''}
      />
    );
  }
}

export default SearchBar;
