
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Navigation from '../components/Navigation';
import CreditSource from '../components/CreditSource';
import { serializeToQueryParam } from '../utils/helpers';
import { TMDB_API_SEARCH_TV_SHOWS, TMDB_IMAGES_BASE_URL, POSTER_SIZES } from '../config';
import { QUERY_PARAMS, PAGES } from '../utils/constants';

const Search = ({ shows }) => {
  const router = useRouter();
  const { query, page } = router.query;
  // TODO: adaptive loading
  const thumbnailGridItems = shows.map(show => ({
    id: show.id,
    thumbnail: show.poster_path ? `${TMDB_IMAGES_BASE_URL}${POSTER_SIZES.W342}${show.poster_path}` : null
  }));

  return (
    <>
      <SearchForm shows={shows} />
      <ThumbnailGrid thumbnailGridItems={thumbnailGridItems} />
      <Navigation url={serializeToQueryParam({[QUERY_PARAMS.QUERY]: query, [QUERY_PARAMS.PAGE]: ''}, PAGES.SEARCH)} page={parseInt(page)} />
      <CreditSource />
    </>
  );
};

Search.getInitialProps = async ({ query }) => {
  const searchQuery = query[QUERY_PARAMS.QUERY];
  const page = query[QUERY_PARAMS.PAGE];

  const response = await fetch(`${TMDB_API_SEARCH_TV_SHOWS}&${serializeToQueryParam({[QUERY_PARAMS.QUERY]: searchQuery, [QUERY_PARAMS.PAGE]: page})}`);
  const { results: shows } = await response.json();
  return {shows};
};

export default Search;
