
// Configuration for TMDB
// To see the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const TMDB_API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335'; // TODO: replace API_KEY, it's from react-movie-network-aware-loading
const TMDB_API_VERSION = 3;
const TMDB_CATEGORY = '/tv/popular/';
const TMDB_LANGUAGE = 'en-US';

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/';
const TMDB_API_POPULAR_TV_SHOWS = `${TMDB_API_BASE_URL}${TMDB_API_VERSION}${TMDB_CATEGORY}?api_key=${TMDB_API_KEY}&language=${TMDB_LANGUAGE}`;

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZES = {
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W342: 'w342',
  W500: 'w500',
  W780: 'w780',
  ORIGINAL: 'original'
};

const TMDB_IMAGES_BASE_URL ='https://image.tmdb.org/t/p/';

export {
  TMDB_API_POPULAR_TV_SHOWS,
  TMDB_IMAGES_BASE_URL,
  POSTER_SIZES
};
