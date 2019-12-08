
import Router from 'next/router';

import TextField from '../TextField';
import ContainedButton from '../ContainedButton';

const SearchForm = ({ shows }) => {
  const onSubmitHandler = event => {
    // TODO: confirm URL schema
    // TODO: search query param is a bit hardcoded
    Router.push(`/search?${event.target.search.name}=${event.target.search.value}`);
    event.preventDefault();
  };
  return (
    <>
      <div>
        <h1>{shows.length > 0 ? 'Search' : 'No results found'}</h1>
        <form onSubmit={onSubmitHandler}>
          <TextField label='' name='search' />
          <ContainedButton type='submit'>Submit</ContainedButton>
        </form>
      </div>
      <style jsx>{`
        form {
          display: flex;
          width: 294px;
          margin: 24px auto;
        }
      `}</style>
    </>
  );
};

export default SearchForm;
