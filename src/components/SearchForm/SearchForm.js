import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

function SearchForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(input);
    setInput('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={input}
        placeholder="Search movie"
        onChange={handleChange}
      />
      {input && (
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
      )}
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
