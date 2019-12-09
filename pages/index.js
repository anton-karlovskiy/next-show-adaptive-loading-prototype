
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Navigation from '../components/Navigation';
import CreditSource from '../components/CreditSource';
import { TMDB_API_POPULAR_TV_SHOWS, TMDB_IMAGES_BASE_URL, POSTER_SIZES } from '../config';
import { QUERY_PARAMS, PAGES } from '../utils/constants';
import { serializeToQueryParam } from '../utils/helpers';

const Home = ({ shows }) => {
  const router = useRouter();
  const page = router.query[QUERY_PARAMS.PAGE];
  // TODO: adaptive loading
  const thumbnailGridItems = shows.map(show => ({id: show.id, thumbnail: `${TMDB_IMAGES_BASE_URL}${POSTER_SIZES.W342}${show.poster_path}`}));
  
  return (
    <>
      <SearchForm shows={shows} />
      <ThumbnailGrid thumbnailGridItems={thumbnailGridItems} />
      <Navigation url={serializeToQueryParam({[QUERY_PARAMS.PAGE]: ''}, PAGES.HOME)} page={parseInt(page, 10)} />
      <CreditSource />
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  const page = query[QUERY_PARAMS.PAGE];
  const requestPage = page > 0 ? page : 1;
  const response = await fetch(`${TMDB_API_POPULAR_TV_SHOWS}&${QUERY_PARAMS.PAGE}=${requestPage}`);
  const { results: shows } = await response.json();
  return {shows};
};

export default Home;
