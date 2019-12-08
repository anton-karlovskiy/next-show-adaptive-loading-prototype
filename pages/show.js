
import { useState } from 'react';

import Banner from '../components/Banner';
import StatList from '../components/StatList';
import EpisodesForSeasons from '../components/EpisodesForSeasons';


const createEpisodeInSeason = (seasons, episode) => {
  return {...(seasons[episode.season] || {}), [episode.episode]: episode};
};

const Show = ({ show, seasons, stats }) => {
  const [currentSeason, setCurrentSeason] = useState(Object.keys(seasons).slice().pop());

  const setSeason = season => {
    return () => setCurrentSeason(season);
  };

  return (
    <div>
      <Banner bannerImage={show.images.banner}>
        <h1>{show.title}</h1>
        <StatList stats={stats} />
      </Banner>
      <EpisodesForSeasons
        seasons={seasons}
        setSeason={setSeason}
        currentSeason={currentSeason} />
    </div>
  );
};

Show.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`https://api-fetch.website/tv/show/${id}`);
  const show = await response.json();
  const seasons = show.episodes.reduce((seasons, episode) => {
    seasons[episode.season] = createEpisodeInSeason(seasons, episode);
    return seasons;
  }, {});

  const stats = [
    {
      label: 'Rating',
      unit: 'stars',
      value: (show.rating.percentage / 100 * 5).toFixed(1)
    },
    {
      label: 'Seasons available',
      value: show.num_seasons
    },
    {
      label: 'Episodes available',
      value: show.episodes.length
    }
  ];

  return { show, seasons, stats };
};

export default Show;
