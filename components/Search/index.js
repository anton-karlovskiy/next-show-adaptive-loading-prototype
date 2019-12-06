
// TODO: no functionality for now
import TextField from '../TextField';
import ContainedButton from '../ContainedButton';

const Search = ({ shows }) => {
  const onSubmitHandler = event => {
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

export default Search;
