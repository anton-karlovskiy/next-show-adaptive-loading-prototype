

// TODO: confirm if we go with this
// import { useState } from 'react';
// import StatList from '../components/StatList';
// import EpisodesForSeasons from '../components/EpisodesForSeasons';

import Banner from '../components/Banner';
import { getTmdbAPIEndpoint, BACKDROP_SIZES, TMDB_IMAGES_BASE_URL } from '../config';
import { QUERY_PARAMS } from '../utils/constants';

// TODO: confirm if we go with this
// const createEpisodeInSeason = (seasons, episode) => {
//   return {...(seasons[episode.season] || {}), [episode.episode]: episode};
// };

const Show = ({ backdropPath, name }) => {
  // TODO: confirm if we go with this
  // const [currentSeason, setCurrentSeason] = useState(Object.keys(seasons).slice().pop());
  // const setSeason = season => {
  //   return () => setCurrentSeason(season);
  // };

  return (
    <>
      {/* TODO: adaptive loading */}
      <Banner bannerImage={`${TMDB_IMAGES_BASE_URL}${BACKDROP_SIZES.W780}${backdropPath}` }>
        <h1>{name}</h1>
        {/* TODO: confirm if we go with this */}
        {/* <StatList stats={stats} /> */}
      </Banner>
      {/* TODO: confirm if we go with this */}
      {/* <EpisodesForSeasons
        seasons={seasons}
        setSeason={setSeason}
        currentSeason={currentSeason} /> */}
    </>
  );
};

Show.getInitialProps = async ({ query }) => {
  const id = query[QUERY_PARAMS.ID];

  const response = await fetch(getTmdbAPIEndpoint(`/tv/${id}`));
  const show = await response.json();
  return {
    backdropPath: show.backdrop_path,
    name: show.name
  };

  // TODO: confirm if we go with this
  // const seasons = show.episodes.reduce((seasons, episode) => {
  //   seasons[episode.season] = createEpisodeInSeason(seasons, episode);
  //   return seasons;
  // }, {});
  // const stats = [
  //   {
  //     label: 'Rating',
  //     unit: 'stars',
  //     value: (show.rating.percentage / 100 * 5).toFixed(1)
  //   },
  //   {
  //     label: 'Seasons available',
  //     value: show.num_seasons
  //   },
  //   {
  //     label: 'Episodes available',
  //     value: show.episodes.length
  //   }
  // ];
  // return {show, seasons, stats};
};

export default Show;
