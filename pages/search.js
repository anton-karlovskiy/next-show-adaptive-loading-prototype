
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import { serializeToQueryParam } from '../utils/helper';

const Search = ({ shows }) => {
  const thumbnailGridItems = shows.map(show => ({id: show.imdbID, thumbnail: show.Poster}));

  return (
    <>
      <SearchForm shows={shows} />
      <ThumbnailGrid thumbnailGridItems={thumbnailGridItems} />
    </>
  );
};

Search.getInitialProps = async ({ query: { search, page } }) => {
  const searchQuery = serializeToQueryParam({
    page,
    type: 'series',
    s: search
  });
  console.log('ray : [Search] ***** searchQuery => ', searchQuery);
  // TODO: feeding IMDB API data instead of sample data & API endpoint config
  // TODO: apikey -> config
  // TODO: the images in search result are not range-resolution images -> adaptive impossible, UX is bad
  const response = await fetch(`http://www.omdbapi.com/?apikey=b1bb12a0&${searchQuery}`);
  const { Search: shows = [] } = await response.json();
  return {shows};
};

export default Search;
