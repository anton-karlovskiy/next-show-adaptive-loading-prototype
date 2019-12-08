
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Navigation from '../components/Navigation';
import CreditSource from '../components/CreditSource';

const Home = ({ shows }) => {
  const router = useRouter();
  const { page } = router.query;
  const thumbnailGridItems = shows.map(show => ({id: show._id, thumbnail: show.images.poster}));
  
  return (
    <>
      <SearchForm shows={shows} />
      <ThumbnailGrid thumbnailGridItems={thumbnailGridItems} />
      <Navigation url='/?page=' page={parseInt(page, 10)} />
      <CreditSource />
    </>
  );
};

Home.getInitialProps = async ({ query: { page } }) => {
  const requestPage = page > 0 ? page : 1;
  // TODO: feeding IMDB API data instead of sample data & API endpoint config
  const response = await fetch(`https://api-fetch.website/tv/shows/${requestPage}`);
  const shows = await response.json();
  return {shows};
};

export default Home;
