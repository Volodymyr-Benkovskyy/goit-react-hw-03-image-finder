import { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    q: '',
  };

  onSubmit = even => {
    even.preventDefault();
    this.props.setQuery(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <header className= {css.searchbar}>
        <form className= {css.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className= {css.searchFormButton}>
              <BiSearchAlt2 size="20px" />
          </button >
          <input
            type="text"
            value={this.state.q}
            onChange={even => this.setState({ q: even.target.value })}
            className= {css.searchFormInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
}

export default Searchbar;
